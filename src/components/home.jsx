// import { useState } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import wavingHand from '../assets/wavingHand.gif'
import { AiOutlineArrowDown } from "react-icons/ai";

function Home({ company }) {
  // const navigate = useNavigate();
  // navigate("/")
  // console.log("company is ", company);

  // function navigateto() {
  //   console.log("clicked");
  //   navigate("/skills");
  // }

  return (
    <section className="home rounded-tl-[36px] h-[100vh] flex flex-col justify-center w-[80%] lg:max-w-[550px]">
      <div>
        <h1>
          <span className="introduction">Hi, </span>
          <span className="space"></span>
          <span className="companyName">{company}</span>
          <span className="space"></span>
          <img
            src={wavingHand}
            alt="wave"
            width="70"
            className="inline pb-3 wavingHand"
          />
        </h1>

        <h2 className="mt-4 text-l md:text-xl lg:text-2xl font-serif introduction2 ">
          I'd love to demonstrate how much I'm interested in working at{" "}
          {company}
          &nbsp;in my own way.
          <br /> This is my cover letter. Hope you enjoy!
        </h2>
      </div>
      <div>
        <Link to="aboutMe" smooth={true} duration={1000} offset={-70}>
          <AiOutlineArrowDown className="arrow text-[50px] mx-auto mt-[10%]" />
        </Link>
      </div>

      {/* <Link
        to="aboutMe"
        smooth={true}
        duration={1000}
        offset={-70}
        className="bg-blue-500 hover:bg-blue-300 text-white hover:text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded mx-auto mt-[5%] cursor-pointer "
      >
        About Sachi Goto
      </Link> */}
      {/* <Link to="/about">About Me</Link> */}
      {/* <div id="section1">Scroll</div> */}
    </section>
  );
}

export default Home;
