import React from "react";
import { BsGlobe } from "react-icons/bs";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterFill,
} from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { BsCalendarDate } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
const ContentSinglePage = () => {
  return (
    <div className="bg-[#ede9e9]">
      <div className="flex flex-col">
        <div className="flex w-full h-[300px] bg-gradient-to-r bg-black ">
          <img
            className="w-full  object-cover"
            src="https://www.thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/12/British-College.jpg"
            alt="british"
          />
        </div>
        <div className="w-full max-w-6xl mx-auto my-4">
          {/* <div className="grid md:grid-cols-2 grid-cols-1 gap-5"> */}
          <div className="flex md:flex-row flex-col justify-between gap-3">
            {/* 1st */}
            <div className="flex flex-col basis-[250px] ">
              <div className="flex flex-col shadow-lg bg-white px-4">
                <h3 className="font-bold flex items-center">
                  <FcAbout className="mr-2" /> About
                </h3>
                <button className="bg-sky-700 whitespace-nowrap border-none my-3 hover:scale-110 transition-all duration-200 outline-none px-8 py-3 text-slate-50 rounded-md">
                  Apply now
                </button>
              </div>
              <div
                id="social-handle"
                className="flex items-center my-4 space-x-3 text-xl"
              >
                <span className="hover:cursor-pointer hover:text-blue-600">
                  <BsGlobe />
                </span>
                <span className="hover:cursor-pointer hover:text-sky-600">
                  <RiFacebookCircleFill />
                </span>
                <span className="hover:cursor-pointer hover:text-pink-700 ">
                  <RiInstagramFill />
                </span>
                <span className="hover:cursor-pointer hover:text-sky-600">
                  <RiTwitterFill />
                </span>
              </div>
            </div>
            {/* 2nd */}
            <div className="flex flex-col flex-grow shadow-lg bg-white">
              <div className="grid grid-cols-2">
                {/* 1st start */}
                <div className="flex flex-col items-center">
                  <div className="flex flex-col my-3 space-y-3 items-start text-[1.2rem]">
                    <span className="flex items-center">
                      <GoLocation className="mr-3" /> Kalopul, Kathmandu
                    </span>
                    <span className="flex items-center">
                      <AiOutlineSend className="mr-3" /> Englerstrasse 2
                    </span>
                    <span className="flex items-center">
                      <BsCalendarDate className="mr-3" /> Nov 18 - Nov 20, 2022
                    </span>
                    <span className="flex items-center">
                      <HiOutlineUsers className="mr-3" /> 120 Delegates
                    </span>
                    <span className="flex items-center">
                      <MdOutlineAttachMoney className="mr-3" /> $69.00 Fee
                    </span>
                  </div>
                </div>
                {/* 1st end */}
                {/* 2nd start */}
                <div className="flex flex-col items-center">
                  <div className="flex flex-col my-3 items-center">
                    <div className="flex flex-col items-start text-[1.2rem]">
                      <span className="text-gray-500">
                        Delegates Application
                      </span>
                      {/* <AiOutlineUser className="mr-100" /> */}
                      <span className="text-black">
                        01 jun 2022 - 01 Nov 2022
                      </span>
                    </div>
                    <div className="flex flex-col items-start my-3 text-[1.2rem]">
                      <span className="text-gray-500">
                        Delegates Application
                      </span>
                      <span className="text-black">
                        01 jun 2022 - 01 Nov 2022
                      </span>
                    </div>
                  </div>
                  {/* description */}

                  {/* 2nd end */}
                </div>
              </div>
              <div className="flex flex-col my-6 max-w-[85%] mx-auto w-full ">
                <h2 className="font-800 my-3 text-3xl w-full">
                  KAMUN 2022 - The Black Forest Summit
                </h2>
                <div id="content" className="flex flex-col">
                  <p>
                    After the successful KAMUN 2021 we want to offer you an even
                    richer experience of MUN. KAMUN 2022 - The Black Forest
                    Summit will not only be an academic challenge but also an
                    intercultural experience. Come and join delegates from all
                    over the world in fruitful debates - this year’s KAMUN will
                    be all about past, present, and future controversies.
                    Ranging from a beginner-friendly, over an intermediate, up
                    to an advanced committee, we offer opportunities for every
                    MUN enthusiast to debate. Highlight this year will surely be
                    the historic Security Council.
                  </p>
                  <div className="flex flex-col my-4">
                    <p>
                      Beyond debate, we warmly invite you to live the MUN
                      culture with us - be excited for some extraordinary,
                      cultural, and astonishing events including live music and
                      a ball in the 16th century castle of Karlsruhe.
                    </p>
                  </div>
                  <div className="flex flex-col my-3 ">
                    <p>
                      The Team of the KAMUN 2022 is looking forward to welcoming
                      you in Karlsruhe this autumn! We assure you that you will
                      not forget this conference!
                    </p>
                  </div>
                  {/* conclusion */}
                  <div className="flex flex-col my-6">
                    <p>
                      Please note that only university students (and similar
                      further education institutions) will be accepted for this
                      conference.
                    </p>
                  </div>
                  {/* conclusion section */}
                  {/* underline */}
                  <div className="border-b border-gray-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-slate-700" />

        {/*  */}
        {/*  */}
      </div>
    </div>
  );
};

export default ContentSinglePage;
