import React from "react"

const Skillset = () => {
  return (
    <section className="skills-wrapper">
      <div className="skills-title">
        <h1>Skills</h1>
      </div>
      <ul className="skills-left" id="skills-one">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>PHP</li>
        <li>Python</li>
        <li>C#</li>
      </ul>
      <ul className="skills-right" id="skills-two">
        <li>React / Next / Gatsby</li>
        <li>Strapi</li>
        <li>Express</li>
        <li>Node</li>
        <li>MongoDB</li>
        <li>SQL</li>
      </ul>

      <ul className="skills-left" id="skills-three">
        <li>SCSS</li>
        <li>Bulma</li>
        <li>BEM</li>
        <li>GIT</li>
        <li>Scrum</li>
      </ul>
    </section>
  )
}

export default Skillset
