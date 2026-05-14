"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const aboutMeContent = [
  {
    title: "Hi there",
    description:
      "I’m a Computer Science student and a passionate web developer who loves building modern, interactive web applications with clean UI and strong backend logic.",
  },
  {
    title: "Developer Mindset",
    description:
      "I enjoy solving real-world problems through code. From frontend UI design to backend APIs, I focus on building scalable and user-friendly applications using the MERN stack.",
  },
  {
    title: "Cricket & Discipline",
    description:
      "Alongside coding, I am also a dedicated cricketer. Cricket has taught me discipline, patience, teamwork, and consistency — the same values I apply while writing clean and efficient code.",
  },
  {
    title: "Pressure Handling",
    description:
      "In cricket, I’ve learned to perform under pressure situations. In development, I apply the same mindset when debugging complex issues or building time-sensitive projects.",
  },
  {
    title: "What I’m Building",
    description:
      "Currently building full-stack applications using React, Next.js, Node.js, Express, and MongoDB. I’m also exploring authentication systems, APIs, and scalable architecture.",
  },
  {
    title: "Future Vision",
    description:
      "My goal is to become a high-level full-stack developer and eventually move into blockchain development, while continuing to grow in sports and personal discipline.",
  },
];

function AboutSection() {
  return (
   <section id="about" className="w-full">
      
      {/* 🔥 Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        About Me
      </h2>

      {/* Scroll Section */}
      <StickyScroll content={aboutMeContent} />

    </section>
  );
}

export default AboutSection;