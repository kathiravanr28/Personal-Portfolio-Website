import "./Contact.css";
export default function Contact() {
  return (
   <div id="contact">
    <div className="container">
      <div className="row">
        <div className="contact-left">
          {/* Contact Information */}
          <h1 className="sub-title">Contact Me</h1>
          {/* Email and phone number */}
          <p><i className="fa-solid fa-paper-plane"></i>kathiravanr280303@gmail.com</p>
          <p><i className="fa-solid fa-phone"></i>+91 7812801558</p>
          <div className="social-icons">
            {/* Social Media Links */}
            <a href=""><i className="fa-brands fa-instagram"></i></a>
            <a href=""><i className="fa-brands fa-twitter"></i></a>
            <a href=""><i className="fa-brands fa-linkedin"></i></a>
          </div>
          {/* Download CV link */}
          <a href="/my-cv.pdf" download className="download-cv">Download CV</a>
        </div>
        <div className="contact-right">
          {/* Contact Form */}
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required/>
            <textarea name="message" rows={6} placeholder="Your Message"></textarea>
            <button type="submit" className="submit">Send Message</button>
          </form>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="copyright">
        <p><i className="fa-solid fa-copyright"></i> 2025 Kathiravan | Designed & Developed by Kathiravan</p>
      </div>
    </div>
   </div>
  );
}
