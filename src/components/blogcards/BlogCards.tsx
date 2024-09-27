import { NavLink } from "react-router-dom";
import { InterfaceArticleBlog } from "../../utils/types"
import { FaUser } from "react-icons/fa6";
import { format } from 'date-fns';


interface typeArrayBlogProp {
    blogs: InterfaceArticleBlog[]
}

const BlogCards: React.FC<typeArrayBlogProp> = ({ blogs }) => {

    let filteredBlogs: InterfaceArticleBlog[] = []

    //const filteredBlogs: InterfaceArticleBlog[] = blogs
    filteredBlogs = blogs
    
    console.log('filteredBlogs ::::', filteredBlogs);

    const dateToText = (date: Date): string => {
        const formattedDate = format(date, 'yyyy-MM-dd'); // Ajusta el formato según tus necesidades

        return formattedDate
    };

    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">

            {
                filteredBlogs &&
                filteredBlogs.map((blog) =>

                    <NavLink to="#" key={blog.id} className="p-5 shadow-lg rounded cursor-pointer">
                        <div>
                            <img src={blog.image} alt="" className="w-full" />
                        </div>
                        <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">{blog.title}</h3>
                        <p className="mb-2 text-gray-600"><FaUser className="inline-flex items-center mr-2" /> {blog.author}</p>
                        <p className="text-sm text-gray-600">Published: {dateToText(blog.published_date)}</p>

                    </NavLink>)







                /*                filteredBlogs.map((item: any) => (
                                    <p key={item.id}>Author id: {item.id}</p>
                                ))*/
            }
        </div>
    )
}

export default BlogCards