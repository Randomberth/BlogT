import { useEffect, useState } from "react";
import { getAllBlog } from "../../utils/getblog";
//import { ArrayTest } from "../../utils/constants";


function BlogPage() {

  const [dataBlog, setDataBlog] = useState<any>([])

  useEffect(() => {
    getDataB().catch(null)

  }, [])

  async function getDataB() {
    const dataB = await getAllBlog()
    console.log('dataB  :', dataB);
    //dataB?.length === 0 ? setDataBlog(ArrayTest) : setDataBlog(dataB);
    setDataBlog(dataB);
  }


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