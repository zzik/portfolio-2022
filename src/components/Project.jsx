import React from 'react'

const Project = (props) => {
  return (
    <a href={props.link} target="_blank" className='projects-item'>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </a>
  )
}

export default Project