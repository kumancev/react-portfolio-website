import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiTelegramLine} from 'react-icons/ri'
import {RiLinkedinBoxLine} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>test@gmail.com</h5>
            <a href='mailto:test@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiTelegramLine />
            <h4>Telegram</h4>
            <h5>@test</h5>
            <a href='https://t.me/test' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiLinkedinBoxLine />
            <h4>LinkedIn</h4>
            <h5>@test</h5>
            <a href='https://linkedin.com/' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action=''>
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