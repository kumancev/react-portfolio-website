import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiTelegramLine} from 'react-icons/ri'
import {RiLinkedinBoxLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })

    e.target.reset()  
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>test@gmail.com</h5>
            <a href='mailto:test@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiTelegramLine className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>@test</h5>
            <a href='https://t.me/test' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiLinkedinBoxLine className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>@test</h5>
            <a href='https://linkedin.com/' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact