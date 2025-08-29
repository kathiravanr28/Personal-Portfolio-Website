import './App.css';
import Navbar from './modules/Navbar/Navbar';
import Home from './modules/Home/Home';
import AboutMe from './modules/AboutMe/AboutMe';
import Projects from './modules/Projects/Projects';
import Certificates from './modules/Certificates/Certificates';
import Contact from './modules/Contact/Contact';
import BackToTop from './modules/BackToTop/BackToTop';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useRef, useEffect, useState } from 'react';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // 👇 Detect active section using IntersectionObserver
  useEffect(() => {
    const sections = [
  { id: "about", ref: aboutRef },
  { id: "projects", ref: projectsRef },
  { id: "certificates", ref: certificatesRef },
  { id: "contact", ref: contactRef }
];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // section should be at least 50% visible
    );

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) observer.unobserve(section.ref.current);
      });
    };
  }, []);

  return (
    <>
      <Navbar scrollToSection={scrollToSection} refs={{ aboutRef, projectsRef, certificatesRef, contactRef }} />

      <div><Home /></div>
      <div id="about" ref={aboutRef}><AboutMe active={activeSection === "about"} /></div>
      <div id="projects" ref={projectsRef}><Projects active={activeSection === "projects"} /></div>
      <div id="certificates" ref={certificatesRef}><Certificates active={activeSection === "certificates"} /></div>
      <div id="contact" ref={contactRef}><Contact active={activeSection === "contact"} /></div>

      <BackToTop />
    </>
  );
}

export default App;
