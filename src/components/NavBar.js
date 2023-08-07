import React,{useState} from 'react'
import {Link } from "react-router-dom";
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
            <ul className={isMobile ? 'navul-mobile' : 'navul'}
                onClick={()=>{setiSMobile(false)}}
            >
                <li className='navli'><a href="/">Home</a></li>
                <li className='navli'><a href="/about">About</a></li>
                <li className='navli'><a href="/service">Service</a></li>
                <li className='navli'><a href="project">Project</a></li>
                <li className='navli'><a href="/pages">Pages +</a></li>
                <li className='navli'><a href="/contact">Contact</a></li>
            </ul>
            <img id="image2" src={bloob}/>
            <button className='btn'>Get Started</button>
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
