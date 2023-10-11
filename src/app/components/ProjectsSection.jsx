// import React from 'react'
// import ProjectCard from './ProjectCard'

// const projectData = [
//     {
//         id:1,
//         title: "Next.js/React Portfolio Website",
//         description: "Project 1 description",
//         image: "/images/projects/1.png",
//         tag: ["All","Web"],
//         gitUrl: "/",
//         previewUrl: "/",
//     },
//     {
//         id:2,
//         title: "CODESPHERE",
//         description: "Project 2 description",
//         image: "/images/projects/2.png",
//         tag: ["All","Web"],
//         gitUrl: "/",
//         previewUrl: "/",
//     },
//     {
//         id:3,
//         title: "NOTESPHERE",
//         description: "Project 3 description",
//         image: "/images/projects/3.png",
//         tag: ["All","Web"],
//         gitUrl: "/",
//         previewUrl: "/",
//     }
// ]

// const ProjectsSection = () => {
//   return (
//     <>
//         <h2>My Projects</h2>
//         <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
//             <button className='rounded-full border-2 border-purple-400 px-6 py-3 text-xl cursor-pointer'>All</button>
//             <button className='rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer'>Web</button>
//         </div>
//         <div>
//             {projectData.map((project)=>
//                 <ProjectCard
//                  key={project.id}
//                  title={project.title}
//                  description={project.description}
//                  imgUrl={project.image}
//                  gitUrl={project.gitUrl}
//                  previewUrl={project.previewUrl}
//                 >
//             </ProjectCard>)}
//         </div>
//     </>
//   )
// }

// export default ProjectsSection

"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js/React Portfolio Website",
    description: "Explore my professional journey on my Next.js/React portfolio website. Experience my work, skills, and passion through a sleek and user-friendly interface.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Div16s/MY_PORTFOLIO",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "CODESPHERE",
    description: "CodeSphere: Your one-stop coding hub! Register/Login, solve problems, submit code, and practice with our built-in IDE. Track your progress with submission history. Elevate your coding skills effortlessly.",
    image: "/images/projects/csp-bg.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Div16s/ONLINE-JUDGE",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "NOTESPHERE",
    description: "Unlock the potential of your notes! Register/Login, and experience the freedom to create, edit, and delete notes effortlessly. Tailor your profile with a personal picture – all your notes, all at your fingertips.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Div16s/NOTE_TAKING_APP",
    previewUrl: "https://notesphere-flame.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
