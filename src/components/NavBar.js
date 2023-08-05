import React,{useState} from 'react'
import './NavBar.css'
import blob from '../Images/blob-top-left.png'
import bloob from '../Images/blob-top-right.png'
import Ham from '../Images/Icons/hamburger.png'
import X from '../Images/Icons/close.png'
import MenuIcon from '@mui/icons-material/Menu';
import { IoMdMenu } from "react-icons/io";;


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
                <li className='navli'><a href="#">Home</a></li>
                <li className='navli'><a href="#">About</a></li>
                <li className='navli'><a href="#">Service</a></li>
                <li className='navli'><a href="#">Project</a></li>
                <li className='navli'><a href="#">Pages +</a></li>
                <li className='navli'><a href="#">Contact</a></li>
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
