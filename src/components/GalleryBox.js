import React from 'react'
import './Box.css'

export default function ({image}) {
    return (
        <div className='containerBox'>
        <div className='Box'>
            <img className='imgBox' src={image} alt="image" />
        </div>
        </div>
    )
}
