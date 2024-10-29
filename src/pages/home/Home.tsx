import Banner from "../../components/banner"
import BlogPage from "../../components/blogpage/BlogPage"

function Home() {
  return (
    <div >
      <Banner/>
      <div className="max-w-7x1 mx-auto">
        <BlogPage/>
      </div>
    </div>
  )
}

export default Home


