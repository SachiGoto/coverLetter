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

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
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
