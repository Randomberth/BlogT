import { useEffect, useState } from "react";
import { getFilteredBlog, getLenghtCategory } from "../../utils/getblog";
import { getDataCategories } from "../../utils/getMetaData";
import { useBlogStore } from "../../store/blogStore"
import { InterfaceArticleBlog } from "../../utils/types";
import Blogcards from "../blogcards";
//import Pagination from "../pagination";
import CategoryFilter from "../categoryFilter";

function BlogPage() {


  const { selectedCategory, setSelectedCategory, currentPage, setCurrentPage, pageSize } = useBlogStore();
  const { dataBlog, setDataBlog } = useBlogStore();
  const [categories, setCategories] = useState<string[] | undefined>([])
  const [elementsByCategory, setElementsByCategory] = useState<number>(0)
  const [sliceNumberPages, setSliceNumberPages] = useState<number[]>([])
  const [totalPages, setTotalPages] = useState<number>(0)
  //const totalPages = Math.ceil(elementsByCategory / pageSize)



   
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
    console.log("testRender");

    pages();
    

    if (currentPage == 0) {
      setCurrentPage(1)
      setSelectedCategory("AI")
      setElementsByCategory(0)
    }

  }, [currentPage, selectedCategory])



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

// pagination section


const pages = () => {

  const totalPages = Math.ceil(elementsByCategory / pageSize)
  setTotalPages(totalPages);

  const pagesNumbers: number[] = [] 
  console.log(totalPages);
  
  for (let i = 1; i <= totalPages; i++) {
    pagesNumbers.push(i)
  }
  const auxPagesNumbersT: number [] = pagesNumbers.slice(0, 5)
  console.log("Slice Array:", auxPagesNumbersT);
  
  setSliceNumberPages(auxPagesNumbersT);
  console.log("State Slice: ", sliceNumberPages);
}



const pageChangeUp = (nPageF: number): void => {
  const next: number = (nPageF >= totalPages) ? nPageF : nPageF + 1
  handlePageChange(next)
  
  /*  if (nPageF >= 3) {
      setSliceNumberPages([initLimit + 1, endLimit + 1])
    }*/
}

const pageChangeDown = (nPageF: number): void => {
  const previous: number = (nPageF <= 1) ? nPageF : nPageF - 1
  handlePageChange(previous)
  /*  if (nPageF <= (totalPages - 3)) {
      setSliceNumberPages([initLimit - 1, endLimit - 1])

    }*/
}

let val: string | null = null;

/////////////////////////




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
      <div className=" flex gap-4 items-center py-4">
{/*        <Pagination currentPage={currentPage} pageSize={pageSize} elementsByCategory={elementsByCategory} onPageChange={handlePageChange} auxPagesNumbersT={auxPagesNumbersT}/> */}
        <nav className="flex gap-7">
          <a className="font-bold cursor-pointer" onClick={() => pageChangeDown(currentPage)}>
            Previus
          </a>
          <ul className="flex gap-5" >
            {sliceNumberPages.map(nPage => (
              <li key={nPage}
                className={`flex  w-7 h-7 border rounded-md justify-center items-center ${nPage === currentPage ? 'font-extrabold text-xl underline bg-slate-100' : 'font-normal'}`}>
                <a className="cursor-pointer " onClick={() => handlePageChange(nPage)} style={{ backgroundColor: `${val}` }} >{nPage}</a>
              </li>
            ))}
          </ul>
          <a className="font-bold cursor-pointer" onClick={() => pageChangeUp(currentPage)}>
            Next
          </a>
        </nav>
      </div>




    </div>
  )
}

export default BlogPage