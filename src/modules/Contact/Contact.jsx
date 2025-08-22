import "./Contact.css";
export default function Contact() {
  return (
   <div className="contact">
    <div className="container">
      <div className="row">
        <div className="contact-left">
          <h1 className="sub-title">Contact Me</h1>
          <p><i className="fa-solid fa-paper-plane"></i>contact@example.com</p>
          <p><i className="fa-solid fa-phone"></i>+1234567890</p>
          <div className="social-icons">
            <a href=""><i className="fa-brands fa-instagram"></i></a>
            <a href=""><i className="fa-brands fa-twitter"></i></a>
            <a href=""><i className="fa-brands fa-linkedin"></i></a>
          </div>
          <a href="/my-cv.pdf" download className="download-cv">Download CV</a>
        </div>
        <div className="contact-right">
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required/>
            <textarea name="message" rows={6} placeholder="Your Message"></textarea>
            <button type="submit" className="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <p><i className="fa-solid fa-copyright"></i> 2025 Kathiravan | Designed & Developed by Me</p>
      </div>
    </div>
   </div>
  );
}
