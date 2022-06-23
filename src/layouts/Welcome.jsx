import React from "react"

const Welcome = (props) => {
  return (
    <section className="welcome-wrapper" >
      <section>
        <h1>welcome</h1>
      </section>
      <section className="welcome-progress">
        <h3>setting up content...</h3>
        <div className="welcome-progress-bar-outline">
          <div className="welcome-progress-bar-fill"></div>
        </div>
      </section>
    </section>
  )
}

export default Welcome
