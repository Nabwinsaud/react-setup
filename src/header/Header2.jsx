import React from "react";

const Header2 = () => {
  return (
    <div className="">
      <div className="flex bg-[#cfd8dc] w-full">
        <div className="flex w-full md:max-w-6xl md:mx-auto overflow-x-scroll scrollbar-hide">
          <ul className="flex items-center p-3 space-x-4 whitespace-nowrap">
            <li className="text-[18px] font-bold text-[#333333] hover:cursor-pointer">
              <span className="ml-2">Nepal</span>
            </li>
            <li className="text-[17px]  text-[#333333] hover:cursor-pointer">
              <span className="ml-2">Kathamndu</span>
            </li>
            <li className="text-[17px] text-[#333333] hover:cursor-pointer">
              <span className="ml-2">Pokhara</span>
            </li>
            <li className="text-[17px] hover:cursor-pointer">
              <span className="ml-2">lalitpur</span>
            </li>
            <li className="text-[17px] hover:cursor-pointer">
              <span className="ml-2">Bhaktapur</span>
            </li>
            <li className="text-[17px] hover:cursor-pointer">
              <span className="ml-2">Outside valley</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header2;
