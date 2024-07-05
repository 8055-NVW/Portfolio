"use client";
import { useRef } from "react"
import { useEffect, useState } from "react";
import { FlipWords } from "../ui/flip-words";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

// custom imports
import printOne from '../../assets/printOne.jpg'
import printTwo from '../../assets/printTwo.jpg'
import printThree from '../../assets/printThree.jpg'
import printFour from '../../assets/printFour.jpg'
import printFive from '../../assets/printFive.jpg'
import printSix from '../../assets/printSix.jpg'
import printSeven from '../../assets/printSeven.jpg'

export default function About({ aboutRef }) {

    const projects = [
        {
            pic: printOne,
            title: "Koala",
            name: "Design by Patrickart",
        },
        {
            pic: printTwo,
            title: "Articulated Elephant",
            name: "Design by LeFabShop",

        },
        {
            pic: printThree,
            title: "Wireframe Skull Pencilholder",
            name: "Design by philnelson",
        },
        {
            pic: printFour,
            title: "My Rig 💖",
        },
        {
            pic: printFive,
            title: "Deadpool Bust",
            name: "Design by Eastman",
        },
        {
            pic: printSix,
            title: "The Squintsworth Pair Glasses Holder",
            name: "Design by Zyltech",
        },
        {
            pic: printSeven,
            title: "Spiral Vase",
        },
    ];

    const words = ['Software Engineer', 'Automotive-Enthusiast', 'Tech-Geek', '3D Printing Aficionado', 'Guitarist']


    return (
        <div ref={aboutRef} className=" bg-black w-full" >
            <div className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10">
                <FlipWords className='text-3xl md:text-4xl font-bold m-3   text-center' words={words} />
                <p className="w-full md:w-2/4 p-5 text-xl font-light text-center text-slate-100 leading-[2rem]">
                    I'm an innovative and proactive Full-Stack Developer with a strong grasp of software engineering principles.
                    I love working in teams and am dedicated to delivering high-quality code and user-friendly designs.
                </p>
                <InfiniteMovingCards className='w-full' items={projects} direction="right" speed="slow" />
                <p className="w-full lg:w-2/4 p-4 text-xl font-light text-center text-slate-100 leading-[2rem]">
                    My passion for technology integration and creative problem-solving stems from my hobby of FDM 3D printing, which inspired my transition into software engineering.
                    When I'm not coding, you'll find me tinkering with automotive projects, jamming on my guitar, or exploring the latest tech trends.
                </p>
                <p className="w-full md:w-2/4 p-4 text-xl font-light text-center text-slate-100 leading-[2rem]">
                    I believe in continuous learning and improvement, always staying curious and open to new ideas.
                    My journey in tech has been an exciting adventure, blending creativity with technical expertise to build innovative solutions.
                </p>
                <p className="w-full md:w-2/4 p-4 text-xl font-light text-center text-slate-100 leading-[2rem]">
                    Let's connect and collaborate to create something amazing together.
                    Whether it's a complex web application or a simple yet elegant design, I'm always up for the challenge!
                </p>
            </div>
        </div>
    )
}