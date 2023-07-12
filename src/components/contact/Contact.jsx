import React from 'react';
import './contact.css';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { BsMessenger } from 'react-icons/bs';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { toast } from 'react-toastify';

const Contact = (props) => {
  const { contactOptions } = props;
  const notify = (e) => toast(e);

  const contactOption = (c, index) => {
    return (
      <article key={index} className='contact-option'>
        {c.type === 'whatsapp' && <BsWhatsapp className='contact-option-icon' />}
        {c.type === 'email' && <HiOutlineMail className='contact-option-icon' />}
        {c.type === 'messenger' && <BsMessenger className='contact-option-icon' />}
        <h4>{c.type}</h4>
        <h5>{c.value}</h5>
        <a href={c.link}>Send a message</a>
      </article>
    )
  }

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q7ag1ue', 'template_l1jupu5', form.current, '69jHRfCoIO04hnAJp')
      .then((result) => {
          console.log(result.text);
          notify("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          notify("error sending message, please try again later");
      });
    
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container container-contact">
        <div className="contact-options">
          {contactOptions.map((c ,index) => contactOption(c, index))}
        </div>
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <input name='name' type="text" placeholder="Your Full Name" required />
          <input name='email' type="email" placeholder="Your Email" required />
          <textarea name="message" id=""  rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className='btn btn-primary' >Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;