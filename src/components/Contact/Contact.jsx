import React from 'react'
import './Contact.css'
import {GrMail} from 'react-icons/gr'
import {SiLinkedin} from 'react-icons/si'
import {SiTwitter} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form=useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cbezqyu', 'template_r3pptvf', form.current, 'zqqvvsxxIJ98OLQTH')

    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });


      e.target.reset()
  };
  
  return (
    <section id="contact">
      <h5>Say Hi!</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <GrMail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>mazumdarsattu@gmail.com</h5>
            <a href="mailto:mazumdarsattu@gmail.com" target='_blank'>Drop an email!</a>
          </article>
          <article className="contact_option">
            <SiLinkedin className='contact_option_icon'/>
            <h4>LinkedIn</h4>
            <h5>Satyajeet Mazumdar</h5>
            <a href="https://www.linkedin.com/in/satyajeet-mazumdar-1350b1211/message" target='_blank'>Connect on LinkedIn</a>        
          </article>
          <article className="contact_option">
            <SiTwitter className='contact_option_icon'/>
            <h4>Twitter</h4>
            <h5>Twitter Handle</h5>
            <a href="https://twitter.com/intent/tweet?text=@yourusername" target='_blank'>Reach out on Twitter</a>

          </article>

        </div>
        {/* End of COntact details */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email'/>
          <textarea name="message" rows="10" placeholder='Enter your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section> 
  )
}

export default Contact