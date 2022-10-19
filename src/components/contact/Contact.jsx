// Email and Messenger icons
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

// EmailJS
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// State
import {useState} from 'react'

// Alert component
import Alert from 'components/contact/Alert'

// me
import {me} from 'data/me'

function Contact() {

  const [alertState, setAlertState] = useState('none')

  const form = useRef();

  const sendEmail = (e) => {
    setAlertState('sending')
    e.preventDefault();

    emailjs.sendForm('x', 'x', form.current, 'x')
      .then((result) => {
        setAlertState('sent');
      }, (error) => {
        setAlertState('notsent');
      });

    e.target.reset();
  };

  return (
    <section id="contact">
        <h3 className='head'>GET IN TOUCH</h3>
        <h5 className='title'>Contact me</h5>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>{me["email"]}</h5>
              <a href={me["emailLink"]} target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className='contact__option-icon' />
              <h4>Messenger</h4>
              <h5>{me["messenger"]}</h5>
              <a href={me["messengerLink"]} target="_blank">Send a message</a>
            </article>
          </div>
          <div className="contact__form">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required />
              <input type="email" name='email' placeholder='Your Email' required />
              <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
            <Alert state={alertState}/>
          </div>
        </div>
    </section>
  )
}

export default Contact