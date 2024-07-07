import AnimatedCard from "../custom-components/3d-card-body"

export default function Skills({ skillsRef }) {

    return (
        <div ref={skillsRef} className="min-h-screen pb-10">
            <div className=" flex flex-col justify-center items-center">
                <h1 className="page-title text-4xl font-bold m-3  pt-14 text-center text-slate-100">
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