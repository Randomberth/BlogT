import { useEffect, useState } from "react";
//import { getAllBlog } from "../../utils/getblog";
import { ArrayTest } from "../../utils/constants";

const BASE_URL = import.meta.env.VITE_BASE_URL


function BlogPage() {

  const [dataBlog, setDataBlog] = useState<any>([])

  useEffect(() => {
    //getDataB().catch(null)
    setDataBlog(ArrayTest)

  }, [])

  //  async function getDataB (){
  //    const dataB = await getAllBlog()
  //    dataB?.length === 0 ? setDataBlog(ArrayTest) : setDataBlog(dataB);
  //    setDataBlog(ArrayTest)

  //  }


  return (
    <div className="w-[400px] h-[400px] flex items-center justify-center bg-green-300">
      <h5 className="bg-white ml-4">URL : {BASE_URL} ::: </h5>

      {/* Map through the array and access the "author" property      */}

      {dataBlog.map((item: any) => (
        <p key={item.id}>Author: {item.author}</p>
      ))}








    </div>
  )
}

export default BlogPage