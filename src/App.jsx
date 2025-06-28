import './App.css'
import { useRef } from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import AnimatedMouse from './components/AnimatedMouse'
import Techs from './components/Techs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const sectionRefs = {
    about: useRef(null),
    projects: useRef(null),
    tech: useRef(null),
    contact: useRef(null)
  }

  return (
    <>
      <Header sectionRefs={sectionRefs} />
      
      <div ref={sectionRefs.about}>
        <AboutMe />
      </div>
      
      <AnimatedMouse />
      <div style={{ height: '250px'}}></div>
      
      <div ref={sectionRefs.projects}>
        <Projects />
      </div>
      
      <div style={{ height: '250px'}}></div>
      
      <div ref={sectionRefs.tech}>
        <Techs />
      </div>
      
      <div style={{ height: '240px'}}></div>
      
      <div ref={sectionRefs.contact}>
        <Contact />
      </div>
      
      <Footer />
    </>
  )
}

export default App