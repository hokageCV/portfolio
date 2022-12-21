import React from 'react'
import Navbar from './components/sections/Navbar'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
// import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'


export default function App() {

  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

