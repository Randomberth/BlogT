import { useEffect, useState } from "react";
import { getAllBlog } from "../../utils/getblog";


function BlogPage() {

  const [dataBlog, setDataBlog] = useState<any>([])

  useEffect(() => {
    getDataB().catch(null)

  }, [])

  async function getDataB (){
    const dataB = await getAllBlog()
    setDataBlog(dataB);
    console.log("my state dataBlog", dataB);
    
  }
  

  return (
    <div className="w-[400px] h-[400px] flex items-center justify-center bg-green-300">
      <h5 className="bg-white w-20">BlogPage </h5>

      {/* Map through the array and access the "author" property */}

      {dataBlog.map((item: any) => (
        <p key={item.id}>Author: {item.author}</p>
      ))}
      
      
      




    </div>
  )
}

export default BlogPage