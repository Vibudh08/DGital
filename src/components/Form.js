import React, { useRef } from 'react'
import './Form.css'
import { Element } from 'react-scroll'
import emailjs from "@emailjs/browser";

export default function () {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        alert("Message Send");
    
        emailjs
          .sendForm(
            "service_7h44gl1",
            "template_3yt2bxr",
            form.current,
            "8b0vMzPp_hvudeaR6"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        }
    return (
        <>
            <Element id='contact' name='contact'>
                <div className='containerForm'>
                    <h1 className='h1form'>Get Started</h1>
                    <p className='pform'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae quis?</p>
                  
                        <form ref={form} onSubmit={sendEmail} className='detailsform'>
                            <div className='styledetails' >
                                <input className='inputform' type="text" placeholder='Name' name="user_name" required />
                            </div>
                            <div className='styledetails' >
                                <input className='inputform inputright' type="text" placeholder='Email' name="user_email" required />
                            </div>
                            <div className='styledetails fullwidth'>
                                <textarea className='inputform' name="message" id="t001" cols="20" rows="2" placeholder='Type Your Message' ></textarea>
                            </div>
                            <div className='buttondiv'>
                                <button className='btnform'>Send message</button>
                            </div>
                        </form>
                    </div>
                
            </Element>
        </>
    )
}