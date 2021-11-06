import React, { useState } from "react";

function ContactForm() {
  const [formState, setFormState] = useState({name: '', email: '', message: ''});
  const { name, email, message } = formState;

  function handleChange(event) {
    setFormState({...formState, [event.target.name]: event.target.value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" >
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" defaultValue={name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" defaultValue={email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" defaultValue={message} rows="5" onChange={handleChange} />
        </div>
        <button type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;