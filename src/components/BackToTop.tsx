import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isShown, setIsShown] = useState(false);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsShown(true);
      } else {
        setIsShown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-8 sm:bottom-8 sm:right-10 z-20">
      {isShown && (
         <button
         onClick={backToTop}
         className="h-10 w-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r text-white shadow-lg from-purple-500 via-blue-500 to-indigo-500 transition duration-300 flex items-center justify-center transform hover:scale-110"
         style={{
           boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
         }}
       >
         <FaArrowUp className="text-lg sm:text-xl" />
       </button>
      )}
    </div>
  );
};

export default BackToTop;
