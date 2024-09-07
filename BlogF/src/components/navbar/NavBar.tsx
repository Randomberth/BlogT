import { NavLink } from "react-router-dom"


//react icons
import { FaFacebook, FaDribbble, FaTwitter, FaBars } from "react-icons/fa6"; 



function NavBar() {
  //navItems
  const navItems = [
    {path: "/", link: "Home"},
    {path: "/about", link: "About"},
    {path: "/blogs", link: "Blogs"},
    {path: "/contact", link: "Contact"},
    {path: "/services", link: "Services"},
  ]
  return (
    // <header className="bg-black text-white fixed top-0 left-0 right-0">
    <header className="bg-black text-white ">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">Design <span className="text-orange-500">DK</span></a>

        {/* navitems for lg devices */}

        <ul className="md:flex gap-12 text-lg hidden">
          {
            navItems.map(({path, link}) => <li className="text-white" key={path} ><NavLink to={path}>{link}</NavLink> </li> )
          }
        </ul>

        {/* menui icons */}
        <div className="text-white lg:flex gap-4 items-center hidden mt-3">
          <a href="/" className="hover:text-orange-500"> <FaFacebook/> </a>
          <a href="/" className="hover:text-orange-500"> <FaDribbble/> </a>
          <a href="/" className="hover:text-orange-500"> <FaTwitter/> </a>
          <button
            className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in"
          >
            Login
          </button>
        </div>

        {/* mobile menu btn, display screen */}
        <div className="md:hidden">
          <button className="cursor-pointer">
            <FaBars className="w-5 h-5" />
          </button>
        </div>

      </nav>
    </header>
  )
}

export default NavBar