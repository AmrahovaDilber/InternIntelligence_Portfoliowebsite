
import { connectionData } from "../constant/data";



const Connection:React.FC=()=> {
  return (
    <div className="w-full max-w-[100%] sm:max-w-[50%]  flex flex-col justify-center  px-4 sm:px-0">
      {connectionData.map((item) => (
        <div
          key={item.id}
          className="flex gap-1   space-y-6 sm:space-y-0 sm:space-x-5 text-white mb-10 items-center"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-xl flex w-10 h-10 sm:w-12 sm:h-12 rounded-full justify-center items-center">
            {item.icon}
          </div>
          <div className="flex flex-col ">
            <p className="mb-1 sm:mb-0 sm:mr-4 text-[15px] sm:text-[17px]">
              {item.name}
            </p>
            <a
              href={item.href}
              className="text-lg sm:text-xl font-semibold mt-1 sm:mt-0"
            >
              {item.infor}
            </a>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Connection;
