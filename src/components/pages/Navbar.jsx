import { useState, useEffect, useRef } from 'react'

export default function Navbar({landingRef,aboutRef,skillsRef,projectsRef,expRef,contactRef}) {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true)
  const timeoutRef = useRef(null)

  function handleClick(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)

      // Clear previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      // Hide navbar after 1 second of inactivity
      timeoutRef.current = setTimeout(() => {
        setVisible(false)
      }, 1000)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [prevScrollPos])

  useEffect(() => {

    timeoutRef.current = setTimeout(() => {
      setVisible(false)
    }, 2000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    };
  })

  return (
    <div className={`nav-container w-full sm:w-screen pt-3 fixed top-0 z-50 bg-transparent transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="navbar justify-center items-center ">
        <ul className="menu flex-row text-lg font-bold p-0 space-x-4 bg-background/55 backdrop-blur-md">
          <li className='active'><a onClick={()=>handleClick(landingRef)}>Home</a></li>
          <li><a className='nav_link' onClick={()=>handleClick(aboutRef)}>About</a></li>
          {/* <li><a className='nav_link' onClick={()=>handleClick(skillsRef)}>Skills</a></li> */}
          <li><a className='nav_link' onClick={()=>handleClick(projectsRef)}>Projects</a></li>
          <li><a className='nav_link' onClick={()=>handleClick(expRef)}>Experience</a></li>
          <li><a className='nav_link' onClick={()=>handleClick(contactRef)}>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}