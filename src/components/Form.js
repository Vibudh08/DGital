import React from 'react'
import './Form.css'

export default function () {
  return (
    <div containerForm>
        <h1 className='h1form'>Get Started</h1>
        <p className='pform'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae quis?</p>
        <div className='detailsform'>
                <div className='styledetails' >
                    <input className='inputform' type="text" placeholder='Name' required/>
                </div>
                <div className='styledetails' >
                    <input className='inputform inputright' type="text" placeholder='Email' required />
                </div>
            <div className='styledetails fullwidth'>
                <input className='inputform' type="text"  placeholder='Subject'/>
            </div>
            <div className='styledetails fullwidth'>
                <textarea className='inputform' name="text" id="t001" cols="20" rows="2" placeholder='Type Your Message'></textarea>
            </div>
            <div className='buttondiv'>
                <button className='btnform'>Send message</button>
            </div>
        </div>
    </div>
  )
}