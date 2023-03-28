import React, { useState } from "react";
import "./Home.css";
import pic from "../images/nyclogo.png";
import video from "../images/video2.mp4";
import Svg from "../design/Svg";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div class="home" id="home">
        <div class="left">
          <img src={pic} alt="" />
        </div>
        <div class="right">
          <h1 class="question">Stuck on an error?</h1>
          <div class="heading">
            <video autoPlay loop muted>
              <source src={video} type="video/ogg" />
            </video>

            <h2 class="title unselectable">BOLO CODER!</h2>
          </div>
          <p>Unlimited space for all your coding problems</p>
          <div class="search-box">
            <form action="">
              <input
                type="search"
                value={search}
                required
                onChange={(e) => setSearch(e.target.value)}
              />
              <i class="fa fa-search"></i>
              <a
                href="javascript:void(0)"
                id="clear-btn"
                onClick={() => {
                  setSearch("");
                }}
              >
                Clear
              </a>
            </form>
          </div>
        </div>
      </div>

      <Svg />
    </>
  );
};

export default Home;
