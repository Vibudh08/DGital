import React from 'react'
import './Services.css'
import Box from './Box'
import { Element } from 'react-scroll'
import Search from '../Images/Icons/seo.png'
import Web from '../Images/Icons/design.png'
import Social from '../Images/Icons/facebook-app-symbol.png'
import Email from '../Images/Icons/email-marketing.png'
import PPC from '../Images/Icons/pay-per-click.png'
import Android from '../Images/Icons/android.png'

export default function () {
  return (
    <>
    <Element id='services' name='services'>
    <div className='containerServices'>
        <section className='services'>
            <h3 className='h3Services'>-- - OUR SERVICES - --</h3>
            <h1 className='h1Services'>What Solutions We Provide</h1>
        </section>
        <section className='boxServices'>
            <Box image={Search} heading="SEO Optimization" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla soluta recusandae maxime?"/>
            <Box image={Web} heading="Web Design" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla soluta recusandae maxime?"/>
            <Box image={Social} heading="Social Media Marketing" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla soluta recusandae maxime?"/>
            <Box image={Email} heading="E-mail Marketing" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla soluta recusandae maxime?"/>
            <Box image={PPC} heading="PPC Advertising" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla soluta recusandae maxime?"/>
            <Box image={Android} heading="App Development" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla soluta recusandae maxime?"/>
        </section>
    </div>
    </Element>
    </>
  )
}

