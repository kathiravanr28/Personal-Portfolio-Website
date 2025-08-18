import './App.css';
import Navbar from './modules/Navbar/Navbar';
import Home from './modules/Home/Home';
import AboutMe from './modules/AboutMe/AboutMe';
import Projects from './modules/Projects/Projects';
import Contact from './modules/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Home />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
