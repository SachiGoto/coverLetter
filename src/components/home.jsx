// import { useState } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
function Home({ company }) {
  // const navigate = useNavigate();
  // navigate("/")
  console.log("company is ", company);

  // function navigateto() {
  //   console.log("clicked");
  //   navigate("/skills");
  // }

  return (
    <section className="home rounded-tl-[36px] h-[80vh] flex flex-col justify-center">
      <h1>
        Hi,
        <span>{company}</span>
      </h1>
      <h2 className="mt-4 text-3xl">
        I'd love to demonstrate how much I'm interested in working at {company}
        in my own way.
        <br /> This is my cover letter. Hope you enjoy!
      </h2>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mt-4 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        About Sachi Goto
      </button>
      {/* <Link to="/about">About Me</Link> */}
    </section>
  );
}

export default Home;
