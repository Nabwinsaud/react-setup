import React from "react";
// import Footer from "../footer/Footer";
import Header1 from "../header/Header1";
import Header2 from "../header/Header2";
// import Navbar from "../navbar/Navbar";
import CollegeList from "./CollegeList";
import Content from "./Content";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header1 />
      <Header2 />
      <Content />
      <CollegeList />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
