//src/components/ProjectSection.tsx
"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function ProjectsSection() {
  const projects = [
  {
    title: "Prison Management System",
    description:
      "A system that enhances efficiency and security within correctional facilities by automating tasks, managing inmate information, and improving overall operations.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1543536833-6d65fcc64f66?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // optional
  },
  {
    title: "Taxease-Nepal",
    description:
      "A Tax Management Information System for Nepal to manage taxes efficiently, automate processes, and provide insights for users and government authorities.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "#",
    image:
      "https://plus.unsplash.com/premium_photo-1679923913530-16c91821a213?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // optional
  },
];


  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center justify-center py-20 px-4 md:px-16 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-black dark:to-neutral-900"
    >
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Projects
      </h2>

      {/* Introduction below the title */}
      <p className="max-w-3xl text-center text-neutral-700 dark:text-neutral-300 mb-12 text-lg">
        Over the course of my learning journey, I have worked on projects solving
        real-world problems, implementing efficient solutions, and gaining hands-on
        experience with modern web technologies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <CardContainer key={project.title} className="flex justify-center">
            <CardBody className="bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2] border border-black/[0.1] w-full sm:w-[28rem] h-auto rounded-xl p-6">
              
              {/* Title */}
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>

              {/* Description */}
              <CardItem
                as="p"
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>

              {/* Tech Stack */}
              <CardItem translateZ={70} className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold px-2 py-1 bg-black text-white rounded-lg dark:bg-white dark:text-black"
                  >
                    {tech}
                  </span>
                ))}
              </CardItem>

              {/* Image */}
              {project.image && (
                <CardItem
                  as="img"
                  src={project.image}
                  alt={project.title}
                  translateZ={100}
                  className="h-60 w-full object-cover rounded-xl mt-4 group-hover/card:shadow-xl"
                />
              )}

              {/* Button */}
              <div className="flex justify-end items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.link}
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  View Project →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
