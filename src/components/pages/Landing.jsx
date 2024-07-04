import { useEffect } from 'react'
// GSAP imports(for animations )
import SplitType from 'split-type'
import { gsap } from "gsap"

// Custom Imports
import profilePic from '../../assets/profile-pic.jpg'

export default function Landing({ landingRef }) {

    const words = ['Javascript', 'HTML', 'CSS', 'ReactJS', 'Python', 'MongoDB', 'Mongoose', 'TailwindCSS']

    useEffect(() => {
        new SplitType('#text')
        const characters = document.querySelectorAll('.char')
        for (let i = 0; i < characters.length; i++) {
            characters[i].classList.add('translate-y-full')
        }
        gsap.to(".char", {
            y: 0,
            stagger: .07,
            delay: .05,
            duration: .70,
        });
    }, [])


    return (
        <>
            <div ref={landingRef} className='min-h-screen h-full w-[98%] flex items-center justify-center flex-col'>
                <div className='w-screen max-w-[1000px]  pb-[.5em] flex flex-col lg:flex-row items-center justify-center'>
                    <div className=' mx-5 w-full'>
                        <h1 id='text' className="landing-text text-5xl  md:text-6xl font-medium text-center text-slate-100 leading-[6rem]">
                            Hi!<br />
                            I'm Vivian
                        </h1>
                        <h2 className='text-4xl hidden md:block text-center text-slate-100 pt-10'>Full Stack Software Developer</h2>
                    </div>
                    <div className=' mx-5 w-full flex flex-col justify-center items-center border-l-none border-white md:border-l-4'>
                        <div className="avatar my-5">
                            <div className="w-[17rem] rounded-3xl">
                                <img src={profilePic} alt='A mug shot of me' />
                            </div>
                        </div>
                        <h2 className='text-4xl text-center md:hidden text-slate-100 pt-10'>Full Stack Software Developer</h2>
                    </div>
                </div>
            </div>
        </>
    )
}