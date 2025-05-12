import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="contact">
        <div className="contact-section">
          <h1 className="contact-title">Subscribe</h1>
          <p className="contact-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            totam suscipit quas reiciendis cum? Qui aspernatur doloremque fugiat
            aliquid necessitatibus,
          </p>
          <span className="contact-action">
            <input
              className="email"
              type="email"
              placeholder="Enter your email address"
            ></input>
            <button className="contact-cta">Subscribe Now</button>
          </span>
        </div>

        <div className="contact-container">
          <img
            className="contact-img"
            src="/images/heroImage.svg"
            width={"400px"}
            height={"400px"}
          />
        </div>
      </section>
    </>
  );
}

export default Contact;
