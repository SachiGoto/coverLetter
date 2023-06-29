import "./App.css";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import WhyCompany from "./components/WhyCompany";
import WhyMe from "./components/WhyMe";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import References from "./components/References";
import { useState, useEffect } from "react";
// import { Routes, Route, HashRouter } from "react-router-dom";
// import { Link } from "react-scroll";

function App() {
  const [company, setCompany] = useState("");

  useEffect(() => {
    setCompany("Fullscript");
  }, [company]);

  console.log("company home page ", company);

  return (
    <>
      <Navbar />
      <main className="ml-[50px]">
        <Home company={company} />
        <AboutMe company={company} />
        <Projects company={company} />
        <WhyCompany company={company} />
        <WhyMe company={company} />
        <Skills />
        <References />
        <Footer />
      </main>
    </>
  );
}

export default App;

{
  /* <Navbar />
      <main className="pt-[100px]">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home company={company} />} />
            <Route
              path="/aboutMe"
              element={<AboutMe company={company} id="aboutMe" />}
            />
            <Route
              path="/projects"
              element={<Projects company={company} id="projects" />}
            />
            <Route
              path="whyCompany"
              element={<WhyCompany company={company} id="whyCompany" />}
            />
            <Route
              path="whyMe"
              element={<WhyMe company={company} id="whyMe" />}
            />
            <Route path="skills" element={<Skills id="skills" />} />
            <Route
              path="/references"
              element={<References id="references" />}
            />
          </Routes>
        </HashRouter> */
}
