import React from 'react'
import hero from '../Images/hero.png'
import './Banner.css'
import { Element } from 'react-scroll'
import bgbottom from '../Images/bg-bottom.png'
import blobcenter from '../Images/blob-center.png'
import blobbottomleft from '../Images/blob-bottom-left.png'
import blobbottomright from '../Images/blob-bottom-right.png'

export default function () {
  return (
    <>
    <Element id='home' name='home'>
    <div className='imgcolor' >
      <div className='containerbanner'>
        <div className='section1'>
            <h1 className='head'>A Digital Agency Of Inteligents & Creative People</h1>
            <p className='pbanner'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid neque officiis expedita quaerat dolores voluptatum magnam fuga, doloremque saepe illum </p>
            <div className='buttonnavbar'>
            <button className='btn2'>Read More</button>
            <button className='btn22'>Contact Us</button>
            </div>
        </div>
        <div className='bannerimage'>
           <img class="image3" src={hero}/>
        </div>
      </div>
      <img src={blobcenter} alt="image" className="blobcenter" />
      <img className="blobbl" src={blobbottomleft} alt="" />
      <img className="blobbr"src={blobbottomright} alt="" />
      <img  class="image4" src={bgbottom} />
    </div>
    </Element>
    </>
  )
}
