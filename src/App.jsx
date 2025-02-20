import { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Certification from "./components/Certification";
import Contact from "./components/Contact";

function App() {
  // Creating refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (section) => {
    if (section && section.current) {
      section.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Pass scroll function to Navbar */}
      <Navbar scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, educationRef, skillsRef, projectsRef, certificatesRef, contactRef }} />

      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={skillsRef}><Skill /></div>
      <div ref={educationRef}><Education /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={certificatesRef}><Certification /></div>
      <div ref={contactRef}><Contact /></div>

      <Footer />
    </>
  );
}

export default App;
