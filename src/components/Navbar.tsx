import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLink from "./Navlink";
import { navLinks } from "../constant/data";



function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="relative">
      <button
        onClick={toggleMenu}
        className="md:hidden absolute top-0 right-0 z-50 text-gray-300"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          <FaTimes className="h-6 w-6 hover:text-indigo-300 transition-colors" />
        ) : (
          <FaBars className="h-6 w-6 hover:text-indigo-300 transition-colors" />
        )}
      </button>

      <ul className="hidden md:flex space-x-6 lg:space-x-10">
        {navLinks.map((link) => (
          <li
            key={link.href}
            className="text-gray-300 font-semibold text-md lg:text-lg hover:text-indigo-300 transition-colors"
          >
            <NavLink href={link.href} title={link.title} />
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
