import { useEffect, useState } from "react";
//import { getAllBlog } from "../../utils/getblog";
//import { ArrayTest } from "../../utils/constants";
import { InterfaceArticleBlog } from "../../utils/types";


function BlogPage() {

  const [dataBlog, setDataBlog] = useState<InterfaceArticleBlog[]>([])

  useEffect(() => {
    getDataB().catch(null)

  }, [])

  async function getDataB() {
    //const dataB: InterfaceArticleBlog[] | undefined = await getAllBlog()
    const dataB = undefined
    const dataToUse: InterfaceArticleBlog[] = dataB || [];
    setDataBlog(dataToUse);
  }
  console.log('dataBlog :', dataBlog);


  return (
    <div className="w-[400px] h-[400px] flex flex-col items-center justify-center bg-green-300 mt-2">
      {/* Map through the array and access the "author" property      */}

      {dataBlog.map((item: any) => (
        <p key={item.id}>Author id: {item.id}</p>
      ))}


    </div>
  )
}

export default BlogPage