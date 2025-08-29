import "./Contact.css";
import { submitToGoogleSheet } from "./Contact-function.js";
import React, { useRef, useState } from "react";
import "./Contact.css";
export default function Contact({active}) {
  const formRef = useRef(null);
  const [message, setMessage] = useState("");
  const scriptURL =
  "https://script.google.com/macros/s/AKfycbzhNiW_QWhogYnFMZ8fis8kZVcfVyu275YiKsMKQK72TSokKWOvQkbP15PFJtwrUWIyaQ/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    submitToGoogleSheet(formRef, setMessage, scriptURL);
  };

  return (
   <div id="contact">
    <div className="container">
      <div className="row">
        <div className="contact-left">
          {/* Contact Information */}
          <h1  className={`subtitle ${active ? "active-subtitle" : ""}`}>Contact Me</h1>
          {/* Email and phone number */}
          <p><i className="fa-solid fa-paper-plane"></i>kathiravanr280303@gmail.com</p>
          <p><i className="fa-solid fa-phone"></i>+91 7812801558</p>
          <div className="social-icons">
            {/* Social Media Links */}
            <a href="https://www.instagram.com/stylish_dude_16/"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/KATHIRA72419023"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/kathiravan-r-887723370/"><i className="fa-brands fa-linkedin"></i></a>
          </div>
          {/* Download CV link */}
          <a href="/my-cv.pdf" download className="download-cv">Download CV</a>
          <a href="/my-cv.pdf" className="cv-link"><i className="fa-solid fa-up-right-from-square"></i></a>
        </div>
        <div className="contact-right">
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} name="submit-to-google-sheet">
            <input type="text" name="Name" placeholder="Your Name" required />
            <input type="email" name="Mail" placeholder="Your Email" required />
            <textarea name="Message" rows={6} placeholder="Your Message"></textarea>
            <button type="submit" className="submit">Send Message</button>
            <span id="msg" className={message === "Something went wrong!" ? "error" : ""}>{message}</span>
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
