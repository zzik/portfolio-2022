import React from "react"
import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation"
import { useWindowSize } from "../hooks/useResize"

function Main() {
  const [width, height] = useWindowSize()

  const expand = () => {
    document.querySelector(".navigation-modal").style.top = "0"
  }

  return (
    <section className="app-wrapper">
      <Navigation />
      <Outlet />
    </section>
  )
}

export default Main
