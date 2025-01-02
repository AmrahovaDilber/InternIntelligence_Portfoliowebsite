const Logo:React.FC=()=> {
    return (
      <div className="flex items-center space-x-4 sm:space-x-6">
        <a href="/" className="hover:scale-105 transition-transform">
          <img
            src="/log.png"
            alt="logo"
            className="w-12 sm:w-16"
          />
        </a>
        <a href="mailto:dilberamrahova1@gmail.com">
          <p className="text-gray-300 text-sm sm:text-md font-semibold hover:text-indigo-300 transition-colors">
            dilberamrahova1@gmail.com
          </p>
        </a>
      </div>
    );
  }
  
  export default Logo;
  