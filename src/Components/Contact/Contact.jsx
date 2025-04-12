import React from 'react'
import './Contact.css'
import { IoIosMail } from "react-icons/io";
import { FaLocationPin } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2362d071-44c0-4cce-ae4f-646017c4f917");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <IoIosMail className='mail-icon'/> <p>alexmataac057@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <IoIosCall className='call-icon' /> <p>09215270714</p>
                </div>
                <div className="contact-detail">
                    <FaLocationPin className='location-icon' /> <p>Bacoor, Cavite</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
