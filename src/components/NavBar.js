import React,{useState} from 'react'
import './NavBar.css'
// import blob from 'C:/Users/vibud/OneDrive/Desktop/WaveProj/my-app/src/Images/blob-top-left.png'
import blob from '../Images/blob-top-left.png'
// import { useState } from 'react'
import bloob from '../Images/blob-top-right.png'
import Ham from '../Images/Icons/hamburger.png'
import X from '../Images/Icons/close.png'


export default function NavBar() {
    const [isMobile,setisMobile] =useState(false)
    return (
        <header className='navbar'>
        <img id="image1" src={blob}/>
        <div className='containerNav'>
            <div className='logoName'>
                <h1>DGital</h1>
            </div>
            <ul className={isMobile ? 'navul-mobile' : 'navul'}
                onClick={()=>{setisMobile(true)}}
            >
                <li className='navli'><a href="#">Home</a></li>
                <li className='navli'><a href="#">About</a></li>
                <li className='navli'><a href="#">Service</a></li>
                <li className='navli'><a href="#">Project</a></li>
                <li className='navli'><a href="#">Pages +</a></li>
                <li className='navli'><a href="#">Contact</a></li>
            </ul>
            <button className='btn'>Get Started</button>
            <button className='trigger'
                onClick={()=>{setisMobile(!isMobile)}}
            >
                <img src={Ham} alt="" />
            </button>
        </div>
        <img id="image2" src={bloob}/>
    </header>
  )
}
