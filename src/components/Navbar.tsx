import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLink from "./Navlink";
import { navLinks } from "../constant/data";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const[activeLink,setActiveLink]=useState("Home")

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="relative">
      <button
        onClick={toggleMenu}
        className="md:hidden absolute top-[-10px] right-0 z-50 text-gray-300"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          <FaTimes className="h-6 w-6 hover:text-indigo-300 transition-colors" />
        ) : (
          <FaBars className="h-6 w-6 hover:text-indigo-300 transition-colors" />
        )}
      </button>

      <ul className="hidden md:flex space-x-6 lg:space-x-8">
        {navLinks.map((link) => (
         <li
         key={link.href}
         className={`text-md lg:text-lg font-semibold transition-all duration-300 ease-in-out ${
           activeLink === link.href
             ? "text-white border-b-2 border-indigo-300 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-md px-2 py-1"
             : "text-gray-300 hover:text-indigo-400 hover:bg-indigo-100 hover:rounded-md px-2 py-1"
         }`}
       >
         <a
           href={link.href}
           onClick={() => setActiveLink(link.href)}
           className="scroll-smooth"
         >
           {link.title}
         </a>
       </li>
       
        ))}
      </ul>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gradient-to-br from-indigo-800 via-gray-900 to-indigo-900 z-40 flex flex-col items-center justify-center">
          <ul className="space-y-8 text-center">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="text-gray-300 text-2xl font-bold hover:text-indigo-300 transition-colors"
                onClick={toggleMenu}
              >
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
