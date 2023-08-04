import React from 'react'
import './Box.css'

export default function ({image,heading,content}) {
  return (
    <div className='containerBox'>
        <div className='Box'>
            <img className='imgBox' src={image} alt="image" />
            
            
            {heading ? <h1 className='h1Box'>{heading}</h1> : '' }
            {content ? <p className='pBox'>{content}</p> : ''}
        </div>
    </div>
  )
}
