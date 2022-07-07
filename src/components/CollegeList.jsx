import React from "react";
import { CollegeData } from "../data";
const CollegeList = () => {
  return (
    <div>
      <div className="w-full max-w-6xl mx-auto my-4">
        <h2 className="text-center font-800 text-3xl">Popular Institute</h2>
        <div className="grid md:grid-cols-4 grid-cols-2  gap-3 my-6 px-3 ">
          {/* imgages section */}

          {CollegeData.map((data, indx) => (
            <div
              className="flex flex-col w-full shadow-lg rounded-xl"
              key={indx}
            >
              <div className="flex flex-col relative" id="image-section">
                <div className="flex w-full h-32" id="coverimg">
                  <img
                    className="w-full object-cover"
                    src={data?.profile}
                    // src="https://www.thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/12/British-College.jpg"
                    // alt="coverimage"
                    alt={data?.instution}
                  />
                </div>
                <div
                  className="flex w-[100px] h-[100px] absolute top-[50%] left-[50%] -translate-x-[50%] "
                  id="logo"
                >
                  <img
                    className="rounded-full w-full"
                    // src="https://www.thebritishcollege.edu.np/img/logo-blue.png"
                    src={data?.logo}
                    // src="http://graduation.thebritishcollege.edu.np/public/img/tbc/tbclogo.png"
                    // alt="british college"
                    alt={data?.instution}
                  />
                </div>
              </div>
              {/* content section */}
              <div className="flex flex-col mt-[5rem] mb-3 justify-center items-center">
                {/* <span>BBA,BIT,BCS,MCS</span> */}
                <div className="grid gap-4">
                  <span className="mx-3">{data?.course.join(" ")}</span>
                </div>
                {/* <hr className="border-b-2 border-sky-700/80" /> */}
                {/* <span className="border-b-3 border-sky-800"></span> */}
                <div className="flex my-4">
                  <button className="bg-sky-700 text-slate-100 rounded-md px-7 my-3 py-2 border-none outline-none hover:scale-110 transition-all duration-100  ">
                    Apply now
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* end of loop  */}
        </div>
      </div>
    </div>
  );
};

export default CollegeList;
