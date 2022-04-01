import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef}  from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nb14nkp', 'template_oy7j8g8', form.current, 'dnKz5DExYD3HiU8Pj')
    // e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>saimonyoupromised@gmail.com</h5>
            <a href="mailto:saimonyoupromised@gmail.com" target="_blank">Send a messange</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>saimonyoupromised@gmail.com</h5>
            <a href="https://tlgg.ru/zviad_dev" target="_blank">Send a messange</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+79029762063</h5>
            <a href="https://wapp.click/79029762063" target="_blank">Send a messange</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your email' required/>
          <textarea name="messange" rows="7" placeholder='Your messange' required></textarea>
          <button type="submit" className="btn btn-primary">Send Messange</button>
        </form> 
      </div>
    </section>
  )
}

export default Contact