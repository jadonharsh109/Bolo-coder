import React from 'react'
import {AiOutlineHome, AiOutlineUser, AiOutlineBook} from "react-icons/ai"
import {MdOutlineDesignServices} from "react-icons/md"
import {IoMdContact} from "react-icons/io"
import { useState } from 'react'
import styled from 'styled-components'
const Nav = ()=>{
    const Wrapper = styled.section`
    nav{
    background: rgba(0, 0, 0, 0.3);
    width: max-content;
    display: block;
    padding: 0.7rem 1.7rem;
    z-index: 2;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    display: flex;
    gap: 0.8rem;
    border-radius: 4rem;
    backdrop-filter: blur(15px);
}

nav a{
    background: transparent;
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    color: var(--color-light);
    font-size: 1.1rem;
}

nav a:hover{
    background: rgba(0, 0, 0, 0.2);
}

nav a.active{
    background: var(--color-bg);
    color: var(--color-white);
}
    `;
    const [activeNav, setActiveNav] = useState("#")

    return(
        <Wrapper>
        <nav>
            <a href="#" onClick={()=> setActiveNav("#") } className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
            <a href="#about" onClick={()=> setActiveNav("#about") } className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
            <a href="#experience"  onClick={()=> setActiveNav("#experience") } className={activeNav === "#experience" ? "active" : ""}><AiOutlineBook/></a>
            <a href="#services"  onClick={()=> setActiveNav("#services") } className={activeNav === "#services" ? "active" : ""}><MdOutlineDesignServices/></a>
            <a href="#contact"  onClick={()=> setActiveNav("#contact") } className={activeNav === "#contact" ? "active" : ""}><IoMdContact/></a>
        </nav>
        </Wrapper>
    )
}

export default Nav;