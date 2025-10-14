import "./Projects.css";
import digitalIdentity from "../../assets/digital-identity-verification-pic.png";
import imageSlider from "../../assets/image-slider-pic.png";
import portfolioWebsite from "../../assets/portfolio-website-pic.png";
import interactiveInfographics from "../../assets/interactive-infographics-pic.png";
import paypalPayment from "../../assets/paypal-payment-pic.png";
import todolist from "../../assets/to-do-list.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function Projects({ active }) {
  return (
    <div id="projects">
      <div className="container">
        {/* Projects Section */}
        <h1 className={`sub-title ${active ? "active-subtitle" : ""}`}>My Projects</h1>
        {/* Swiper used for contents to slide */}
        <Swiper
          spaceBetween={20} slidesPerView={3}  navigation={true}
          loop={true} centeredSlides={false} className="project-slider"
          modules={[Navigation, Autoplay]}
          // it allow the content to be looped
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // breakpoints for responsive design
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 }
          }}
        >
          {/* Project 1 */}
          <SwiperSlide>
            <div className="project-card slide-effect">
              <div className="project-front">
                <img src={paypalPayment} alt="Paypal Payment Integration" className="project-img" />
              </div>
              <div className="project-back">
                <i className="fa-regular fa-credit-card"></i>
                <h2>Paypal Payment Integration</h2>
                <p>The Payment Gateway Integration project is designed to provide a seamless and secure way to handle.
                    payment transactions through providers like PayPal.
                    The system allows users to initiate transactions, monitor their statuses,
                    and handle error scenarios effectively.</p>
                <div className="project-buttons">
                  <a href="/Paypal Payment Integration.pdf" target="_blank" className="btn">View Document</a>
                  {/* <a href="https://youtu.be/demo1" target="_blank" className="btn">Watch Demo</a> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Project 2 */}
          <SwiperSlide>
            <div className="project-card slide-effect">
              <div className="project-front">
                <img src={digitalIdentity} alt="Blockchain Project" className="project-img" />
              </div>
              <div className="project-back">
                <i className="fa-solid fa-check"></i>
                <h2>Digital Identity Verification Using Blockchain</h2>
                <p>Developed a secure web-based system for digital identity verification leveraging blockchain and NFTs.
                  Implemented on Ethereum with smart contracts, the system creates verifiable NFT-based credentials
                  (certificates, documents, etc.), ensuring authenticity, integrity, and privacy.
                  Designed to provide a decentralized, reliable, and user-friendly solution for identity management.</p>
                <div className="project-buttons">
                  <a href="/Digital Identity Verification Using Blockchain.pdf" target="_blank" className="btn">View Document</a>
                  {/* <a href="https://youtu.be/demo2" target="_blank" className="btn">Watch Demo</a> in future */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Project 3 */}
          <SwiperSlide>
            <div className="project-card slide-effect">
              <div className="project-front">
                <img src={imageSlider} alt="Image Slider" className="project-img" />
              </div>
              <div className="project-back">
                <i className="fa-solid fa-images"></i>
                <h2>Image Slider Webpage</h2>
                <p>Built a responsive image slider (carousel) using HTML, CSS, and JavaScript.
                   Implemented smooth transitions, navigation controls, and an automatic slideshow feature.
                   Focused on creating an intuitive user experience with clean design and interactive functionality.</p>
                <div className="project-buttons">
                  <a href="/Image Slider.pdf" target="_blank" className="btn">View Document</a>
                  {/* <a href="https://youtu.be/demo3" target="_blank" className="btn">Watch Demo</a> in future */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Project 4 */}
          <SwiperSlide>
            <div className="project-card slide-effect">
              <div className="project-front">
                <img src={portfolioWebsite} alt="Personal Portfolio Website" className="project-img" />
              </div>
              <div className="project-back">
                <i className="fa-solid fa-user-tie"></i>
                <h2>Personal Portfolio Website</h2>
                <p>Created a personal portfolio website using HTML, CSS, and JavaScript to showcase skills, projects, and resume.
                  The site features a home, About section, project gallery, certificates, and contact form with JavaScript validation.
                  Implemented responsive design, smooth navigation, hover effects, and interactive elements to enhance user experience.
                  Included a downloadable resume for recruiters and visitors.</p>
                <div className="project-buttons">
                  <a href="/Personal Portfolio Website.pdf" target="_blank" className="btn">View Document</a>
                  {/* <a href="https://youtu.be/demo4" target="_blank" className="btn">Watch Demo</a> in future */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Project 5 */}
          <SwiperSlide>
            <div className="project-card slide-effect">
              <div className="project-front">
                <img src={interactiveInfographics} alt="Interactive Infographics" className="project-img" />
              </div>
              <div className="project-back">
                <i className="fa-solid fa-file-contract"></i>
                <h2>Interactive Infographics</h2>
                <p>Developed a dynamic infographic using HTML, CSS, and JavaScript to present data in an engaging and interactive way.
                   The project includes animations, tooltips, charts, and user-triggered interactions to enhance data exploration.
                   Designed with a responsive layout for seamless viewing across devices, focusing on data visualization, usability, and smooth user experience.</p>
                <div className="project-buttons">
                  <a href="/Interactive Infographic Project.pdf" target="_blank" className="btn">View Document</a>
                  {/* <a href="https://youtu.be/demo5" target="_blank" className="btn">Watch Demo</a> in future */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Project 6 */}
          <SwiperSlide>
            <div className="project-card slide-effect">
              <div className="project-front">
                <img src={todolist} alt="To-Do List Web App" className="project-img" />
              </div>
              <div className="project-back">
                <i className="fa-solid fa-list"></i>
                <h2>To-Do List Web App</h2>
                <p>Built a web-based to-do list app using HTML, CSS, and JavaScript.
                   The application allows users to add, edit, delete, and mark tasks as complete, with data stored in local storage for persistence.
                   Designed with a responsive interface, input validation, and smooth user interactions, ensuring usability across devices.</p>
                <div className="project-buttons">
                  <a href="/To-Do-List_Project_Report.pdf" target="_blank" className="btn">View Document</a>
                  {/* <a href="https://youtu.be/demo6" target="_blank" className="btn">Watch Demo</a> in future */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
