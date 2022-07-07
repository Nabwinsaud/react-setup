import React from "react";
import { Link, useParams } from "react-router-dom";

// import {data} from '../data';
const Content = () => {
  // const {para}
  // const params=useParams();
  const { contentid } = useParams();
  return (
    <div>
      <div className="w-full max-w-6xl mx-auto my-16">
        <h1 className="text-4xl font-700 capitalize">
          Upcoming Model UN Conference Highlights
        </h1>
        <div className="grid md:grid-cols-2 gap-4 md:my-7 grid-cols-1 px-3">
          <div className="flex flex-col w-full border-2 rounded-md border-slate-600">
            <div className="flex flex-col relative" id="image-section">
              <div className="flex w-full h-32" id="coverimg">
                <img
                  className="w-full object-cover"
                  src="https://www.thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/12/British-College.jpg"
                  alt="coverimage"
                />
              </div>
              <div
                className="flex w-[120px] h-[120px] absolute top-[50%] left-[50%] -translate-x-[50%] "
                id="logo"
              >
                <img
                  className="rounded-full w-full"
                  // src="https://www.thebritishcollege.edu.np/img/logo-blue.png"
                  src="http://graduation.thebritishcollege.edu.np/public/img/tbc/tbclogo.png"
                  alt="british college"
                />
              </div>
            </div>
            {/* content section */}
            <div className="flex flex-col mt-[5rem] mb-3 justify-center items-center">
              <h2 className="text-3xl">The British College</h2>
              {/* <hr className="border-b-2 border-sky-700/80" /> */}
              {/* <span className="border-b-3 border-sky-800"></span> */}
              <div
                className="flex flex-col justify-center items-center my-3 "
                id="location"
              >
                <h3>Thapathali, kathmandu</h3>
                <span>Nov 18,2022</span>
                <span>20+ courses</span>
                <Link
                  to={`/content/${contentid}`}
                  className="border-none transition-all hover:scale-110 duration-200  outline-none px-9 py-3 my-3 bg-violet-800 rounded-md text-slate-50"
                >
                  Apply now
                </Link>
              </div>
            </div>
          </div>
          {/* 2nd cart */}
          <div className="flex flex-col w-full  border-2 rounded-md border-slate-600 ">
            <div className="flex flex-col relative" id="image-section">
              <div className="flex w-full h-32" id="coverimg">
                <img
                  src="https://www.thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/12/British-College.jpg"
                  alt="coverimage"
                  className="object-cover w-full "
                />
              </div>
              <div
                className="flex w-[120px] absolute top-[50%] left-[50%] -translate-x-[50%] h-[120px]"
                id="logo"
              >
                <img
                  className="w-full rounded-full"
                  src="data:image/png;base64,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"
                  // src="https://texasintl.edu.np/wp-content/uploads/2021/06/cropped-cropped-texas-intl-college.png"
                  // src="http://graduation.thebritishcollege.edu.np/public/img/tbc/tbclogo.png"
                  // src="https://www.thebritishcollege.edu.np/img/logo-blue.png"
                  alt="Softwarica"
                />
              </div>
            </div>
            <div className="flex flex-col mt-[5rem] mb-3 justify-center items-center">
              <h2 className="text-3xl">Softwarica college</h2>
              {/* <hr className="border-b-2 border-sky-700/80" /> */}
              {/* <span className="border-b-3 border-sky-800"></span> */}
              <div
                className="flex flex-col justify-center items-center my-3 "
                id="location"
              >
                <h3>Dillibazzar ,kathmandu</h3>
                <span>Nov 18,2022</span>
                <span>10+ courses</span>
                <Link
                  to={`/content/${contentid}`}
                  className="border-none hover:scale-110 duration-200 transition-all outline-none px-9 py-3 my-3 bg-violet-800 rounded-md text-slate-50"
                >
                  Apply now
                </Link>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
