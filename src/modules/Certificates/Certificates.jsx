import "./Certificates.css"
import certificate1 from "../../assets/certificate-pic.png";
import certificate2 from "../../assets/certificate-pic2.png";

export default function Certificates({active}) {
  return (
    <div id="certificates">
      <div className="container">
        <h1 className={`sub-title ${active ? "active-subtitle" : ""}`}>Certificates</h1>
        <div className="certificate-list">
          <div className="certificate">
            {/* Certificate 1 image */}
            <img src={certificate1} alt="Certificate 1" />
              <div className="layer">
                {/* Certificate 1 details */}
                <h3>Java Developer Intern</h3>
                <p>You can see the Completion certification by clicking the link below</p>
                {/* Certificate 1 link */}
                <a href="/Internship Completion Letter - KATHIRAVAN R - B10571.pdf"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
          </div>
          <div className="certificate">
            {/* Certificate 2 image */}
            <img src={certificate2} alt="Certificate 2" />
              <div className="layer">
                {/* Certificate 2 details */}
                <h3>FullStack Web development Intern</h3>
                <p>You can see the Completion certification by clicking the link below</p>
                {/* Certificate 2 link */}
                <a href=""><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
