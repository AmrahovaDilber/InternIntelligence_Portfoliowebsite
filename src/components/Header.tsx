import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="py-4 bg-black bg-opacity-80 fixed w-full left-0 top-0 z-50 shadow-lg ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-0">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
