import "./App.css";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import WhyCompany from "./components/WhyCompany";
import WhyMe from "./components/WhyMe";
import Skills from "./components/Skills";
import References from "./components/References";
import { useState, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  const [company, setCompany] = useState("Veritree");

  useEffect(() => {
    setCompany("Veritree");
  }, [company]);

  console.log("company home page ", company);

  return (
    <>
      <Navbar />
      <main className="pt-[100px]">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home company={company} />} />
            <Route path="/aboutMe" element={<AboutMe company={company} />} />
            <Route path="/projects" element={<Projects company={company} />} />
            <Route
              path="whyCompany"
              element={<WhyCompany company={company} />}
            />
            <Route path="whyMe" element={<WhyMe company={company} />} />
            <Route path="skills" element={<Skills />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </HashRouter>

        {/* <Home /> */}
        <AboutMe />
        <Projects />
        <WhyCompany />
        <WhyMe />
        <Skills />
        <References />
      </main>
    </>
  );
}

export default App;
