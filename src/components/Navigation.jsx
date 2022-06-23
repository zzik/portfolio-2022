import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleUp,
  faBackward,
  faBars,
  faUpload,
} from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react"
import { Link } from "react-router-dom"

function Navigation() {
  window.onscroll = () => {
    scrollFunction()
  }

  function scrollFunction() {
    // if (
    //   document.body.scrollTop > 20 ||
    //   document.documentElement.scrollTop > 20
    // ) {
    //   document.querySelector(".navigation-wrapper").style.top = "0"
    // } else {
    //   document.querySelector(".navigation-wrapper").style.top = "-100%"
    // }
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.querySelector("#burger").style.top = "0"
    } else {
      document.querySelector("#burger").style.top = "-100%"
    }
  }

  const collapse = () => {
    document.querySelector(".navigation-modal").style.top = "-100%"
  }

  const expand = () => {
    document.querySelector(".navigation-modal").style.top = "0"
  }


  return (
    <>
      <a onClick={expand} id="burger">
        {" "}
        MENU{" "}
      </a>
      <section className="navigation-wrapper">
        <div className="navigation-mobile">
          <section className="navigation-modal">
            <Link onClick={collapse} to="/">
              HOME
            </Link>
            <Link onClick={collapse} to="/bio">
              BIO
            </Link>
            <Link onClick={collapse} to="/projects">
              PROJECTS
            </Link>
            <Link onClick={collapse} to="/contact">
              CONTACT
            </Link>
            <a className="collapse" onClick={collapse}>
              <FontAwesomeIcon icon={faAngleUp} />
            </a>
          </section>
        </div>
      </section>
    </>
  )
}

export default Navigation
