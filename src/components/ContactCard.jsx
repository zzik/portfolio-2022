import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ContactCard = (props) => {
  return (
    <a className='contact-item' href={props.link} target="_blank">
      {props.icon}
      <h3>{props.vendor}</h3>
    </a>
  )
}

export default ContactCard