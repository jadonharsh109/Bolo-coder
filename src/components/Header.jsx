import React from 'react'
import "./Header.css"
import {GoThreeBars} from "react-icons/go"
import {FaQuestion} from "react-icons/fa"
import {SiAskubuntu} from "react-icons/si"
import {IoIosContacts} from "react-icons/io"
import {AiFillContacts} from "react-icons/ai"
import { NavLink } from 'react-router-dom'
import logo from "../images/logo-bg.png"



const Header = () => {

  return (
    <header id="header">
      <div className="nav-wrapper">
        <div className="logo-container">
            <NavLink to="/" className="logo logo-link">
              {/* <span className="first">B</span>olo <span className="last">C</span>oders */}
              <img className='logo-img' src={logo} alt="Bolo-Coder"/>
            </NavLink>
          <div className="icons" id="icons">
            <NavLink to="/ask"><SiAskubuntu/></NavLink>
            <NavLink to="/answer"><FaQuestion/></NavLink>
            <NavLink to="/contact"><IoIosContacts/></NavLink>
            <NavLink to="/login"><AiFillContacts/></NavLink>
          </div>
          <div id="bar">
            <GoThreeBars id="responsiveBar"/>
          </div>
        </div>
        <nav>
          <div className="nav-container">
            <ul className="nav-tabs">
              <li className="nav-tab"><NavLink to="/ask">Ask</NavLink></li>
              <li className="nav-tab"><NavLink to="/answer">Answer</NavLink></li>
              <li className="nav-tab"><NavLink to="/faq">FAQ</NavLink></li>
  
              <li className="nav-tab"><NavLink to="/contact">Contact</NavLink></li>
    
              <li className="nav-tab"><NavLink to="/login">Login</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header