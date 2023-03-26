import React from "react";
import styled from "styled-components";
import svg from "../images/undraw_remotely_2j6y.svg";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Login = () => {
  const Wrapper = styled.section`
    .login {
      margin-top: 3rem;
      height: 85vh;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .svg-login {
        display: flex;
        justify-content: center;
      }

      .login-form form {
        height: fit-content;
        background-color: transparent;
        width: 80%;
        display: flex;
        flex-direction: column;
      }
      .login-form hr {
        width: 100%;
        margin: 2rem 0 0 0;
      }
      .login-form form h3 {
        text-align: center;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        margin: 1rem 0;
      }
      .login-para {
        font-weight: 100;
        font-size: 1.8rem;
        margin: 1rem 0;
        text-align: center;
      }
      .login-form form input[type="password"],
      input[type="email"] {
        padding: 2rem 1rem;
        background: #edf2f5;
        border: 0;
        cursor: inherit;
        outline: none;
      }
      .top-border {
        border-radius: 1rem 1rem 0 0;
      }
      .down-border {
        border-radius: 0 0 1rem 1rem;
      }
      .login-form form button {
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
      .login-form form button:hover {
        background-color: #623cb5;
        transition: 0.5s;
      }

      .login-link-icon ul {
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
      .login {
        height: 100vh;

        grid-template-columns: 1fr;
        width: 90%;
        margin: auto;
        .svg-login {
          display: none;
        }
        .login-form form {
          width: 100%;
        }
        .login-para {
          font-size: 2rem;
          margin: 2rem 0;
        }
        .login-form form button {
          margin: 2.5rem 0;
        }
      }
    }
  `;

  return (
    <Wrapper>
      <div className="login">
        <div className="svg-login">
          <img src={svg} alt="Svg Logo" />
        </div>
        <div className="">
          <div className="login-form">
            <form action="">
              <h3>Sign In</h3>
              <p className="login-para">
                Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                consectetur adipisicing.
              </p>
              <input
                type="email"
                className="top-border"
                placeholder="Username"
                required
              />
              <input
                type="password"
                className="down-border"
                placeholder="Password"
                required
              />
              <button type="submit">Log In</button>
              <hr />
              <p className="login-para">Or Login With</p>
              <div className="login-link-icon">
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
      </div>
    </Wrapper>
  );
};

export default Login;
