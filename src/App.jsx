import React, { useState, useEffect } from 'react'
import Navbar from './components/sections/Navbar'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
// import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'


export default function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme =  () => setTheme(theme === 'dark' ? 'light' : 'dark') ;

  // theme toggle
  useEffect(() => {
		if (theme === 'dark') { document.documentElement.classList.add('dark'); } 
    else { document.documentElement.classList.remove('dark'); }
	}, [theme]);

  return (
    <div className="App bg-snow-1 dark:bg-night-1">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

