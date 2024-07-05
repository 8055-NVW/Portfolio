import { useRef } from "react"
import Navbar from "./components/pages/Navbar"
import Footer from "./components/pages/Footer"
import Landing from "./components/pages/Landing"
import About from "./components/pages/About"
import Skills from "./components/pages/Skills"
import Projects from "./components/pages/Projects"
import Experience from "./components/pages/Experience"
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation"

export default function Root() {
  // For scrolling to sections
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const expRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar 
      landingRef={landingRef}
      aboutRef={aboutRef}
      skillsRef={skillsRef}
      projectsRef={projectsRef}
      expRef={expRef}
      contactRef={contactRef}
      />    
      {/* <BackgroundGradientAnimation/>     */}
      <Landing landingRef={landingRef} />
      <About aboutRef={aboutRef}/>
      <Skills skillsRef={skillsRef}/>
      <Projects projectsRef={projectsRef}/>
      <Experience expRef={expRef}/>
      <Footer contactRef={contactRef}/>
    </>
  )
}