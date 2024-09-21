import React, {useEffect, useState} from "react";
import {motion, Variants} from "framer-motion";

const Home: React.FC = () => {
    return (
        <div>
            <div className="fixed w-screen h-screen -z-40 bg-gradient-to-br from-stone-800 to-black"/> {/*background*/}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-stone-300 px-8 py-8 w-full h-full flex flex-col justify-center items-center"> {/*content*/}

                    <Header/>
                <hr className="mx-auto w-[75rem] border-1 border-stone-700 mb-10"/>
                <div className="flex flex-col justify-start items-start w-[75rem] m-auto p-4 gap-8">
                    <h2 className="text-3xl font-semibold text-left tracking-wide">GAMES</h2>
                    <div className="flex flex-row justify-between items-stretch w-full gap-8">
                        <ProjectCard
                            image="/project_farmers_market_header.png"
                            title="Farmer's Market"
                            description="A 3D competitive farming game. Buy seeds, then plant, harvest,
                                        and sell your crops, all while sabotaging other players!
                                        Created with C++, OpenGL, and WinSock using Client/Server architecture with TCP."
                            link="https://github.com/ucsd-cse125-sp22/cse125-sp22-group3"
                        />
                        <ProjectCard
                            image="/project_tank_header.png"
                            title="Tank!"
                            description="A 2D Top-Down Multiplayer Tank Shooter. Fight other tanks in a free for all, and
                            accumulate points to win!
                            Created with Rust using Bevy and the QUIC network protocol."
                            link="https://github.com/jgetzel/tank-rpg"
                        />
                    </div>
                </div>
                <hr className="mx-auto w-[75rem] border-1 border-stone-700 my-16"/>
                <div className="flex flex-col justify-start items-start w-[75rem] m-auto p-4 gap-8 mb-52">
                    <h2 className="text-3xl font-semibold text-left tracking-wide mb-4">EXPERIENCE</h2>
                    <ExperienceCard
                        title={"Data Engineer @ Proof.com"}
                        date_range={"MAY 2023 - PRESENT"}
                        description={
                            ["Created the data models and schemas for our data warehouse, " +
                            "and continuously developed and maintained them to support growing data needs",
                            "Developed and maintained ETL pipelines in Python and PostgreSQL to ingest data from " +
                            "various sources into our data warehouse",
                            "Employed Python, NLP, and OpenAI APIs to pioneer advanced document classification within the company, " +
                            "enriching internal data availability and empowering data-driven business strategies"]
                        }
                    />
                    <ExperienceCard
                        title={"Software Engineer @ Amazon"}
                        date_range={"JUNE 2022 - MARCH 2023"}
                        description={["Using Typescript and React, designed and implemented a new Frontend " +
                                        "for our service which is responsible for launch managers and internal employees " +
                                        "to view and configure all properties for all stores within Amazon Grocery",
                                    "Using python, Implemented functionality to update and sync data between several services " +
                                        "in Amazon with one call to Backend so users could update hundreds of stores at a time, " +
                                        "saving days of work per bulk store update"]}
                    />
                    <ExperienceCard
                        title={"Software Engineer Intern @ Amazon"}
                        date_range={"JUNE 2021 - SEPTEMBER 2021"}
                        description={["Worked on UI improvements for tool responsible for " +
                                        "automating registration of new stores and fulfillment centers within Amazon Grocery " +
                                        "using Typescript and React.",
                            "Increased capabilities of interface to handle the on-boarding of more than 10,000 stores than previously capable."
                        ]}
                    />
                    <ExperienceCard
                        title={"Computer Science Tutor @ UCSD"}
                        date_range={"JANUARY 2021 - JUNE 2021"}
                        description={["Responsible for tutoring students regarding Object-Oriented Programming, Java, " +
                                        "and general computer science concepts.",
                                        "Graded student assignments written in Java, checking code correctness and style requirements."]
                        }
                    />
                    <ExperienceCard
                        title={"Computer Science Instructor @ iD Tech"}
                        date_range={"June 2020 - April 2021"}
                        description={["Crafted and instructed a general curriculum for students of all skill levels regarding programming " +
                            "in Java, C++, and computer science concepts such as Object-Oriented Programming",
                            "Crafted lesson plans for individual students, and interfaced with clients over plan structure, " +
                            "class content, and post-session reports."]
                        }
                    />
                </div>
            </motion.div>
        </div>
    );
}

const fadeInUp: Variants = {
    hidden: {opacity: 0, y: 100},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.75,
            duration: 1.2,
            ease: "backOut",
        }
    }
}

const Header: React.FC = () => {
    return (
        <div className="flex flex-col justify-start items-start w-[55rem] p-8">
            <div className="flex flex-row justify-center items-start">
                <h1 className="text-[12rem]/[14.4rem] font-semibold -mr-4
                        bg-gradient-to-r from-stone-400 to-stone-300
                        text-transparent bg-clip-text">
                    J
                </h1>
                <div className="flex flex-col justify-start items-start max-w-fit mx-auto p-4">
                    <h1 className="text-8xl font-bold text-left py-4
                            bg-gradient-to-r from-stone-300 to-stone-600
                            text-transparent bg-clip-text tracking-tight
                        ">AKOB GETZEL</h1>
                    <Subheader/>
                </div>
            </div>
            <Bio/>
            <ResumeButton/>
        </div>
    );
}

const Subheader: React.FC = () => {
    return (
        <div id="subheader" className="flex justify-between items-center pl-4 w-full">
            <SocialLinks/>
            <p className="text-2xl font-jetbrains">
                <Typewriter text={"/// SOFTWARE ENGINEER"}
                            speed={100} startDelay={1200}/>
                <span className="text-white blinking-cursor">|</span>
            </p>
        </div>
    )
}

const SocialLinks: React.FC = () => {
    return (
        <div id="socials-row" className="flex justify-start items-center gap-3">
            <a href="https://github.com/jgetzel" target="_blank" rel="noreferrer" className="hover:rotate-12 hover:scale-110 duration-200">
                <img src="https://img.icons8.com/doodle/40/000000/github.png"
                     alt="github logo"/>
            </a>
            <a href="https://www.linkedin.com/in/jakobgetzel/" target="_blank" rel="noreferrer" className="hover:rotate-12 hover:scale-110 duration-200">
                <img src="https://img.icons8.com/doodle/40/000000/linkedin.png"
                     alt="linkedIn logo"/>
            </a>
            <a href="mailto:jakobgetzel@gmail.com" target="_blank" rel="noreferrer" className="hover:rotate-12 hover:scale-110 duration-200">
                <img src="https://img.icons8.com/doodle/40/000000/gmail.png" alt="gmail logo"/>
            </a>
        </div>
    );
}

const Bio: React.FC = () => {
    return (
        <div className="text-left leading-loose tracking-wide">
            <p className="py-4">
                Hi! I'm Jakob Getzel, an Ex-Amazon Software Engineer
                with a passion for building high-quality software all across the stack.
                I graduated from UC San Diego with a B.S. in Computer Science, and I've been developing software
                professionally for 2+ years,
                working on Frontend, Backend, Cloud Infrastructure, and Data Engineering.
            </p>
            <p className="py-4">
                I am also an independent game developer and musician! I've worked on a number of projects in
                Rust, C++, and C#/Unity.
            </p>
        </div>
    );
}

const ResumeButton: React.FC = () => {
    return (
        <div id="resume" className="w-full flex flex-row justify-end items-center my-2">
            {/*pdf link resume here*/}
            <a href="/JakobGetzeResume_09_24.pdf" className="hover:rotate-1 hover:scale-105 duration-200"
               target="_blank" rel="noreferrer">
                <button className="bg-gradient-to-r from-stone-800 to-stone-700 shadow-lg
                                                hover:from-stone-700 hover:to-stone-600 hover:duration-500
                            text-stone-200 py-2 px-6 rounded-lg font-bold">Résumé
                </button>
            </a>
        </div>
    );
}

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    const {image, title, description, link} = props;
    return (
        <div className="flex flex-col justify-start items-start w-1/2
                                        rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] shadow-xl
                                        bg-stone-900">
            <div className="relative w-full h-64">
                <img src={image} alt="placeholder"
                     className="w-full h-full object-cover rounded-t-lg"/>
                <a className="absolute bottom-4 right-4 flex flex-row justify-center items-center"
                     href={link} target="_blank" rel="noreferrer">
                    <button className="bg-gradient-to-r from-stone-800 to-stone-700 shadow-lg
                                                        hover:from-stone-700 hover:to-stone-600
                                                        hover:rotate-1 hover:scale-105 duration-200
                                                        flex flex-row justify-center items-center
                                                        text-stone-200 py-2 pr-6 pl-4 rounded-lg font-bold">
                        <img src="https://img.icons8.com/doodle/40/000000/github.png"
                             className="mr-4"
                             alt="github logo"/>
                        View Project
                    </button>
                </a>
            </div>
            <div className="flex flex-col justify-start items-start p-4">
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-xl font-extrabold text-left tracking-wider">{title}</h3>
                </div>
                <hr className="w-full border-1 border-stone-700 my-2"/>
                <p className="text-left leading-relaxed tracking-wide">
                    {description}
                </p>
            </div>
        </div>
    )
}

interface ExperienceCardProps {
    title: string;
    date_range: string;
    description: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
    const {title, date_range, description} = props;
    return (
        <div className="flex flex-col justify-start items-start w-full leading-relaxed tracking-wide
                                    bg-gradient-to-r from-stone-700 to-stone-900
                                    drop-shadow-[0_25px_25px_rgba(0,0,0,0.6)]
                                    rounded-2xl p-6">
            <div className="flex flex-row justify-between items-center w-full">
                <h3 className="text-xl font-bold text-left">{title}</h3>
                <h4 className="text font-semibold text-left">{date_range}</h4>
            </div>
            <ul className="mx-8 my-4 list-disc text-left  tracking-wide">
                {description.map((desc, i) => {
                    return <li key={i}>{desc}</li>
                })}
            </ul>
        </div>
    )
}

interface TypewriterProps {
    text: string;
    speed?: number;
    startDelay?: number;
    className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100, startDelay = 0, className }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        setDisplayedText('');
        const timeout = setTimeout(() => {
            let index = 0;
            const typeCharacter = () => {
                setDisplayedText((prev) => prev + text[index]);
                index++;
                if (index < text.length - 1) {
                    setTimeout(typeCharacter, speed);
                }
            };
            typeCharacter();
        }, startDelay);

        return () => clearTimeout(timeout);
    }, [text, speed, startDelay]);

    return <span className={className}>{displayedText}</span>;
}

export default Home;