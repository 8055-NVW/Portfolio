import AnimatedCard from "../custom-components/3d-card-body"

import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import vite from '../../assets/vite.svg'


export default function Skills({ skillsRef }) {


    return (
        <div ref={skillsRef} className="min-h-screen">
            <div className=" flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold m-3  pt-20 text-center text-slate-100">
                    Skills
                </h1>
                <p className="text-2xl mx-10 mt-5 text-center text-slate-100">
                    Here are some of technologies I have worked with.
                </p>
                <AnimatedCard />
            </div>
        </div>
    )
}