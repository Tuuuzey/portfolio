import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import AnimatedMouse from './components/AnimatedMouse'
import Techs from './components/Techs'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Header />
      <AboutMe />
      <AnimatedMouse />
      <div style={{ height: '250px'}}></div>
      <Projects />
      <div style={{ height: '250px'}}></div>
      <Techs />
      <div style={{ height: '250px'}}></div>
      <Contact />
    </>
  )
}

export default App
