import Blogpage from "../../components/blogpage"

function Blogs() {




  return (
    <div className="bg-pink-600 w-screen">
      <div className="py-28 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Blog Page</h2>
      </div>

      {/* all blogs container */}
      <div className="max-w-7x1 mx-auto bg-sky-500 flex items-center justify-center">
        <Blogpage />
      </div>

    </div>
  )
}

export default Blogs