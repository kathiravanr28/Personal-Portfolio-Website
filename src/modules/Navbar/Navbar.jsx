import "./Navbar.css";

export default function Navbar() {
  return (
    <div id="header">
      <div className="container">
          <nav>
            <img src="src/assets/profile-pic.jpg" className="profile-pic" />
            <img src="src/assets/myname.jpeg" className="logo" />
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact Me</a></li>
            </ul>
          </nav>
          <div className="header-text">
              <p>Software Engineer</p>
              <h1>Hi, I'm <span>Kathiravan</span></h1>
          </div>
      </div>
    </div>

  );
}

