import React from 'react'
import './NavBar.css'
// import blob from 'C:/Users/vibud/OneDrive/Desktop/WaveProj/my-app/src/Images/blob-top-left.png'
import blob from '../Images/blob-top-left.png'
import bloob from '../Images/blob-top-right.png'
import Ham from '../Images/Icons/hamburger.png'

export default function NavBar() {
    return (
        <header className='navbar'>
        <img id="image1" src={blob}/>
        <div className='containerNav'>
            <div className='logoName'>
                <h1>DGital</h1>
            </div>
            <ul className='navul'>
                <li className='navli'><a href="#">Home</a></li>
                <li className='navli'><a href="#">About</a></li>
                <li className='navli'><a href="#">Service</a></li>
                <li className='navli'><a href="#">Project</a></li>
                <li className='navli'><a href="#">Pages +</a></li>
                <li className='navli'><a href="#">Contact</a></li>
            </ul>
            <button className='btn'>Get Started</button>
            <div className='trigger'>
                <img src={Ham} alt="image" />
            </div>
        </div>
        <img id="image2" src={bloob}/>
    </header>
  )
}
