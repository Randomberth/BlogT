import { InterfaceArticleBlog } from "../../utils/types"

interface typeArrayPaginationProp {
    blogs: InterfaceArticleBlog[]
    currentPage: number,
    pageSize: number,
    //onPageChange: () => void
}



const Pagination: React.FC<typeArrayPaginationProp> = ({blogs, currentPage,  pageSize}) => {
    let PaginationBlog: InterfaceArticleBlog[] = blogs

    const totalPages = Math.ceil(blogs.length / pageSize)
    console.log("TotalPages",totalPages);
    
    

    console.log("PaginationProps....",PaginationBlog, currentPage, pageSize);
    
  return (
    <div className="text-bold text-violet-600">Pagination</div>
  )
}

export default Pagination