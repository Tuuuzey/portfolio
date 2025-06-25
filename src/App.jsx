import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import AnimatedMouse from './components/AnimatedMouse'

function App() {

  return (
    <>
      <Header />
      <AboutMe />
      <AnimatedMouse />
      <div style={{ height: '250px'}}></div>
      <Projects />
      <div style={{ height: '3000px'}}></div>
    </>
  )
}

export default App
