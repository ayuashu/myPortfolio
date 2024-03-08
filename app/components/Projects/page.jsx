"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../ProjectCard";
import ProjectTag from "../ProjectTag";
import { motion, useInView } from "framer-motion";
import NavBar from "../NavBar";

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description:
          "This is my portfolio website. It is built using ReactJS, Tailwind CSS and hosted on Vercel.",
        image: "/Images/Project1.avif",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
      },
      {
        id: 2,
        title: "E-commerce Website",
        description:
          "This is a fully functional e-commerce website. It is built using ReactJS, Tailwind CSS and Firebase.",
        image: "/Images/Project2.avif",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
      },
      {
        id: 3,
        title: "Weather App",
        description:
          "This is a weather app. It is built using ReactJS and Tailwind CSS.",
        image: "/Images/Project3.avif",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
      },
      {
        id: 4,
        title: "Blockchain based Insurance System for Metaverse",
        description:
          "This is a blockchain based insurance system for metaverse. It is built using Hyperledger Fabric, ExpressJS, ReactJS and Tailwind CSS.",
        image: "/Images/Project4.avif",
        tag: ["All", "Blockchain"],
        gitUrl: "https://github.com/ayuashu/_Metasurance",
        previewUrl: "https://drive.google.com/file/d/1YhCOLxcBGya94346rk3e1PxFfT2XAy6f/view?usp=sharing",
      },
];

const Projects = () => {
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
    <main className="flex min-h-screen flex-col bg-[#121212] gap-5">
      <div>
        <NavBar />
      </div>
      <h2 className="text-center text-5xl md:text-8xl font-bold md:font-extrabold mt-16 md:mt-32 from-primary-700 via-secondary-700 to-white bg-gradient-to-r bg-clip-text text-transparent">
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
        <ProjectTag
          onClick={handleTagChange}
          name="Blockchain"
          isSelected={tag === "Blockchain"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-6 md:gap-16 mx-2 md:mx-16 mb-10 px-8 py-8">
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
    </main>
  );
};

export default Projects;