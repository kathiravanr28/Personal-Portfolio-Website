import "./Navbar.css";
import { useHeaderText } from "./Navbar-function";
export default function Navbar({ scrollToSection, refs , activeSection }) {
  // used for the side menu
  const { aboutRef, projectsRef, certificatesRef, contactRef } = refs;
  // used for the header text to open and close
  const { isOpen, openMenu, closeMenu } = useHeaderText();
  return (
    <div id="header">
      <div className="container">
        <nav>
          {/* my name pic */}
          <img src="src/assets/myname.jpeg" className="logo" />
          {/* the side menu use for navigation of different sections */}
          <ul id="sidemenu" className={`${isOpen ? "open" : ""}`}>
            {/* use onClick to navigate */}
            <li><a  className={activeSection === "home" ? "active" : ""}
            onClick={() => window.location.reload()}>Home</a></li>
            <li><a  className={activeSection === "about" ? "active" : ""}
            onClick={() => scrollToSection(aboutRef)}>About Me</a></li>
            <li><a  className={activeSection === "projects" ? "active" : ""}
            onClick={() => scrollToSection(projectsRef)}>Projects</a></li>
            <li><a  className={activeSection === "certificates" ? "active" : ""}
            onClick={() => scrollToSection(certificatesRef)}>Certificates</a></li>
            <li><a  className={activeSection === "contact" ? "active" : ""}
            onClick={() => scrollToSection(contactRef)}>Contact Me</a></li>
            <i className="fa-solid fa-square-xmark" onClick={closeMenu}></i>
          </ul>
          {/* hamburger menu icon */}
          <i className="fa-solid fa-bars" onClick={openMenu}></i>
        </nav>
        {/* this is the main content area */}
        <div className="content-row">
          <div className="header-text">
            <h1 className="typing typing-1">
              Hi, I'm <span>Kathiravan</span>
            </h1>
            <p className="typing typing-2">Software Engineer</p>
          </div>
          {/* Profile Picture */}
          <img src="src/assets/profile-pic.jpg" className="profile-pic" />
        </div>
      </div>
    </div>
  );
}
