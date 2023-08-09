import React,{useState} from 'react'
import {Link } from "react-router-dom";
import {Link as ScrollLink } from 'react-scroll'
import './NavBar.css'
import blob from '../Images/blob-top-left.png'
import bloob from '../Images/blob-top-right.png'
import Ham from '../Images/Icons/hamburger.png'
import X from '../Images/Icons/close.png'




export default function NavBar() {
    const [isMobile,setiSMobile] =useState(false)
    return (
        <header className='navbar'>
        <img id="image1" src={blob}/>
        <div className='containerNav'>
            <div className='logoName'>
                <h1>DGital</h1>
            </div>
            <ul className={isMobile ? 'navul navul-mobile' : 'navul'}
                >
                <li className='navli'>
                    <ScrollLink to="home" 
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                    onClick={()=>{setiSMobile(false)}}>
                        Home
                    </ScrollLink>
                </li>
                <li className='navli'>
                    <ScrollLink to="about" 
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                    onClick={()=>{setiSMobile(false)}}>
                        About
                    </ScrollLink>
                </li>
                <li className='navli'>
                    <ScrollLink to="services" 
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                    onClick={()=>{setiSMobile(false)}}>
                        Services
                    </ScrollLink>
                </li>
                <li className='navli'>
                    <ScrollLink to="project" 
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                    onClick={()=>{setiSMobile(false)}}>
                        Project
                    </ScrollLink>
                </li>
                <li className='navli'>
                    <ScrollLink to="contact" 
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                    onClick={()=>{setiSMobile(false)}}>
                        Contact
                    </ScrollLink>
                </li>
            </ul>
            <img id="image2" src={bloob}/>
            {/* <button className='btn'>Get Started</button> */}
            <button className='trigger'
                onClick={()=>setiSMobile(!isMobile)}
            >
                {/* <IoMdMenu size='3rem' color='white'/> */}
                {/* {MenuIcon} */}
                {isMobile ? <img src={X} alt="" /> : <img src={Ham}/>}
            </button>
        </div>
    </header>
  )
}
