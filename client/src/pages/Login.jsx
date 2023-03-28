import React from "react";
import svg from "../images/undraw_remotely_2j6y.svg";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./LoginSignup.css";

const Login = () => {
  return (
    <section>
      <div className="login">
        <div className="svg-login">
          <img src={svg} alt="Svg Logo" />
        </div>
        <div className="">
          <div className="login-form">
            <div className="form">
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
              <div className="signup-forget">
                <div className="signup-redirect">
                  <NavLink to="/signup">Haven't Registered?</NavLink>
                </div>
                <div className="forget-password">
                  <a href="/">Forget Password?</a>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
