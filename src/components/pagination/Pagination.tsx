//import { useEffect, useState } from "react"

interface typeArrayPaginationProp {
  currentPage: number,
  pageSize: number,
  elementsByCategory: number,
  onPageChange: (pageNumber: number) => void,
  //pagesNumbers: number[]
}

const Pagination: React.FC<typeArrayPaginationProp> = ({ currentPage, pageSize, elementsByCategory, onPageChange }) => {



  const totalPages = Math.ceil(elementsByCategory / pageSize)
  const pagesNumbers: number[] = []

  for (let i = 1; i <= totalPages; i++) {
    pagesNumbers.push(i)
  }

  const pageChangeUp = (nPageF: number): void => {
    const next: number = (nPageF >= totalPages) ? nPageF : nPageF + 1
    onPageChange(next)
    /*  if (nPageF >= 3) {
        setSliceNumberPages([initLimit + 1, endLimit + 1])
      }*/
  }

  const pageChangeDown = (nPageF: number): void => {
    const previous: number = (nPageF <= 1) ? nPageF : nPageF - 1
    onPageChange(previous)
    /*  if (nPageF <= (totalPages - 3)) {
        setSliceNumberPages([initLimit - 1, endLimit - 1])
  
      }*/
  }

  let val: string | null = null;


  return (
    <div className=" flex gap-4 items-center py-4">
      <nav className="flex gap-7">
        <a className="font-bold cursor-pointer" onClick={() => pageChangeDown(currentPage)}>
          Previus
        </a>
        <ul className="flex gap-5" >
          {pagesNumbers.map(nPage => (
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