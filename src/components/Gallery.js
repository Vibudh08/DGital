import React from 'react'
import { Element } from 'react-scroll'
import './Gallery.css'
import Box from './Box'
import portfolio1 from '../Images/portfolio-1.jpg'
import portfolio2 from '../Images/portfolio-2.jpg'
import portfolio3 from '../Images/portfolio-3.jpg'
import portfolio4 from '../Images/portfolio-4.jpg'
import portfolio5 from '../Images/portfolio-5.jpg'
import portfolio6 from '../Images/portfolio-6.jpg'

export default function () {
  return (
    <>
    <Element id='project' name='project'>
    <div className='containerGallery'>
        <section className='gallery'>
            <h3 className='h3Gallery'>-- - OUR GALLERY - --</h3>
            <h1 className='h1Gallery'>Recently Created Projects</h1>
        </section>
    </div>
        <section className='galleryboxServices galleryItem'>
            <Box image={portfolio1}/>
            <Box image={portfolio2}/>
            <Box image={portfolio3}/>
            <Box image={portfolio4}/>
            <Box image={portfolio5}/>
            <Box image={portfolio6}/>
        </section>
        </Element>
    </>
  )
}
