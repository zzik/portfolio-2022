import React from "react"

const Biography = () => {

  

  return (
    <section className="biography-wrapper">
      <section className="biography-content">
      <div className="biography-title">
        <h1>Biography</h1>
      </div>
        <div className="biography-left" id="biography-one">
          <p>
            <i>January 2020 - May 2020 </i>
            <br />
            <strong>C#</strong> - Codecademy courses and mini projects.
          </p>
        </div>

        <div className="biography-right" id="biography-two">
          <p>
            <i> June 2020 - present </i> <br />
            <strong> Main: </strong>JavaScript, TypeScript, MERN.
            <br /> <strong>Side:</strong> PHP, Python, SQL.
          </p>
        </div>

        <div className="biography-left" id="biography-three">
          <p>
              asynchronous programming, web sockets, DOM manipulation, web
              scraping and cloud automation.
          </p>
        </div>
        <div className="biography-right" id="biography-four">
          <p>
            Clasically trained musician with 17 years of experience. <br />
            Playing 4 instruments. <br /> Audio production - 5 years.
          </p>
        </div>
      </section>
    </section>
  )
}

export default Biography
