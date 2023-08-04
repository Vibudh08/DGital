import React from 'react'
import Address from '../Images/Icons/pin.png'
import Phone from '../Images/Icons/telephone.png'
import Email from '../Images/Icons/mail.png'
import Twitter from '../Images/Icons/twitter (1).png'
import Facebook from '../Images/Icons/facebook.png'
import Instagram from '../Images/Icons/instagram (1).png'
import LinkedIn from '../Images/Icons/linkedin (1).png'
import Arrow from '../Images/Icons/next.png'
import Send from '../Images/Icons/send.png'
import bgtop from '../Images/bg-top.png'
import world from '../Images/map.png'
import './Footer.css'
import Box from './Box'
import portfolio1 from '../Images/portfolio-1.jpg'
import portfolio2 from '../Images/portfolio-2.jpg'
import portfolio3 from '../Images/portfolio-3.jpg'
import portfolio4 from '../Images/portfolio-4.jpg'
import portfolio5 from '../Images/portfolio-5.jpg'
import portfolio6 from '../Images/portfolio-6.jpg'

export default function Footer() {
    return (
        <>
        <footer className='foooter'>
            <img className='mapfoot' src={world} alt="" />
            <img className="bgtop" src={bgtop} alt="" />
            <div className='containerFoot'>
                <div className='addressfoot'>
                    <h3 className='addfoot'>ADDRESS - --</h3>
                    <ul>
                        <li className='lifoot'><span className='spanfoot'><img src={Address} alt="" /></span>123 Street, New York, USA</li>
                        <li className='lifoot'><span className='spanfoot'><img src={Phone} alt="" /></span>+012 345 67890</li>
                        <li className='lifoot'><span className='spanfoot'><img src={Email} alt="" /></span>info@example.com</li>
                    </ul>
                    <div >
                        <ul className='socialapp'>
                            <li><img src={Twitter} alt="" /></li>
                            <li><img src={Facebook} alt="" /></li>
                            <li><img src={Instagram} alt="" /></li>
                            <li><img src={LinkedIn} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className='quicklink'>
                    <h3 className='addfoot'>QUICK LINK - --</h3>
                    <ul>
                        <li className='lifoot'><span className='spanfoot'><img src={Arrow} alt="" /></span>About Us</li>
                        <li className='lifoot'><span className='spanfoot'><img src={Arrow} alt="" /></span>Contact Us</li>
                        <li className='lifoot'><span className='spanfoot'><img src={Arrow} alt="" /></span>Privacy Policy</li>
                        <li className='lifoot'><span className='spanfoot'><img src={Arrow} alt="" /></span>Terms & Conditions</li>
                        <li className='lifoot'><span className='spanfoot'><img src={Arrow} alt="" /></span>Career</li>
                    </ul>
                </div>
                <div className='galleryfoot'>
                    <h3 className='addfoot'>GALLERY - --</h3>
                    <section className='galleryboxServices galleryItem boxfoot'>
                        <Box image={portfolio1}/>
                        <Box image={portfolio2}/>
                        <Box image={portfolio3}/>
                        <Box image={portfolio4}/>
                        <Box image={portfolio5}/>
                        <Box image={portfolio6}/>
                    </section>
                </div>
                <div className='newsletter'>
                <h3 className='addfoot'>NEWS LETTER - --</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quo ea. Quisquam ipsam maiores dolor.</p>
                <div className='inputfoot'>
                    <input type="text"  placeholder='Your Email' name="" id="textfooter" />
                    <button className='btnfoot'><img src={Send}/></button>
                </div>
                </div>
            </div>
            <div className='pend'>
                <p><span><b>&copy; DGital</b></span>, All Right Reserved. Designed by Vibudh </p>
            </div>
        </footer>
        </>
    )
}
