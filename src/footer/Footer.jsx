import React from "react";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="w-full max-w-6xl mx-auto my-10">
        {/* four section */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 my-20 ">
          {/* first one */}
          <div className="flex flex-col">
            <h1 className="hover:cursor-pointer font-bold">CROWNCOMMERCIAL</h1>
            <div className="flex flex-col my-3">
              <span>Your Mentor to choose right Career</span>
              <div
                className="flex items-center my-2 space-x-3"
                id="socialhandle"
              >
                <span className="items-center flex text-2xl hover:cursor-pointer hover:scale-105">
                  <RiFacebookCircleFill />
                </span>
                <span className="items-center flex text-2xl hover:cursor-pointer hover:scale-105">
                  <RiInstagramFill />
                </span>
                <span className="items-center flex text-2xl hover:cursor-pointer hover:scale-105">
                  <RiTwitterFill />
                </span>
                <span className="items-center flex text-2xl hover:cursor-pointer hover:scale-105">
                  <RiLinkedinBoxFill />
                </span>
              </div>
            </div>
          </div>
          {/* 2nd one */}
          <div className="flex flex-col">
            <h1 className="font-bold capitalize">Information</h1>
            <ul className="flex flex-col my-3">
              <li className="my-2">
                <Link to="" className="hover:underline">
                  {" "}
                  FAQS
                </Link>
              </li>
              <li className="my-2">
                <Link to="" className="hover:underline">
                  {" "}
                  About
                </Link>
              </li>
              <li className="my-2">
                <Link to="" className="hover:underline">
                  {" "}
                  Career Opportunity
                </Link>
              </li>
              <li className="my-2">
                <Link to="" className="hover:underline">
                  {" "}
                  Advertising Policy
                </Link>
              </li>
              <li className="my-2">
                <Link to="" className="hover:underline">
                  {" "}
                  Terms of use
                </Link>
              </li>
              <li className="my-2">
                <Link to="" className="hover:underline">
                  {" "}
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          {/* 2nd close */}
          <div className="flex flex-col my-2" id="client-portal">
            <h1 className="font-bold capitalize">Client Portal</h1>
            <ul className="my-3 flex flex-col">
              <li className="my-2">
                <Link to="" className="hover:underline">
                  Dashboard
                </Link>
              </li>
              <li className="my-2">
                <Link to="" className="hover:underline">
                  Payment Method
                </Link>
              </li>
              <li className="my-2">
                <Link to="" className="hover:underline">
                  Membership service
                </Link>
              </li>
              <li className="my-2">
                <Link to="" className="hover:underline">
                  Promote you college
                </Link>
              </li>
              <li className="my-2">
                <Link to="" className="hover:underline">
                  Promotoe your schoool
                </Link>
              </li>
            </ul>
          </div>
          {/* 3rd one */}
          <div id="services" className="flex flex-col my-2">
            <h1 className="font-bold capitalize">Services</h1>
            <ul className="my-2">
              <li className="my-2">
                <Link to="" className="hover:underline">
                  Web development
                </Link>
              </li>
              <li className="my-2">
                <Link to="" className="hover:underline">
                  Mobile Development
                </Link>
              </li>
              <li className="my-2">
                <Link to="" className="hover:underline">
                  Wordpress Ecommerce
                </Link>
              </li>
              <li className="my-2">
                <Link to="">Bootcamp services</Link>
              </li>
              <li className="my-2">
                <Link to="" className="hover:underline">
                  Internship
                </Link>
              </li>
            </ul>
          </div>
          {/* 4th  */}
          {/* 5th */}
          <div id="contact" className="flex flex-col my-2">
            <h1 className="font-bold capitalize">Contact</h1>
            <ul className="my-2">
              <li className="my-2">
                <span>Crown Innovation</span>
                {/* <Link to="">Web development</Link> */}
              </li>
              <li className="my-2">
                <Link to="">Rudramarg,Kalopul,kathmandu, Nepal</Link>
              </li>
              <li className="my-2">
                <span className="flex flex-col">
                  <span>
                    <Link to="" className="hover:underline">
                      +977-1-4656785
                    </Link>
                  </span>
                  <span>
                    <Link to="" className="hover:underline">
                      info@crowninnovation.com.np
                    </Link>
                  </span>
                </span>
              </li>
            </ul>
          </div>
          {/* 5th */}
        </div>
        {/* copyright section */}
        <div className="flex items-center my-8 justify-center">
          <p className="capitalize">
            Copyright &copy; 2020 - {new Date().getFullYear()} crown innovation{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
