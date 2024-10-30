import { useEffect, useMemo, useState } from "react";
import { getFilteredBlog, getLenghtCategory } from "../../utils/getblog";
import { getDataCategories } from "../../utils/getMetaData";
import { useBlogStore } from "../../store/blogStore"
import { InterfaceArticleBlog } from "../../utils/types";
import Blogcards from "../blogcards";
import Pagination from "../pagination";
import CategoryFilter from "../categoryFilter";
import Sidebar from "../sidebar";



function BlogPage() {


  const { selectedCategory, setSelectedCategory, currentPage, setCurrentPage, pageSize } = useBlogStore();
  const { dataBlog, setDataBlog } = useBlogStore();
  const [categories, setCategories] = useState<string[] | undefined>([])
  const [elementsByCategory, setElementsByCategory] = useState<number>(0)
  const [totalPages, setTotalPages] = useState<number>(0)

  /////
  const memoTotalPages = useMemo(() => Math.ceil(elementsByCategory / pageSize), [elementsByCategory, pageSize, selectedCategory]);
  
  /////

  async function getDataBlog() {
    try {
      const dataB: InterfaceArticleBlog[] | undefined = await getFilteredBlog(pageSize, currentPage, selectedCategory)
      const dataToUse: InterfaceArticleBlog[] = dataB || [];
      setDataBlog(dataToUse);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {

    getDataBlog().catch(null)
    getPagesByCategory().catch(null)
    getCategoriesName();

    if (currentPage == 0) {
      setCurrentPage(1)
      setSelectedCategory("AI")
      setElementsByCategory(0)
    }

    setTotalPages(memoTotalPages);
  }, [currentPage, selectedCategory, elementsByCategory])



  const getCategoriesName = async () => {
    try {
      const arrayCategories: string[] | undefined = await getDataCategories()
      setCategories(arrayCategories)

    } catch (error) {
      console.log(error);

    }
  }

  async function getPagesByCategory() {
    const pages: number = await getLenghtCategory(selectedCategory)
    setElementsByCategory(pages)
  }


  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  }

  const handleCategoryChange = (category: string | null): void => {
    setSelectedCategory(category);
    setCurrentPage(1);
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-white "> 

      <div>
        <CategoryFilter categories={categories} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      </div>
      <div className="flex flex-col bg-violet-500  lg:flex-row ">
        <div className=" bg-purple-300 flex flex-col items-center m-2">
          <Blogcards blogs={dataBlog} /> 
        
          <div >
            <Pagination
              currentPage={currentPage}
              onPageChange={handlePageChange}
              elementsByCategory={elementsByCategory}
              totalPages={totalPages}
            />
          </div> 
          
          
        </div> 
        <div className="flex justify-center w-[22%] bg-orange-400">

          <Sidebar/> 
        
        </div> 


      
      </div>
                
    </div>
  )
}

export default BlogPage