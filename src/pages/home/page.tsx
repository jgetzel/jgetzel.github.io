import React from "react";

const Home: React.FC = () => {
    return (
        <div>
            <div className="absolute w-screen h-screen -z-40 bg-gradient-to-br from-stone-800 to-black"/> {/*background*/}
            <div className="text-stone-300 px-8 py-8 w-full h-full flex flex-col justify-center items-center"> {/*content*/}
                <Header/>
                <hr className="mx-auto w-2/5 border-1 border-stone-700 mb-10"/>
                More content to come
            </div>
        </div>
    );
}

const Header: React.FC = () => {
    return  (
        <div className="flex flex-col justify-start items-start w-[55rem] p-8">
            <div className="flex flex-row justify-center items-start">
                <h1 className="text-[12rem]/[14.4rem] font-semibold -mr-4
                        bg-gradient-to-t from-white to-stone-500
                        text-transparent bg-clip-text">
                    J
                </h1>
                <div className="flex flex-col justify-start items-start max-w-fit mx-auto p-4">
                    <h1 className="text-8xl font-bold text-left py-4
                            bg-gradient-to-t from-stone-300 to-stone-500
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
            <p className="text-2xl tracking-tight">SOFTWARE ENGINEER</p>
        </div>
    )
}

const SocialLinks: React.FC = () => {
    return (
        <div id="socials-row" className="flex justify-start items-center gap-3">
            <a href="https://github.com/jgetzel" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/doodle/40/000000/github.png"
                     alt="github logo"/>
            </a>
            <a href="https://www.linkedin.com/in/jakobgetzel/" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/doodle/40/000000/linkedin.png"
                     alt="linkedIn logo"/>
            </a>
            <a href="mailto:jakobgetzel@gmail.com" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/doodle/40/000000/gmail.png" alt="gmail logo"/>
            </a>
        </div>
    );
}

const Bio: React.FC = () => {
    return (
        <div className="text-left leading-loose tracking-wide">
            <p className="py-4">
                Hi! I'm Jakob, an Ex-Amazon Software Engineer
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
            <a href="/JakobGetzeResume_09_24.pdf"
               target="_blank" rel="noreferrer">
                <button className="bg-gradient-to-r from-stone-800 to-stone-700
                                                hover:from-stone-700 hover:to-stone-600 hover:duration-500
                            text-stone-200 py-2 px-6 rounded-lg font-bold">Resume
                </button>
            </a>
        </div>
    );
}

export default Home;