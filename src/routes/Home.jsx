import React from "react"
import Biography from "../components/Biography"
import Homepage from "../components/Homepage"
import Projects from '../components/Projects'
import Skillset from "../components/Skillset"

function Home(props) {
  document.title = props.title

  return (
    <>
    <Homepage />
    <Biography />
    <Skillset />
    </>
  )
}

export default Home
