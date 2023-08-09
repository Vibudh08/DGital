import React from 'react'
import { Element } from 'react-scroll'
import about from '../Images/about.png'
import './About.css'

export default function About() {
  return (
    <>
    <Element id='about' name='about'>
      <div className='aboutwrapper'>
        <div className='containerAbout'>
            <div className='section2'>
                <h3 className='h3About'>ABOUT US- --</h3>
                <h1 className='head2'>#1 Digital solution with 10 years of experience</h1>
                <p className='pabout'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid neque officiis expedita quaerat dolores voluptatum magnam fuga, doloremque saepe illum </p>
              <div>
                  <p className='pabout'>Digital Marketing <span className='spanright'>85%</span></p>
                  <div className='line1'></div>
                  <p className='pabout'>SEO & Backlinks <span className='spanright'>90%</span></p>
                  <div className='line2'></div>
                  <p className='pabout'>Design & Development <span className='spanright'>95%</span></p>
                  <div className='line3'></div>
                </div>
                <button className='btn3'>Read More</button>
            </div>
            <div className='aboutimg'>
              <img class="image5" src={about}/>
            </div>
        </div>
      </div>
      </Element>
    </>
  )
}
