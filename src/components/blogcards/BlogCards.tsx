import { InterfaceArticleBlog } from "../../utils/types"

interface typeArrayBlogProp {
    blogs: InterfaceArticleBlog[]
}

const BlogCards: React.FC<typeArrayBlogProp> = ({ blogs }) => {



    return (
        <div>
            {
                blogs.map((item: any) => (
                    <p key={item.id}>Author id: {item.id}</p>
                ))}
        </div>
    )
}

export default BlogCards