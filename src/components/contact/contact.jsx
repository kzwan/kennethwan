import React from 'react';
import "./contact.css";
import { AiFillMail } from "react-icons/ai";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="contactWrapper">
          <p className="contactCopy">
            Shoot me an email if you want to connect! You can also find me on{" "}
            <a href="https://www.linkedin.com/in/kennethzwan/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" "}
            or{" "}
            <a href="https://www.instagram.com/kennywan_/" target="_blank" rel="noreferrer">
              Instagram
            </a>{" "}
            if that's more your speed.
          </p>
          <a href="mailto:dev.johncarlo.devera@gmail.com">
            <div className="contactEmail">
              <AiFillMail size="1.7rem" />
              <span>kennethzwan@gmail.com</span>
            </div>
          </a>
      </div>
    </section>
  );
};

export default Contact;
