import React from "react";
import styled from "styled-components";
import svg from "../images/undraw_work_time_re_hdyv.svg";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Signup = () => {
  const Wrapper = styled.section`
    .signup {
      margin-top: 3rem;
      height: 85vh;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .svg-signup {
        display: flex;
        justify-content: center;

        img {
          width: 50rem;
        }
      }

      .signup-form form {
        height: fit-content;
        background-color: transparent;
        width: 80%;
        display: flex;
        flex-direction: column;
        margin: auto;
      }
      .signup-form hr {
        width: 100%;
        margin: 2rem 0 0 0;
      }
      .signup-form form h3 {
        text-align: center;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        margin: 1rem 0;
      }
      .signup-para {
        font-weight: 100;
        font-size: 1.8rem;
        margin: 1rem 0;
        text-align: center;
      }
      .signup-form form input[type="password"],
      input[type="email"],
      input[type="text"] {
        padding: 2rem 1rem;
        background: #edf2f5;
        border: 0;
        cursor: inherit;
        outline: none;
        font-size: 2rem;
        color: grey;
      }
      .signup-form form input::placeholder {
        color: black;
        opacity: 0.6;
        font-size: 1.8rem;
      }
      .top-border {
        border-radius: 1rem 1rem 0 0;
      }
      .down-border {
        border-radius: 0 0 1rem 1rem;
      }
      .signup-form form button {
        border-radius: 0.5rem;
        background: #301e67;
        color: #fff;
        font-weight: 700;
        font-size: 2rem;
        padding: 2rem 1rem;
        cursor: pointer;
        margin: 0.75rem 0;
        outline: none;
        border: 0;
      }
      .signup-form form button:hover {
        background-color: #623cb5;
        transition: 0.5s;
      }

      .signup-link-icon ul {
        display: flex;
        color: white;
        list-style: none;
        font-size: 5rem;
        justify-content: center;
        font-size: 3.5rem;

        li {
          margin: 0 2rem;

          cursor: pointer;
        }
      }
    }
    @media (max-width: 786px) {
      margin-top: 5rem;
      .signup {
        height: 100vh;

        grid-template-columns: 1fr;
        width: 90%;
        margin: auto;
        .svg-signup {
          display: none;
        }
        .signup-form form {
          width: 100%;
        }
        .signup-para {
          font-size: 2rem;
          margin: 2rem 0;
        }
        .signup-form form button {
          margin: 2.5rem 0;
        }
      }
    }
  `;

  return (
    <Wrapper>
      <div className="signup">
        <div className="">
          <div className="signup-form">
            <form action="">
              <h3>Haven't Registered?</h3>
              <p className="signup-para">
                Signup to join the community of Bolocoder developers and show
                off your abilities and work.
              </p>
              <input
                type="text"
                className="top-border"
                placeholder="Enter Your Name"
                required
              />
              <input type="email" placeholder="Enter your Email" required />
              <input
                type="password"
                className="down-border"
                placeholder="Enter Your Password"
                required
              />
              <button type="submit">Sign Up</button>
              <hr />
              <p className="signup-para">Or signup With</p>
              <div className="signup-link-icon">
                <ul>
                  <li>
                    <a href="https://github.com/jadonharsh109/Bolo-coder">
                      <AiFillGithub />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/jadonharsh109/Bolo-coder">
                      {" "}
                      <FaLinkedin />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/jadonharsh109/Bolo-coder">
                      {" "}
                      <AiFillGoogleCircle />{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
        <div className="svg-signup">
          <img src={svg} alt="Svg Logo" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Signup;
