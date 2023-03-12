import React from "react";
import styled from "styled-components";
import Pic from "../images/contact.jpg"

const Contact = () => {
  const Wrapper = styled.section`
    padding: 0 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: #fff;
              border: 1px solid rgb(255, 255, 255);
              color: red ;
              transform: scale(0.9);
            }
          }
        }
      }
    }
    .contact-inputs input, textarea{
      padding: 1rem;
    }
    /* &::before {
      content: "";
      height: 125vh;
      z-index: -1;
      position: absolute;
      width: 100%;
      background: url("images/bg2.jpg") no-repeat center center/cover;
      opacity: 0.85;
      top: 0px;
      left: 0px;
    } */
  `;

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Contact;