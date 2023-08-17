import React from 'react'
import './Box.css'
import {Link} from "react-router-dom";

export default function ({image,heading,content,link}) {
  return (
    <>
    <Link to="/serviceDetail" className='containerBox '>
        <div className='Box'>
            <img className='imgBox' src={image} alt="image" />
            
            
            {heading ? <h1 className='h1Box'>{heading}</h1> : '' }
            {content ? <p className='pBox'>{content}</p> : ''}
        </div>
    </Link> 
    </>
  )
}
