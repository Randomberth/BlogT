import { useEffect, useMemo, useState } from "react"

interface typeArrayPaginationProp {
  currentPage: number,
  onPageChange: (pageNumber: number) => void,
  elementsByCategory: number,
  totalPages: number
}

const Pagination: React.FC<typeArrayPaginationProp> = ({ currentPage, onPageChange, totalPages, elementsByCategory }) => {

  const [sliceNumberPages, setSliceNumberPages] = useState<number[]>([])


  useEffect(() => {
    memoSliceTotalPages

  }, [])

  const memoSliceTotalPages: number[] = useMemo(() => {
    let pagesNumbers: number[] = []
    for (let i = 1; i <= totalPages; i++) {
      pagesNumbers.push(i)
    }
    pagesNumbers = pagesNumbers.slice(0, 5);
    setSliceNumberPages(pagesNumbers)


    return pagesNumbers

  }, [totalPages, elementsByCategory]);




  const pageChangeUp = (nPage: number): void => {
    const next: number = (nPage >= totalPages) ? nPage : nPage + 1
    nPage = nPage + 1;
    onPageChange(next)

    if (totalPages <= 5) {
      // Do nothing

    } else {
      if ((nPage) < 3) {
        setSliceNumberPages([1, 2, 3, 4, 5])
      } else if (nPage > (totalPages - 2)) {
        //Handle the case when the page is near the end
      } else {
        setSliceNumberPages([nPage - 2, nPage - 1, nPage, nPage + 1, nPage + 2])
      }
    }
  }

  const pageChangeDown = (nPage: number): void => {
    const previous: number = (nPage <= 1) ? nPage : nPage - 1
    nPage = nPage - 1;
    onPageChange(previous)

    if (totalPages <= 5) {

      // Do nothing

    } else {
      if ((nPage) <= 3) {
        setSliceNumberPages([1, 2, 3, 4, 5])
      } else if (nPage > (totalPages - 2)) {
        //Handle the case when the page is near the end
      } else {
        setSliceNumberPages([nPage - 2, nPage - 1, nPage, nPage + 1, nPage + 2])
      }
    }
  }

  let val: string | null = null;

  return (
    <div className=" flex gap-4 items-center py-4">
      <nav className="flex gap-7">
        <a className="font-bold cursor-pointer" onClick={() => pageChangeDown(currentPage)}>
          Previus
        </a>
        <ul className="flex gap-5" >
          {sliceNumberPages.map(nPage => (
            <li key={nPage}
              className={`flex  w-7 h-7 border rounded-md justify-center items-center ${nPage === currentPage ? 'font-extrabold text-xl underline bg-slate-100' : 'font-normal'}`}>
              <a className="cursor-pointer " onClick={() => onPageChange(nPage)} style={{ backgroundColor: `${val}` }} >{nPage}</a>
            </li>
          ))}
        </ul>
        <a className="font-bold cursor-pointer" onClick={() => pageChangeUp(currentPage)}>
          Next
        </a>

      </nav>

    </div>
  )
}

export default Pagination