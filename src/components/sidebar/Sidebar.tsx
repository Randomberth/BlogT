import { useEffect, useState } from "react"
import { InterfaceArticleBlog } from "../../utils/types"
import { getAllBlog } from "../../utils/getblog"
import { useBlogStore } from "../../store/blogStore"



function Sidebar() {
    const [popularBlogs, setPopularBlogs] = useState<InterfaceArticleBlog[]>([])

    const { data } = useBlogStore();

    useEffect(() => {
        const data = getDataSlice();
        console.log("popularBlogs:", data)
        
      
    }, [])
    

    const getDataSlice = ():InterfaceArticleBlog[] | undefined  => {
        const response: InterfaceArticleBlog[] | undefined  = data?.slice(0, 5);
        return response
    }


  return (
    <div className="flex-col">
        <div className="bg-yellow-50 m-auto">
            <h3 className="text-2xl font-semibold px-4">Latest Blogs</h3>
        </div>
    </div>
  )
}

export default Sidebar