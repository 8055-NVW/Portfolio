import { useEffect } from 'react'
// Animation imports
import Aos from 'aos'
import 'aos/dist/aos.css'
//Asset imports
// import Frogger from '../../assets/Frogger.webm'
import Frogger from '../../assets/Frogger.mp4'
import MovieGallery from '../../assets/MovieGallery.webm'
import Pedal from '../../assets/Pedal.webm'
import BlendBay from '../../assets/BlendBay.webm'
import vite from '../../assets/vite.svg'
import react from '../../assets/react.svg'
import trello from '../../assets/trello.svg'
import tableplus from '../../assets/tableplus.svg'
import sass from '../../assets/sass.svg'
import python from '../../assets/python3.svg'
import postman from '../../assets/postman.svg'
import postgresql from '../../assets/postgresql.svg'
import netlify from '../../assets/netlify.svg'
import mongodb from '../../assets/mongodb.svg'
import materialui from '../../assets/material-ui.svg'
import jwt from '../../assets/jwt.svg'
import js from '../../assets/js.svg'
import insomnia from '../../assets/insomnia.svg'
import heroku from '../../assets/heroku.svg'
import django from '../../assets/django.svg'
import html from '../../assets/html-5.svg'
import css from '../../assets/css-3.svg'
import cloudinary from '../../assets/cloudinary.svg'
import bootstrap from '../../assets/bootstrap.svg'
import link from '../../assets/link.svg'
import githubwhite from '../../assets/githubwhitesvg.svg'
import movies from '../../assets/movies.png'
import pedal from '../../assets/pedal.png'
import frog from '../../assets/frog.png'
import milkshake from '../../assets/milkshake.png'

export default function Projects({ projectsRef }) {

    useEffect(() => {
        // Animate on scroll effect
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div ref={projectsRef} className='h-full bg-black flex flex-col items-center pb-10'>
            <h1 className="page-title text-4xl font-bold m-3 mb-[1.5em]  pt-14 text-center text-slate-100 ">Projects</h1>
            {/* Frogger */}
            <div className='max-w-3xl flex flex-col text-center rounded-2xl my-5 p-2 shadow-2xl shadow-slate-600' data-aos="fade-up" data-aos-duration="500">
                <div className='mb-5'>
                    <div className='flex items-center justify-center'>
                        <h3 className='text-3xl mb-4'>Frogger</h3>
                        <img src={frog} alt="a frog icon designed by Good Ware" className='h-8 mx-3 mb-4' />
                    </div>
                    <h4 className='text-xl'>Solo Project | One Week</h4>
                    <div className='text-xl mt-4 px-5 flex flex-wrap justify-center items-center'>
                        <img className='h-10 p-1' src={html} alt="html" />
                        <img className='h-10 p-1' src={css} alt="css" />
                        <img className='h-10 p-1' src={js} alt="js" />
                        <img className='h-10 p-1' src={netlify} alt="netlify" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row p-3 md:p-0'>
                    <div className='flex p-2 pb-5' >
                        <video width="2500"
                            className="object-cover border-2 border-gray-400 rounded-lg"
                            autoPlay
                            muted
                            loop
                        >
                            <source src={Frogger} type="video/mp4" />
                        </video>
                    </div>
                    <div className='mx-3 mb-5 text-center'>
                        <p className='mb-3 md:text-lg'>
                            Inspired by the 80s classic arcade game "Frogger" the aim here was to incorporate similar elements and visual cues for an authentic experience.
                        </p>
                        <p className='md:text-lg'>
                            Although the visuals were not the main focus, my primary goal here was to ensure that the core functionality of the game is robust and mirrors the original.
                        </p>
                    </div>

                </div>
                <div className=' mx-5 mb-10 md:mt-5 flex items-center justify-center'>
                    <a href="https://project-1-frogger.netlify.app/" target="_blank">
                        <button className="w-28 mx-4 relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none hover:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950  py-1 text-md font-medium text-white backdrop-blur-3xl">
                                <p className=' grow pb-[.8px] pl-1'>Project</p>
                                <img src={link} className="h-8 ml-3 p-[3px] border-2 rounded-full mr-1" alt="Frogger Game" />
                            </span>
                        </button>
                    </a>
                    <a href="https://github.com/8055-NVW/Project-1-Frogger" target="_blank">
                        <button className="w-28 mx-4 relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none hover:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-md font-medium text-white backdrop-blur-3xl">
                                <p className='grow pb-[.8px] pl-1'>Github</p>
                                <img src={githubwhite} className=" h-8 ml-3 p-[1px] bg-white rounded-full" alt="Frogger Game" />
                            </span>
                        </button>
                    </a>
                </div>
            </div>
            {/* Movie Gallery */}
            <div className=' max-w-3xl flex flex-col text-center rounded-2xl my-20 p-2 shadow-2xl shadow-slate-600' data-aos="fade-up" data-aos-duration="500">
                <div className='mb-5'>
                    <div className='flex items-center justify-center'>

                        <h3 className='text-3xl mb-4'>Movie Gallery</h3>
                        <img src={movies} alt="a movie reel icon designed by Smashicons" className='h-8 mx-3 mb-4' />
                    </div>
                    <h4 className='text-xl'>Partner Project | Two Days</h4>
                    <div className='text-xl mt-4 px-5 flex flex-wrap justify-center items-center'>
                        <img className='h-10 p-1' src={html} alt="html" />
                        <img className='h-10 p-1' src={css} alt="css" />
                        <img className='h-10 p-1' src={js} alt="js" />
                        <img className='h-10 p-1' src={vite} alt="vite" />
                        <img className='h-10 p-1' src={react} alt="react" />
                        <img className='h-10 p-1' src={bootstrap} alt="bootstrap" />
                        <img className='h-10 p-1' src={insomnia} alt="insomnia" />
                        <img className='h-10 p-1' src={netlify} alt="netlify" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row p-3 md:p-0'>
                    <div className='flex p-2 pb-5' >
                        <video width="2500"
                            className="object-cover border-2 border-gray-400 rounded-lg"
                            autoPlay
                            muted
                            loop
                        >
                            <source src={MovieGallery} type="video/webm" />
                        </video>
                    </div>
                    <div className='mx-3 mb-5 text-center'>
                        <p className='mb-3 md:text-lg'>
                            A React-based website that consumes an API and utilizes the Bootstrap framework, Movie Gallery lets users like movies and add them to their watch lists.
                        </p>
                        <p className='md:text-lg'>
                            We also incorporated a search bar to allow users to filter by category.
                        </p>
                    </div>
                </div>
                <div className='mx-5 mb-10 md:mt-5 flex items-center justify-center'>
                    <a href="https://6628db1561b28c07a2f00c15--zesty-cheesecake-010dd6.netlify.app/" target="_blank">
                        <button className="w-28 mx-4 relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none hover:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-md font-medium text-white backdrop-blur-3xl">
                                <p className=' grow pb-[.8px] pl-1'>Project</p>
                                <img src={link} className="h-8 ml-3 p-[3px] border-2 rounded-full" alt="Movie Gallery" />
                            </span>
                        </button>
                    </a>
                    <a href="https://github.com/8055-NVW/Project-2-React-Movie-API/tree/main" target="_blank">
                        <button className="w-28 mx-4 relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none hover:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-md font-medium text-white backdrop-blur-3xl">
                                <p className='grow pb-[.8px]'>Github</p>
                                <img src={githubwhite} className=" h-8 ml-3 p-[1px] bg-white rounded-full" alt="Movie Gallery" />
                            </span>
                        </button>
                    </a>
                </div>
            </div>
            {/* Pedal */}
            <div className='h-full max-w-3xl  flex flex-col text-center rounded-2xl my-5 p-2 shadow-2xl shadow-slate-600' data-aos="fade-up" data-aos-duration="500">
                <div className='mb-5'>
                    <div className='flex items-center justify-center'>
                        <h3 className='text-3xl mb-4'>Pedal</h3>
                        <img src={pedal} alt="a pedal icon designed by Freepik" className='h-9 mx-3 mb-4' />
                    </div>
                    <h4 className='text-xl'>Group Project | One Week</h4>
                    <div className='text-xl mt-4 px-5 flex flex-wrap justify-center items-center'>
                        <img className='h-10 p-1' src={html} alt="html" />
                        <img className='h-10 p-1' src={css} alt="css" />
                        <img className='h-10 p-1' src={js} alt="js" />
                        <img className='h-10 p-1' src={vite} alt="vite" />
                        <img className='h-10 p-1' src={react} alt="react" />
                        <img className='h-10 p-1' src={sass} alt="sass" />
                        <img className='h-10 p-1' src={bootstrap} alt="bootstrap" />
                        <img className='h-10 p-1' src={insomnia} alt="insomnia" />
                        <img className='h-10 p-1' src={cloudinary} alt="cloudinary" />
                        <img className='h-10 p-1' src={jwt} alt="jwt" />
                        <img className='h-10 p-1' src={trello} alt="trello" />
                        <img className='h-10 p-1' src={heroku} alt="heroku" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row p-3 md:p-0'>
                    <div className='flex p-2 pb-5' >
                        <video width="2500"
                            className="object-cover border-2 border-gray-400 rounded-lg"
                            autoPlay
                            muted
                            loop
                        >
                            <source src={Pedal} type="video/webm" />
                        </video>
                    </div>
                    <div className='mx-3 mb-5 text-center'>
                        <p className='mb-3 md:text-lg'>
                            Pedal is a social network for car enthusiasts. Users can manage posts, cars, and profiles, and follow others.
                        </p>
                        <p className='md:text-lg'>

                            Project 3 introduced the MERN stack, CRUD operations, and teamwork in a three-member team, enhancing skills in GitHub navigation and collaboration.
                        </p>

                    </div>

                </div>
                <div className='mx-5 mb-10 md:mt-5 flex items-center justify-center'>
                    <a href="https://project-pedal-035a309c1004.herokuapp.com/" target="_blank">
                        <button className="w-28 mx-4 relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none hover:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-md font-medium text-white backdrop-blur-3xl">
                                <p className=' grow pb-[.8px] pl-1'>Project</p>
                                <img src={link} className="h-8 ml-3 p-[3px] border-2 rounded-full" alt="Pedal" />
                            </span>
                        </button>
                    </a>
                    <a href="https://github.com/8055-NVW/Project-3-Pedal" target="_blank">
                        <button className="w-28 mx-4 relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none hover:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-md font-medium text-white backdrop-blur-3xl">
                                <p className='grow pb-[.8px]'>Github</p>
                                <img src={githubwhite} className=" h-8 ml-3 p-[1px] bg-white rounded-full" alt="Pedal" />
                            </span>
                        </button>
                    </a>
                </div>
            </div>
            {/* Blend Bay */}
            <div className='max-w-3xl flex flex-col text-center rounded-2xl my-5 p-2 shadow-2xl shadow-slate-600' data-aos="fade-up" data-aos-duration="500">
                <div className='mb-5'>
                    <div className='flex items-center justify-center'>
                        <h3 className='text-3xl mb-4'>BlendBay</h3>
                        <img src={milkshake} alt="a shake icon designed by SetitikPixelStudio" className='h-8 mx-1 mb-4' />
                    </div>
                    <h4 className='text-xl'>Solo Project | One Week</h4>
                    <div className='text-xl mt-4 px-5 flex flex-wrap justify-center items-center'>
                        <img className='h-10 p-1' src={html} alt="html" />
                        <img className='h-10 p-1' src={css} alt="css" />
                        <img className='h-10 p-1' src={js} alt="js" />
                        <img className='h-10 p-1' src={python} alt="python" />
                        <img className='h-10 p-1' src={vite} alt="vite" />
                        <img className='h-10 p-1' src={react} alt="react" />
                        <img className='h-10 p-1' src={django} alt="django" />
                        <img className='h-10 p-1' src={materialui} alt="materialui" />
                        <img className='h-10 p-1' src={mongodb} alt="mongodb" />
                        <img className='h-10 p-1' src={postgresql} alt="postgresql" />
                        <img className='h-10 p-1' src={postman} alt="postman" />
                        <img className='h-10 p-1' src={tableplus} alt="tableplus" />
                        <img className='h-10 p-1' src={heroku} alt="heroku" />
                        <img className='h-10 p-1' src={trello} alt="trello" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row p-2'>
                    <div className='flex p-3 pb-5' >
                        <video width="2500"
                            className="object-cover border-2 border-gray-400 rounded-lg"
                            autoPlay
                            muted
                            loop>
                            <source src={BlendBay} type="video/webm" />
                        </video>
                    </div>
                    <div className='mx-3  mb-5 text-center'>
                        <p className='mb-3 md:text-lg'>
                            Blend Bay is a website for shake lovers to review, rate, and favorite shakes.
                        </p>
                        <p className='md:text-lg'>
                            For my final project, I expanded on Project 3, using Python and Django for the back end, and React with MaterialUI for the front end, to create a comprehensive shake website.
                        </p>

                    </div>

                </div>
                <div className='mx-5 mb-10 md:mt-5 flex items-center justify-center'>
                    <a href="https://blend-bay-155603fbccf6.herokuapp.com/" target="_blank">
                        <button className="w-28 mx-4 relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none hover:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-md font-medium text-white backdrop-blur-3xl">
                                <p className=' grow pb-[.8px] pl-1'>Project</p>
                                <img src={link} className="h-8 ml-3 p-[3px] border-2 rounded-full" alt="Blend Bay" />
                            </span>
                        </button>
                    </a>
                    <a href="https://github.com/8055-NVW/Project-4-Blend-Bay" target="_blank">
                        <button className="w-28 mx-4 relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none hover:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-md font-medium text-white backdrop-blur-3xl">
                                <p className='grow pb-[.8px]'>Github</p>
                                <img src={githubwhite} className=" h-8 ml-3 p-[1px] bg-white rounded-full" alt="Blend Bay" />
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}