"use client";
import React,{useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>React.js</li>
                <li>MongoDB</li>
                <li>Javascript</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Fullstack Web-Dev Course - by Angela Yu</li>
                <li>B.Tech - Computer Science Engineering, IIT Ropar</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending,startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(()=>{
            setTab(id);
        });
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.jpg" width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
Hey there! 👋 I'm currently a pre-final year student pursuing a Bachelor's degree in Computer Science and Engineering (CSE). I've always had a passion for building things with technology.

🌐 Web Development Enthusiast: I enjoy creating websites and web applications that are not only functional but also visually appealing. From crafting user-friendly frontends to handling server-side logic, I find the world of web development incredibly exciting.

💡 Fullstack Explorer: I'm not just limited to the front-end or back-end; I'm a fullstack enthusiast. I relish the challenge of working on both ends of the spectrum, from designing user interfaces to optimizing server performance.

🚀 Aspiring Software Developer: My career goal is to become a Software Development Engineer (SDE). I'm constantly honing my coding skills and staying up-to-date with the latest technologies to achieve this aim.

Feel free to explore my portfolio and projects to get a glimpse of my work. If you share a passion for tech and development, let's connect and collaborate on some exciting projects together!
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={()=>handleTabChange("skills")} active={tab==="skills"}>
                     Skills
                    </TabButton>
                    <TabButton selectTab={()=>handleTabChange("education")} active={tab==="education"}>
                     {" "}Education{" "}
                    </TabButton>
                    {/* <TabButton selectTab={()=>handleTabChange("skills")} active={tab==="skills"}>
                     Skills
                    </TabButton> */}
                    
                </div>

                <div className='mt-8'>
                    {TAB_DATA.find((t)=>t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection