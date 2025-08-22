import "./Certificates.css"
import certificate1 from "../../assets/certificate-pic.png";
import certificate2 from "../../assets/certificate-pic2.png";

export default function Certificates() {
  return (
    <div className="certificates">
      <div className="container">
        <h1 className="sub-title">Certificates</h1>
        <div className="certificate-list">
          <div className="certificate">
            <img src={certificate1} alt="Certificate 1" />
              <div className="layer">
                <h3>Java Developer Intern</h3>
                <p>You can see the Completion certification by clicking the link below</p>
                <a href=""><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
          </div>
          <div className="certificate">
            <img src={certificate2} alt="Certificate 2" />
              <div className="layer">
                <h3>FullStack Web development Intern</h3>
                <p>You can see the Completion certification by clicking the link below</p>
                <a href=""><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
