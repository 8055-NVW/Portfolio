import { useEffect } from 'react'
// GSAP imports(for animations )
import SplitType from 'split-type'
import { gsap } from "gsap"

// Custom Imports
import me from '../../assets/me.jpg'

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
            <div ref={landingRef} className='h-screen w-full flex items-center justify-center'>
                <div className='w-full max-w-[1000px] flex flex-col  lg:flex-row items-center justify-center'>
                    <div className=' mx-5 w-full'>
                        <h1 id='text' className="playwrite-nz-400 landing-text text-5xl  md:text-6xl font-bold text-center text-white">
                            Hi!
                            <br />
                            I'm Vivian
                        </h1>
                        <h2 className='text-4xl hidden md:hidden lg:block text-center text-slate-100 pt-5'>Full Stack Software Developer</h2>
                    </div>
                    <div className=' px-5 py-10 w-full flex flex-col justify-center items-center border-l-none border-white lg:border-l-4'>
                        <div className="avatar ">
                            <div className="w-[17rem] rounded-3xl">
                                <img src={me} alt='A mug shot of me' />
                            </div>
                        </div>
                        <h2 className=' text-4xl text-center font-light lg:hidden text-slate-100 pt-10'>Full Stack Software Developer</h2>
                    </div>
                </div>
            </div>
        </>
    )
}