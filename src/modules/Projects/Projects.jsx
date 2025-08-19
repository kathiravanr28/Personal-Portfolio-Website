import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h1 className="sub-title">My Projects</h1>

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
          <SwiperSlide>
            <div className="project-card">
              <i className="fa-regular fa-credit-card"></i>
              <h2>Paypal Payment Integration</h2>
              <p>Description of project 1.</p>
              <div className="project-buttons">
                <a href="paypal-doc.pdf" target="_blank" className="btn">View Document</a>
                <a href="https://youtu.be/demo1" target="_blank" className="btn">Watch Demo</a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="project-card">
              <i className="fa-solid fa-check"></i>
              <h2>Digital Identity Verification Using Blockchain</h2>
              <p>Description of project 2.</p>
              <div className="project-buttons">
                <a href="blockchain-doc.pdf" target="_blank" className="btn">View Document</a>
                <a href="https://youtu.be/demo2" target="_blank" className="btn">Watch Demo</a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="project-card">
              <i className="fa-solid fa-images"></i>
              <h2>Image Slider Webpage</h2>
              <p>Description of project 3.</p>
              <div className="project-buttons">
                <a href="slider-doc.pdf" target="_blank" className="btn">View Document</a>
                <a href="https://youtu.be/demo3" target="_blank" className="btn">Watch Demo</a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="project-card">
              <i className="fa-solid fa-user-tie"></i>
              <h2>Personal Portfolio Website</h2>
              <p>Description of project 4.</p>
              <div className="project-buttons">
                <a href="portfolio-doc.pdf" target="_blank" className="btn">View Document</a>
                <a href="https://youtu.be/demo4" target="_blank" className="btn">Watch Demo</a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="project-card">
              <i className="fa-solid fa-file-contract"></i>
              <h2>Interactive Infographics</h2>
              <p>Description of project 5.</p>
              <div className="project-buttons">
                <a href="infographics-doc.pdf" target="_blank" className="btn">View Document</a>
                <a href="https://youtu.be/demo5" target="_blank" className="btn">Watch Demo</a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="project-card">
              <i className="fa-solid fa-list"></i>
              <h2>To-Do List Web App</h2>
              <p>Description of project 6.</p>
              <div className="project-buttons">
                <a href="todo-doc.pdf" target="_blank" className="btn">View Document</a>
                <a href="https://youtu.be/demo6" target="_blank" className="btn">Watch Demo</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
