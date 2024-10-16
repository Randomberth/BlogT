import { useEffect, useState } from "react";
import { getFilteredBlog, getLenghtCategory } from "../../utils/getblog";
import { getDataCategories } from "../../utils/getMetaData";
import { useBlogStore } from "../../store/blogStore"
import { InterfaceArticleBlog } from "../../utils/types";
import Blogcards from "../blogcards";
import Pagination from "../pagination";
import CategoryFilter from "../categoryFilter";

function BlogPage() {

  const { selectedCategory, setSelectedCategory, currentPage, setCurrentPage, pageSize } = useBlogStore();

  const [categories, setCategories] = useState<string[] | undefined>([])
  const [elementsByCategory, setElementsByCategory] = useState<number>(0)

  const [dataBlog, setDataBlog] = useState<InterfaceArticleBlog[]>([])

  async function getDataBlog() {
    try {
      const dataB: InterfaceArticleBlog[] | undefined = await getFilteredBlog(pageSize, currentPage, selectedCategory)
      const dataToUse: InterfaceArticleBlog[] = dataB || [];
      setDataBlog(dataToUse);
    } catch (error) {
      console.log(error);
    }
  }

  //////
  useEffect(() => {
    getDataBlog().catch(null)
    getPagesByCategory().catch(null)
    getCategoriesName();

    //const pagesNumbers: number[] = limitPagintation(totalPages)

    if (currentPage == 0) {
      setCurrentPage(1)
      setSelectedCategory("AI")
      setElementsByCategory(0)
    }

  }, [pageSize, currentPage, selectedCategory])




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
  ////////////

  const totalPages = Math.ceil(elementsByCategory / pageSize)

  const limitPagintation = (totalPages: number): number[] => {
    const pagesNumbers: number[] = []

    for (let i = 1; i <= totalPages; i++) {
      pagesNumbers.push(i)
    }
    console.log(pagesNumbers);

    return pagesNumbers
  }

  const pagesNumbers: number[] = limitPagintation(totalPages)

  ////////////



  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center bg-white">

      {/* category section */}
      <div>
        <CategoryFilter categories={categories} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      </div>

      {/* blogCards section */}
      <div>
        <Blogcards blogs={dataBlog} />
      </div>

      {/* pagination section */}
      <div>
        <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages} pagesNumbers={pagesNumbers} />
      </div>




    </div>
  )
}

export default BlogPage