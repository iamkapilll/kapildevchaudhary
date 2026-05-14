//src/components/SkillsSection.tsx
"use client";

import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { HoverEffect } from "./ui/card-hover-effect";

export default function SkillsSection() {
const profileItems = [
  {
  title: "Education",
  description: (
    <>
      Pursuing{" "}
      <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
        BSc in Computer Science and Information Technology
      </span>{" "}
      (2022–2026). Relevant Coursework: Data Structures, Python, Web
      Development, AI, Theory of Computation.
    </>
  ),
  link: "#education",
},

  {
    title: "Work Experience",
    description: (
      <>
        Worked as a{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Frontend Developer
        </span>{" "}
        at{" "}
        <span className="font-semibold text-white">
          Sagea
        </span>
        , building responsive and interactive user interfaces using modern web
        technologies.

        <br />
        <br />

        Also worked as a{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
          Full Stack Developer
        </span>{" "}
        at{" "}
        <span className="font-semibold text-white">
          Stratigo Collectives
        </span>
        , developing scalable web applications with both frontend and backend
        technologies.
      </>
    ),
    link: "#work",
  },

  {
    title: "Hackathons / Events",
    description: (
      <>
        Recently participated in{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400">
          AsianHack025
        </span>{" "}
        organized by Asian School of Management and Technology. Gained hands-on
        experience in project planning, collaboration, and problem-solving.
      </>
    ),
    link: "#hackathon",
  },
];

  return (
    <section
      id="skills"
      className="relative w-full flex flex-col items-center justify-center py-20 px-4 md:px-16 bg-black/30"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
        Skills & Experience
      </h2>

      {/* Subtitle */}
      <p className="max-w-2xl text-center text-neutral-400 mb-12">
        A combination of technical skills, real-world experience, and continuous learning in modern web development.
      </p>

      {/* ================= CORE SKILLS ================= */}
      <div className="w-full max-w-5xl mb-10">
        <BackgroundGradient>
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-white/20 bg-transparent grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Frontend */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Frontend</h3>
              <div className="space-y-1 text-neutral-300">
                <p>React.js</p>
                <p>Next.js</p>
                <p>TypeScript</p>
                <p>TailwindCSS</p>
                <p>Framer Motion</p>
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Backend</h3>
              <div className="space-y-1 text-neutral-300">
                <p>Node.js</p>
                <p>Express.js</p>
                <p>MongoDB</p>
                <p>REST APIs</p>
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Tools</h3>
              <div className="space-y-1 text-neutral-300">
                <p>Git & GitHub</p>
                <p>Postman</p>
                <p>VS Code</p>
                <p>Vercel</p>
              </div>
            </div>

          </div>
        </BackgroundGradient>
      </div>

      {/* ================= PROFILE SECTION ================= */}
      <div className="w-full max-w-5xl">
        <HoverEffect
          items={profileItems}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        />
      </div>
    </section>
  );
}