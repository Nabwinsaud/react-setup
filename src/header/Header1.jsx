import React from "react";
import {
  AiOutlineStar,
  AiOutlineCalendar,
  AiOutlineTrophy,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsCardList, BsMap } from "react-icons/bs";
const Header1 = () => {
  return (
    <div className="">
      <div className="flex bg-[#b0bec5] w-full">
        <div className="flex w-full md:max-w-6xl md:mx-auto overflow-x-scroll scrollbar-hide">
          <ul className="flex items-center p-3 space-x-4 whitespace-nowrap">
            <li className="md:text-[18px]  font-bold text-[#333333] hover:cursor-pointer">
              <span className="flex items-center">
                <AiOutlineStar />
                <span className="ml-2">MUN Highlights</span>
              </span>
            </li>
            <li className="text-[17px]  text-[#333333] hover:cursor-pointer">
              <span className="flex items-center">
                <BsCardList />
                <span className="ml-2">FULL MUN list</span>
              </span>
            </li>
            <li className="text-[17px] text-[#333333] hover:cursor-pointer">
              <span className="flex items-center">
                <BsMap />
                <span className="ml-2">MUN Map</span>
              </span>
            </li>
            <li className="text-[17px] hover:cursor-pointer">
              <span className="flex items-center">
                <AiOutlineCalendar />
                <span className="ml-2">MUN Calender</span>
              </span>
            </li>
            <li className="text-[17px] hover:cursor-pointer">
              <span className="flex items-center">
                <AiOutlineTrophy />
                <span className="ml-2">Hall of Fame</span>
              </span>
            </li>
            <li className="text-[17px] hover:cursor-pointer">
              <span className="flex items-center">
                <AiOutlinePlus />
                <span className="ml-2">Add your college</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header1;
