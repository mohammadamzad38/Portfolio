import React, { Children } from "react";
import { motion } from "framer-motion";

import image1 from "../assets/image/image01.jpg";
import image2 from "../assets/image/image02.jpg";
import image3 from "../assets/image/image03.jpg";
import image4 from "../assets/image/image04.jpg";
import image5 from "../assets/image/image05.jpg";

const projectsData = [
  {
    image: image1,
    title: "Find Life Partner",
    description:
      "Would you like recommendations based on your specific needs? 🚀",
    technologies: ["HTML", "CSS", "Tailwind", "React", "Next.js", "Javascript"],
  },
  {
    image: image2,
    title: "Find Life Partner",
    description:
      "Would you like recommendations based on your specific needs? 🚀",
    technologies: ["HTML", "CSS", "Tailwind", "React", "Next.js", "Javascript"],
  },
  {
    image: image3,
    title: "Find Life Partner",
    description:
      "Would you like recommendations based on your specific needs? 🚀",
    technologies: ["HTML", "CSS", "Tailwind", "React", "Next.js", "Javascript"],
  },
  {
    image: image4,
    title: "Find Life Partner",
    description:
      "Would you like recommendations based on your specific needs? 🚀",
    technologies: ["HTML", "CSS", "Tailwind", "React", "Next.js", "Javascript"],
  },
  {
    image: image5,
    title: "Find Life Partner",
    description:
      "Would you like recommendations based on your specific needs? 🚀",
    technologies: ["HTML", "CSS", "Tailwind", "React", "Next.js", "Javascript"],
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 20, y: 400}}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: 0.8}}
    >
      {children}
    </motion.div>
  );
};

const Projectcard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">Projects</h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <Projectcard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
