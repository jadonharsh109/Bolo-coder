import React from "react";
import svg from "../images/undraw_remotely_2j6y.svg";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/Firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const provider = new GoogleAuthProvider();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        Navigate("/profile");
      })
      .catch((error) => console.log(error.message));
  };

  const [value, setValue] = useState({
    email: "",
    pass: "",
  });

  const Navigate = useNavigate();

  const HandleSubmit = () => {
    console.log(value);
    signInWithEmailAndPassword(auth, value.email, value.pass)
      .then((res) => {
        alert("Successfully Signed In");
        setValue({ email: "", pass: "" });
        Navigate("/profile");
      })
      .catch((err) => alert(err.message));
  };

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
                placeholder="Enter your Email"
                value={value.email}
                onChange={(event) =>
                  setValue({ ...value, email: event.target.value })
                }
                required
              />
              <input
                type="password"
                className="down-border"
                placeholder="Enter Your Password"
                value={value.pass}
                onChange={(event) =>
                  setValue({ ...value, pass: event.target.value })
                }
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
              <button onClick={HandleSubmit}>Log In</button>
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
                    <a href="javascript:void(0)" onClick={handleSignIn}>
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
