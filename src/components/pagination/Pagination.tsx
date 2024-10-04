import { InterfaceArticleBlog } from "../../utils/types"

interface typeArrayPaginationProp {
  blogs: InterfaceArticleBlog[]
  currentPage: number,
  pageSize: number,
  pagesByCategory: number,
  onPageChange: (pageNumber: number) => void
}



const Pagination: React.FC<typeArrayPaginationProp> = ({ blogs, currentPage, pageSize, pagesByCategory, onPageChange }) => {
  let PaginationBlog: InterfaceArticleBlog[] = blogs
  console.log("log de tramite", PaginationBlog);


  /* const totalPages = Math.ceil(blogs.length / pageSize)
   console.log("TotalPages", totalPages); */



  console.log("Current Page", currentPage, "size of Page", pageSize, "pages By Category", pagesByCategory);

  return (
    <div className="text-bold text-violet-600 flex gap-4 items-center py-4">
      Pagination
      <button
        className="w-20 h-8 rounded-lg bg-violet-700"
        onClick={() => onPageChange(1)}>
        GO!
      </button>



    </div>
  )
}

export default Pagination