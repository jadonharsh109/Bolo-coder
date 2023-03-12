import React from "react";
import Pic from "../images/contact.jpg"
import "./Contact.css"

const Contact = () => {

  return (
    <div className="contact-page-css">
      <div className="container">
        <h2 className="common-heading">Feel Free To Contact Us</h2>
        <div className="grid grid-two-column">
          <div className="grid-column2">
            <div className="contact-form">
              <form
                action="https://formspree.io/f/xrgdaqza"
                method="POST"
                className="contact-inputs"
              >
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  required
                  autoComplete="off"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter Email"
                  autoComplete="off"
                  required
                />
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Enter Message"
                  required
                  autoComplete="off"
                />
                <input type="submit" value="send" />
              </form>
            </div>
          </div>
          <div className="grid-column1">
            <img src={Pic} alt="image"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;