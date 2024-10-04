import { useEffect, useState } from "react";
import { getFilteredBlog } from "../../utils/getblog";
import { InterfaceArticleBlog } from "../../utils/types";
import Blogcards from "../blogcards";
import Pagination from "../pagination";

function BlogPage() {

  const [dataBlog, setDataBlog] = useState<InterfaceArticleBlog[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
//  //  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const pageSize: number = 12 // blogs per page
  
  useEffect(() => {
    
    getDataB().catch(null)

    if (currentPage == 0)
      {setCurrentPage(1)
      setSelectedCategory("AI")
      }

  }, [pageSize, currentPage, selectedCategory])

  async function getDataB() {
    const dataB: InterfaceArticleBlog[] | undefined = await getFilteredBlog(pageSize, currentPage, selectedCategory)
    const dataToUse: InterfaceArticleBlog[] = dataB || [];
    setDataBlog(dataToUse);
  }
  //console.log('dataBlog :', dataBlog);
/*
const handlePageChange = (pageNumber: number): void => {
  setCurrentPage(pageNumber);
}

/*const handleCategoryChange = (category: string | null): void => {
  setSelectedCategory(category);
  setActiveCategory(category);
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
      <Blogcards blogs={dataBlog}/>   
  
      </div>

      {/* pagination section */}
      <div>
        <Pagination blogs={dataBlog} currentPage={currentPage}  pageSize={pageSize} /* onPageChange={handlePageChange}*//>
      </div>




    </div>
  )
}

export default BlogPage