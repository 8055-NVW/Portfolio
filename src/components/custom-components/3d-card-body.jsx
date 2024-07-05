import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import vite from '../../assets/vite.svg'
import vscode from '../../assets/vscode.svg'
import react from '../../assets/react.svg'
import tailwind from '../../assets/tailwind.svg'
import ubuntu from '../../assets/ubuntu.svg'
import terminal from '../../assets/terminal.svg'
import trello from '../../assets/trello.svg'
import tableplus from '../../assets/tableplus.svg'
import sql from '../../assets/sql.svg'
import sass from '../../assets/sass.svg'
import python from '../../assets/python3.svg'
import postman from '../../assets/postman.svg'
import postgresql from '../../assets/postgresql.svg'
import npm from '../../assets/npm.svg'
import nodejs from '../../assets/nodejs.svg'
import netlify from '../../assets/netlify.svg'
import mongodb from '../../assets/mongodb.svg'
import materialui from '../../assets/material-ui.svg'
import linux from '../../assets/linux.svg'
import jwt from '../../assets/jwt.svg'
import js from '../../assets/js.svg'
import insomnia from '../../assets/insomnia.svg'
import heroku from '../../assets/heroku.svg'
import github from '../../assets/github.svg'
import django from '../../assets/django.svg'
import html from '../../assets/html-5.svg'
import css from '../../assets/css-3.svg'
import cloudinary from '../../assets/cloudinary.svg'
import chromedevtools from '../../assets/chrome-devtools.svg'
import bootstrap from '../../assets/bootstrap.svg'

export default function AnimatedCard() {
    const skills = [
        { name: 'Terminal', icon: terminal },
        { name: 'HTML', icon: html },
        { name: 'CSS', icon: css },
        { name: 'JavaScript', icon: js },
        { name: 'VSCode', icon: vscode },
        { name: 'Vite', icon: vite },
        { name: 'React', icon: react },
        { name: 'Tailwind', icon: tailwind },
        { name: 'Trello', icon: trello },
        { name: 'TablePlus', icon: tableplus },
        { name: 'Sass', icon: sass },
        { name: 'Python', icon: python },
        { name: 'SQL', icon: sql },
        { name: 'PostgreSQL', icon: postgresql },
        { name: 'NPM', icon: npm },
        { name: 'NodeJS', icon: nodejs },
        { name: 'MongoDB', icon: mongodb },
        { name: 'Material-UI', icon: materialui },
        { name: 'Bootstrap', icon: bootstrap },
        { name: 'Linux', icon: linux },
        { name: 'Ubuntu', icon: ubuntu },
        { name: 'JWT', icon: jwt },
        { name: 'Insomnia', icon: insomnia },
        { name: 'Postman', icon: postman },
        { name: 'Netlify', icon: netlify },
        { name: 'Heroku', icon: heroku },
        { name: 'GitHub', icon: github },
        { name: 'Django', icon: django },
        { name: 'Cloudinary', icon: cloudinary },
        { name: 'Chrome DevTools', icon: chromedevtools },
    ]

    return (
        <div className=" bg-[#00000036]/35 backdrop-blur-md m-5 md:m-20 justify-center rounded-xl gap-2 p-0 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7  auto-rows-[100px]  md:auto-rows-[200px]">
            {skills.map((skill, index) => (
                <CardContainer key={index} className="inter-var bg-none">
                    <CardBody className="bg-none-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6">
                        <CardItem translateZ="400" className="w-full">
                            <img src={skill.icon} alt={skill.name}
                                width="50"
                                
                                className="object-cover rounded-xl group-hover/card:shadow-xl" />
                            <CardItem
                                translateZ="50"
                                className="text-sm text-center m-auto font-bold text-slate-100 dark:text-white">
                                {skill.name}
                            </CardItem>
                        </CardItem>
                    </CardBody>
                </CardContainer>
            ))}
        </div>
    )
}
