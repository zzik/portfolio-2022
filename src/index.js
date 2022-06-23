import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import Biography from "./components/Biography"
import Projects from "./components/Projects"

import {Home, Contact} from "./routes"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home title="BZK - Home" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bio" element={<Biography />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
