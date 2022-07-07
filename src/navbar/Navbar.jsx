import React, { useState } from "react";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full bg-[#90a4ae] ">
      {/* <div className=""> */}
      <div className="flex md:flex-row md:items-center justify-between flex-col items-start p-4 md:p-0 ">
        <div className="flex item-1 mx-2 items-center flex-col md:flex-row relative">
          <div
            className="font-bold hover:cursor-pointer flex md:items-center md:mr-10"
            id="logo"
          >
            <h3 className="text-slate-800">Crown</h3>
          </div>
          <ul
            className={`flex md:static md:flex-row md:space-x-6 md:items-center flex-col items-start space-y-2
             ${open ? "top-[20]" : "top-[-600px] absolute"}`}
          >
            {/* <li className="font-bold  hover:cursor-pointer">
              <span className="text-slate-800">Crown</span>
            </li> */}
            <li className="flex flex-col  hover:cursor-pointer">
              <span className="font-bold text-gray-800 text-[17px] capitalize">
                Discover
              </span>
              <span className="text-[15px] font-700 capitalize">
                MUN conference
              </span>
            </li>
            <li className="flex flex-col  hover:cursor-pointer">
              <span className="font-bold text-gray-800 text-[17px] capitalize">
                Organize
              </span>
              <span className="text-[15px] font-700 capitalize">
                Software & promotion
              </span>
            </li>
            <li className="flex flex-col hover:cursor-pointer">
              <span className="font-bold text-[17px] text-slate-800 capitalize">
                MUN command
              </span>
              <span className="text-[14px] capitalize font-700">
                conference App
              </span>
            </li>
            <li className="flex flex-col hover:cursor-pointer">
              <span className="text-[17px] capitalize font-bold">Blog</span>
              <span className="text-[15px] capitalize font-700 ">
                News and announcement
              </span>
            </li>
          </ul>
        </div>

        {/* right login se */}
        <div className="items-start md:items-center md:mx-6 hover:cursor-pointer my-2 relative hidden md:flex ">
          <span className={`flex items-center space-x-1`}>
            <AiOutlineUser size={18} />
            <span className="font-800 text-[18px]">Log in</span>
          </span>
        </div>
        <div
          className="flex menu items-center md:hidden absolute top-[15px] right-8"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <AiOutlineClose size={25} /> : <GiHamburgerMenu size={25} />}
        </div>
        {/* </div> */}
      </div>
    </div>

    //   <div
    //     className="flex menu items-center md:hidden absolute top-[15px] right-8"
    //     onClick={() => {
    //       setOpen(!open);
    //     }}
    //   >
    //     {open ? <AiOutlineClose size={25} /> : <GiHamburgerMenu size={25} />}
    //   </div>
    //   {/* </div> */}
    // </div>
  );
};

export default Navbar;
