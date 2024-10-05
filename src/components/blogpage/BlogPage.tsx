import { useEffect, useState } from "react";
import { getFilteredBlog, getLenghtCategory } from "../../utils/getblog";
import { InterfaceArticleBlog } from "../../utils/types";
import Blogcards from "../blogcards";
import Pagination from "../pagination";

function BlogPage() {

  const [dataBlog, setDataBlog] = useState<InterfaceArticleBlog[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  //const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [elementsByCategory, setElementsByCategory] = useState<number>(0)
  const pageSize: number = 9 // blogs per page

  useEffect(() => {
    getDataBlog().catch(null)
    getPagesByCategory().catch(null)

    if (currentPage == 0) {
      setCurrentPage(1)
      setSelectedCategory("AI")
      setElementsByCategory(0)
    }

  }, [pageSize, currentPage, selectedCategory])

  async function getDataBlog() {
    const dataB: InterfaceArticleBlog[] | undefined = await getFilteredBlog(pageSize, currentPage, selectedCategory)
    const dataToUse: InterfaceArticleBlog[] = dataB || [];
    setDataBlog(dataToUse);
  }
//  console.log('Articles by Page :', pageSize);
//  console.log("total articles by category", pagesByCategory);


  async function getPagesByCategory() {
    const pages: number = await getLenghtCategory(selectedCategory)
    setElementsByCategory(pages)
  }


  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  }

  /*const handleCategoryChange = (category: string | null): void => {
    setSelectedCategory(category);
    //setActiveCategory(category);
    setCurrentPage(1);
  }*/



  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center bg-white">


      {/* Map through the array and access the "author" property      

      {dataBlog.map((item: any) => (
        <p key={item.id}>Author id: {item.id}</p>
      ))}
      */}

      {/* category section */}
      <div> Page Category</div>

      {/* blogCards section */}
      <div>
        {/*    <Blogcards blogs={dataBlog} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />   */}
        <Blogcards blogs={dataBlog} />

      </div>

      {/* pagination section */}
      <div>
        <Pagination blogs={dataBlog} currentPage={currentPage} pageSize={pageSize} elementsByCategory={elementsByCategory} onPageChange={handlePageChange} />
      </div>




    </div>
  )
}

export default BlogPage