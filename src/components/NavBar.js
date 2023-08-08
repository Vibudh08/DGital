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
                onClick={()=>{setiSMobile(false)}}>
                <li className='navli'><Link to="/">Home</Link></li>
                <li className='navli'><Link to="/about">About</Link></li>
                <li className='navli'><Link to="/service">Service</Link></li>
                <li className='navli'><Link to="/project">Project</Link></li>
                <li className='navli'><Link to="/contact">Contact</Link></li>
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
