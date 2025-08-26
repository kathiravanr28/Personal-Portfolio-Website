import './App.css';
import Navbar from './modules/Navbar/Navbar';
import Home from './modules/Home/Home';
import AboutMe from './modules/AboutMe/AboutMe';
import Projects from './modules/Projects/Projects';
import Certificates from './modules/Certificates/Certificates';
import Contact from './modules/Contact/Contact.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useRef } from 'react';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} refs={{ aboutRef, projectsRef, certificatesRef, contactRef }} />
      <div><Home /></div>
      <div ref={aboutRef}><AboutMe /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={certificatesRef}><Certificates /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  );
}

export default App;
