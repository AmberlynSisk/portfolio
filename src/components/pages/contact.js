import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3l6wsxg",
        "portfolio_template",
        form.current,
        "nIzI8KHMKY5nzi59E"
      )
      .then(
        (result) => {
          setSuccessMessage(true);
        },
        (error) => {
          setErrorMessage(true);
        }
      );
    e.target.reset();
  };

  return (
    <div className="ContactContainer" id="contact">
      <div className="ContactLeft GridSection">
        <div className="ContactInfo">
          <h2 className="ContactName">Amberlyn Sisk</h2>
          <p className="ContactSubName">Full-Stack Developer</p>
          <p className="Info">
            <MdOutlinePhone /> 734-788-0482
          </p>
          <p className="Info">
            <MdOutlineEmail /> asiskdev@gmail.com
          </p>
          <div className="Socials">
            <a
              href="https://www.linkedin.com/in/amberlyn-sisk"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="ContactRight GridSection">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="number" placeholder="Phone Number" />
          <textarea name="message" placeholder="Message" />
          <button type="submit">Send</button>
        </form>
        <h2
          className="successMessage"
          style={{ display: successMessage ? "block" : "none" }}
        >
          Email sent successfully! I look forward to speaking with you soon!
        </h2>
        <h2
          className="errorMessage"
          style={{ display: errorMessage ? "block" : "none" }}
        >
          UH OH! Seems like something went wrong, please try to send your
          message again.
        </h2>
      </div>
    </div>
  );
};

export default Contact;
