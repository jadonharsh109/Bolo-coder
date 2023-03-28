import React from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";
const Nav = ({ LoginStatus }) => {
  const Navigate = useNavigate();

  const ClickToLogout = () => {
    if (LoginStatus != "Login") {
      auth
        .signOut()
        .then(function (res) {})
        .catch(function (error) {
          console.log(error);
        });
      Navigate("/");
      window.location.reload();
    } else {
      Navigate("/login");
    }
  };

  const Wrapper = styled.section`
    nav {
      background: rgba(0, 0, 0, 0.3);
      width: max-content;
      display: block;
      padding: 0.7rem 1.7rem;
      z-index: 2;
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      bottom: 5rem;
      display: flex;
      gap: 0.8rem;
      border-radius: 4rem;
      backdrop-filter: blur(15px);
    }

    nav a {
      background: transparent;
      padding: 1.2rem;
      border-radius: 50%;
      display: flex;
      color: var(--color-light);
      font-size: 3rem;
    }

    nav a:hover {
      background: rgba(0, 0, 0, 0.2);
    }

    nav a.active {
      background: #1f1f38;
      color: #fff;
    }

    @media (min-width: 600px) and (max-width: 961px) {
      nav a {
        padding: 2.5rem;
      }
      nav {
        bottom: 4rem;
      }
    }
  `;
  const [activeNav, setActiveNav] = useState("#");

  return (
    <Wrapper>
      <nav>
        <NavLink
          to="/"
          onClick={() => setActiveNav("/")}
          className={activeNav === "/" ? "active" : ""}
        >
          <AiOutlineHome />
        </NavLink>
        <NavLink
          to="/ask"
          onClick={() => setActiveNav("#ask")}
          className={activeNav === "#ask" ? "active" : ""}
        >
          <AiOutlineUser />
        </NavLink>
        <NavLink
          to="/faq"
          onClick={() => setActiveNav("#faq")}
          className={activeNav === "#faq" ? "active" : ""}
        >
          <AiOutlineBook />
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <MdOutlineDesignServices />
        </NavLink>
        <NavLink
          to="/login"
          onClick={() => {
            setActiveNav("#login");
            ClickToLogout();
          }}
          className={activeNav === "#login" ? "active" : ""}
        >
          <IoMdContact />
        </NavLink>
      </nav>
    </Wrapper>
  );
};

export default Nav;
