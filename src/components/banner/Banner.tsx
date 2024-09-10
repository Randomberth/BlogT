import { Link } from "react-router-dom"
import { FaArrowRight, FaRotateRight } from "react-icons/fa6"


function Banner() {
  return (
    <div className="w-screen px-4 py-14 bg-black mx-auto">
        <div className="text-white text-center">
            <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Welcome to Out Blog</h1>
            <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">Start your blog today and join community of writers and readers who are
                passionate about sharing their stories and ideas. we offer everything you need 
                to get started, from helpfull tips and tutorials.
            </p>
            <div>
                <Link to="/" className="font-medium hover:text-orange-500 inline-flex items-center" >Learn more<FaArrowRight className="mt-1 ml-2"/> </Link>
            </div>

        </div>
        Banner
    </div>
  )
}

export default Banner