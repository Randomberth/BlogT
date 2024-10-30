import { useEffect, useMemo, useState } from "react"
import { InterfaceArticleBlog } from "../../utils/types"
import { useBlogStore } from "../../store/blogStore"
import { FaArrowRight } from "react-icons/fa6"
import { Link } from "react-router-dom"



function Sidebar() {
    const [latestBlogs, setlatestBlogs] = useState<InterfaceArticleBlog[] | undefined>([])
    const [popularBlogs, setPopularBlogs] = useState<InterfaceArticleBlog[] | undefined>([])
    

    const { data } = useBlogStore();

    useEffect(() => {
        getDataLatest;
        getDataPopular;
        console.log("data: ", latestBlogs)
        console.log("popularBlogs: ",popularBlogs);
        
      
    }, [])
    
    const getDataLatest = useMemo(()=> {
        const response: InterfaceArticleBlog[] | undefined  = data?.slice(0, 3);
        setlatestBlogs(response)
    }, [data])

    const getDataPopular = useMemo(()=> {
        const response: InterfaceArticleBlog[] | undefined  = data?.slice(4, 7);
        setPopularBlogs(response)
    }, [data])

    



  return (
    <div className="flex-col mt-4">
        <div className="bg-yellow-50 m-auto">
            <h3 className="text-2xl font-semibold px-4">Latest Blogs</h3>
            <div>
                {
                    latestBlogs?.map(blog => <div key={blog.id} className="my-5 border-b-2 border-spacing-2 px-4">
                        <h4 className="font-normal mb-2">{blog.title}</h4>
                        <Link to={"/"} className="font-base pb-2 hover:text-orange-500 inline-flex items-center py-1">Read more <FaArrowRight className="mt-1 ml-2"/>  </Link>

                    </div>)
                }
            </div>
        </div>

        <div className="bg-yellow-50 m-auto mt-10">
            <h3 className="text-2xl font-semibold px-4">Popular Blogs</h3>
            <div>
                {
                    popularBlogs?.map(blog => <div key={blog.id} className="my-5 border-b-2 border-spacing-2 px-4">
                        <h4 className="font-medium mb-2">{blog.title}</h4>
                        <Link to={"/"} className="font-base pb-2 hover:text-orange-500 inline-flex items-center py-1">Read more <FaArrowRight className="mt-1 ml-2"/>  </Link>

                    </div>)
                }
            </div>
        </div>

    </div>
  )
}

export default Sidebar