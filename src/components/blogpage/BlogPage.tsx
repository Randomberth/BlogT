import { useEffect, useState } from "react";
import { getAllBlog } from "../../utils/getblog";
import { InterfaceArticleBlog } from "../../utils/types";
import Blogcards from "../blogcards";

function BlogPage() {

  const [dataBlog, setDataBlog] = useState<InterfaceArticleBlog[]>([])
  // pending const [currentPAge, setCurrentPAge] = useState<number>(1)
  // pending const [SelectedCategory, setSelectedCategory] = useState<any>(null)
  // pending const pageSize = 12 // blogs per page

  useEffect(() => {
    getDataB().catch(null)

  }, [])

  async function getDataB() { 
    const dataB: InterfaceArticleBlog[] | undefined = await getAllBlog()
    const dataToUse: InterfaceArticleBlog[] = dataB || [];
    setDataBlog(dataToUse);
  }
  //console.log('dataBlog :', dataBlog);


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
        <Blogcards blogs={dataBlog} />
      </div>

      {/* pagination section */}
      <div>Pagination Section</div>




    </div>
  )
}

export default BlogPage