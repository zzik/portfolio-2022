import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faAngleUp, faDiceFive, faMailReply, faSuitcase, instagram, faFilePen } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

import React from "react"
import ContactCard from "../components/ContactCard"
import ContactForm from "../components/ContactForm"

function Contact() {
  document.title = 'Contact'

  return (
    <div className="contact-wrapper">
      <ContactCard vendor="GitHub" link="https://github.com/zzik" icon={<FontAwesomeIcon icon={faGithub} size="xl" /> } />
      <ContactCard vendor="Instagram" link="https://www.instagram.com/zikblej/" icon={<FontAwesomeIcon icon={faInstagram}  size="xl" />} />
      <ContactCard vendor="Facebook" link="https://www.facebook.com/zikblej/" icon={<FontAwesomeIcon icon={faFacebook}  size="xl" />} />
      <ContactCard vendor="Fiverr" link="https://www.fiverr.com/zikbej" icon={<FontAwesomeIcon icon={faDiceFive}  size="xl" />} />
      <ContactCard vendor="Upwork" link="https://www.upwork.com/freelancers/~01591ca32584d35db9" icon={<FontAwesomeIcon icon={faCode}  size="xl" />} />
      <ContactCard vendor="Freelancer" link="https://www.freelancer.com/u/zikbej" icon={<FontAwesomeIcon icon={faSuitcase}  size="xl" />} />
      <ContactForm />
    </div>
  )
}

export default Contact
