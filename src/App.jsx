import './App.css';
import Navbar from './modules/Navbar/Navbar';
import Home from './modules/Home/Home';
import AboutMe from './modules/AboutMe/AboutMe';
import Projects from './modules/Projects/Projects';
import Certificates from './modules/Certificates/Certificates';
import Contact from './modules/Contact/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}

export default App;
