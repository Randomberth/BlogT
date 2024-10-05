import { InterfaceArticleBlog } from "../../utils/types"

interface typeArrayPaginationProp {
  blogs: InterfaceArticleBlog[]
  currentPage: number,
  pageSize: number,
  elementsByCategory: number,
  onPageChange: (pageNumber: number) => void
}



const Pagination: React.FC<typeArrayPaginationProp> = ({ blogs, currentPage, pageSize, elementsByCategory, onPageChange }) => {
  let PaginationBlog: InterfaceArticleBlog[] = blogs
  console.log("log de tramite", PaginationBlog);

  const totalPages = Math.ceil(elementsByCategory / pageSize)
  console.log("TotalPages", totalPages);
  console.log("Current Page", currentPage, "Elements of Page", pageSize, "Elements by Category", elementsByCategory);

  const pagesNumbers = []

  for (let i = 1; i <= totalPages; i++ ) {
    pagesNumbers.push(i)
  }

  const pageChangeUp = (nPageF: number):void => {
    const next: number = (nPageF >= totalPages ) ? nPageF : nPageF + 1
    onPageChange(next)
   }

  const pageChangeDown = (nPageF: number):void => {
    const previous: number = (nPageF <= 1 ) ? nPageF : nPageF - 1
    console.log(previous);
    
    onPageChange(previous)
    }

  return (
    <div className="text-bold text-violet-600 flex gap-4 items-center py-4">
      <nav className="flex gap-4">
        <a className="font-bold text-violet-700 cursor-pointer" onClick={() => pageChangeDown(currentPage)}>
          Previus
        </a>
          <ul className="flex gap-3">
            {pagesNumbers.map( nPage => (
              <li key={nPage}>
                <a className="cursor-pointer" onClick={() => onPageChange(nPage)}>{nPage}</a>
              </li>
            ))}
            <li>

            </li>
          </ul>
        <a className="font-bold text-violet-700 cursor-pointer"  onClick={() => pageChangeUp(currentPage)}>
          Next
        </a>

      </nav>

{/*      <button
        className="w-20 h-8 rounded-lg bg-violet-700"
        onClick={() => onPageChange(10)}>
        GO!
  </button>    */}
    </div>
  )
}

export default Pagination