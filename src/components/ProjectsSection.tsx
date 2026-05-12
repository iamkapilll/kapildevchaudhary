// src/components/ProjectSection.tsx
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
      link: "https://prisonmanagementsystem.vercel.app/",
      image: "/images/pms.png",
    },

    {
      title: "Taxease-Nepal",
      description:
        "A Tax Management Information System for Nepal to manage taxes efficiently, automate processes, and provide insights for users and government authorities.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB"],
      link: "https://taxease-six.vercel.app/",
      image: "/images/taxease.png",
    },

    {
      title: "Next-Music",
      description:
        "A modern music learning platform where users can explore structured music courses, learn instruments, and improve their musical skills through interactive lessons and curated content.",
      techStack: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS"],
      link: "https://ecommerce-platform.vercel.app/",
      image: "/images/next-music.png",
    },

    {
      title: "Feedback Mystery App",
      description:
        "A fun and interactive feedback platform where users can send and receive anonymous messages, uncover hidden responses, and engage with a mystery-based communication experience.",
      techStack: ["Next.js", "TailwindCSS", "Framer Motion"],
      link: "https://yourfeedbackapp.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="projects"
      // className="w-full flex flex-col items-center justify-center py-20 px-4 md:px-16 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-black dark:to-neutral-900"
      className="w-full flex flex-col items-center justify-center py-20 px-4 md:px-16 bg-black/20"
    >
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Projects
      </h2>

      {/* Introduction below the title */}
      <p className="max-w-3xl text-center text-neutral-700 dark:text-neutral-300 mb-12 text-lg">
        Over the course of my learning journey, I have worked on projects
        solving real-world problems, implementing efficient solutions, and
        gaining hands-on experience with modern web technologies.
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
