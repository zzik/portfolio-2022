import React from 'react'
import Project from './Project'

function Projects() {
  document.title = 'Projects'
  return (
    <div className='projects-wrapper'>
    <div className='projects-title'>
      <h1>Projects</h1>
    </div>
      <Project 
        link="https://github.com/zzik/closed-source-scraper"
        name="Indeed Scraper"
        description="Full stack project involving analytics, scraping, filtering etc."
      />
      <Project 
        link="https://rubicon-tmdb.netlify.app/"
        name="MovieDB Search Site"
        description="React interface for searching movies using 'The Movie Database'"
      />
      <Project 
        link="https://churchmodes.netlify.app/"
        name="Music Modes"
        description="Music theory concept converted into code, helping musicians switch from one mode to another faster."
      />
      <Project 
        link="https://bzkmusic.netlify.app/"
        name="My music hub"
        description="Website created to host all my music content, media player embedded."
      />
  
    </div>
  )
}

export default Projects