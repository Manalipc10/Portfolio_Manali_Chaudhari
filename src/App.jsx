import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Technology from './components/Technology'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'



const App = () => {
  return (
    <div>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-purple-900"></div>
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
      
      <div className="container mx-auto px-8"></div>
      <Navbar/>
      <About/>
      <Technology/>
      <Experience/>
      <Projects/>
      <Contact/>
      </div>
  )
}

export default App
