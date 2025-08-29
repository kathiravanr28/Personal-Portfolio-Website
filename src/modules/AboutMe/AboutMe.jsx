import "./AboutMe.css";
import { opentab } from "./AboutMe-function.js";
export default function AboutMe({active}) {
  return (
   <section id="aboutMe">
    <div className="container">
      <div className="row">
        <div className="about-col-1">
          {/* Profile Picture */}
          <img src="src/assets/aboutMe-pic.png" alt="My Name" className="about-image" />
        </div>
        <div className="about-col-2">
          {/* About Me Section */}
          <h1 className={`sub-title ${active ? "active-subtitle" : ""}`}>About Me</h1>
          <p>
            I am a passionate Computer Science graduate (B.Tech) from Rajiv Gandhi College of Engineering and Technology
            with strong skills in Java, React, Spring Boot, Microservices, RESTful APIs, and MySQL. I enjoy building scalable,
            interactive web applications and have applied my skills through academic projects and internships,
            where I worked on real-time applications, full-stack development, and collaborative coding practices.
            My goal is to continuously grow as a developer and contribute to creating efficient, user-focused solutions.
         </p>
         {/*Tab navigation*/}
         <div className="tab-titles">
            <p className="tab-links active-link" data-tab="skills" onClick={() => opentab('skills')}>Skills</p>
            <p className="tab-links" data-tab="projects" onClick={() => opentab('projects')}>Projects</p>
            <p className="tab-links" data-tab="work-experience" onClick={() => opentab('work-experience')}>Work Experience</p>
            <p className="tab-links" data-tab="education" onClick={() => opentab('education')}>Education</p>
         </div>
         {/* Tab Contents */}
         <div className="tab-contents active-tab" id="skills">
            <ul>
              <li><span>Frontend</span><br />HTML, CSS, JavaScript, React.js</li>
              <li><span>Backend</span><br />Java, Spring Boot, RESTful API, Microservices, Node.js</li>
              <li><span>Databases</span><br />MySQL</li>
              <li><span>Tools</span><br />Git, GitHub, BitBucket, SourceTree, MobaXterm, DBeaver, VS Code, STS, Postman</li>
            </ul>
         </div>
         <div className="tab-contents" id="projects">
            <ul>
              <li><span>PayPal Payment Integration</span><br />at Hulk Hire Tech</li>
              <li><span>FullStack Web Development</span><br />at Unified Mentor</li>
              <li><span>Digital Identity Verification Using Blockchain</span><br />at Rajiv Gandhi College of Engineering and Technology</li>
            </ul>
         </div>

         <div className="tab-contents" id="work-experience">
            <ul>
              <li><span>Apr 2025 - May 2025</span><br />Java Development Intern at Hulk Hire Tech</li>
              <li><span>July 2025 - Oct 2025</span><br />FullStack Web Development Intern at Unified Mentor</li>
            </ul>
         </div>
          <div className="tab-contents" id="education">
            <ul>
              <li><span>2024</span><br />B.Tech in Computer Science, Rajiv Gandhi College of Engineering and Technology</li>
              <li><span>2020</span><br />Higher Secondary Education, Don Bosco Matric Hr. Sec. School</li>
              <li><span>2018</span><br />Secondary School Education, Sri Sankara Vidyalaya Matric Hr. Sec. School</li>
            </ul>
         </div>
        </div>
      </div>
    </div>
    </section>
  );
}
