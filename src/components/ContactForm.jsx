import React from "react"

const ContactForm = () => {
  return (
    <form className="form-wrapper">
      <div className="form-details">
        <div className="form-mail">
          <label for="mail">Your e-mail</label>
          <input type="email" name="mail" placeholder="example@mail.com" className="form-item"></input>
        </div>
        <div className="form-subject">
          <label for="subject">Subject</label>
          <input type="text" name="subject" placeholder="Inquiry Subject" className="form-item"></input>
        </div>
      </div>

      <div className="form-content">
        <textarea className="form-item" placeholder='Message..'></textarea>

        <input type="submit" name="send" className="form-submit"></input>
      </div>
    </form>
  )
}

export default ContactForm
