import React, { useState } from "react";
import svg from "../images/undraw_work_time_re_hdyv.svg";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import "./LoginSignup.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, app } from "../firebase/Firebase";
import { useNavigate } from "react-router";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Signup = () => {
  const provider = new GoogleAuthProvider();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        Navigate("/profile");
      })
      .catch((error) => console.log(error.message));
  };

  const [value, setValue] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const Navigate = useNavigate();

  const HandleSubmit = () => {
    console.log(value);
    createUserWithEmailAndPassword(auth, value.email, value.pass)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: value.name,
        });
        alert("Successfully Signed In");
        setValue({ email: "", pass: "", name: "" });
        Navigate("/profile");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <section>
      <div className="signup">
        <div className="">
          <div className="signup-form">
            <div className="form">
              <h3>Haven't Registered?</h3>
              <p className="signup-para">
                Signup to join the community of Bolocoder developers and show
                off your abilities and work.
              </p>
              <input
                type="text"
                className="top-border"
                placeholder="Enter Your Name"
                value={value.name}
                onChange={(event) => {
                  setValue({ ...value, name: event.target.value });
                }}
                required
              />
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
              <button onClick={HandleSubmit}>Sign Up</button>
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
        <div className="svg-signup">
          <img src={svg} alt="Svg Logo" />
        </div>
      </div>
    </section>
  );
};

export default Signup;
