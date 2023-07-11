import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_2slyv98', 'template_izpbwdh', form.current, 'xDBX_9qYXcZL9CrD6')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div id='Contact' className='contact-form'>
      <div className="c-left">
        <span>Get in touch</span>
        <span style={{color: 'orange'}}>Contact me ...</span>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className='user' placeholder='Name...' />
            <input type="text" name="user_email" className='user' placeholder='Email...' />
            <textarea name="message" className='user' placeholder='Message...'></textarea>
            <input type="submit" value="Send" className='button' />
            <span className='done'>{done && "Thank you for contacting me!"}</span>
        </form>
      </div>
    </div>
  )
}

export default Contact
