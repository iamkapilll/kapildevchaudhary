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
        B.Sc. CSIT
      </span>{" "}
      at Vedas College, Lalitpur (2022–Present). Completed +2 Science at Golden
      Gate International College, Kathmandu (2020–2022). Relevant Coursework:
      Data Structures, Operating Systems, Database Management, OOP, Software
      Engineering.
    </>
  ),
  link: "#education",
},

  {
    title: "Work Experience",
    description: (
      <>
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          AI Engineer Intern
        </span>{" "}
        at{" "}
        <span className="font-semibold text-white">
          Sagea
        </span>{" "}
        (2026). Developing AI-powered applications using Python, FastAPI, and
        modern AI/LLM technologies. Integrating AI models and APIs, building
        intelligent agentic systems, and optimizing application performance.

        <br />
        <br />

        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
          Full Stack Intern
        </span>{" "}
        at{" "}
        <span className="font-semibold text-white">
          Stratigo Collectives
        </span>
        . Assisted in developing and maintaining modern web applications using
        JavaScript and React-based technologies. Collaborated with team members
        to improve UI responsiveness and overall user experience.
      </>
    ),
    link: "#work",
  },

  {
    title: "Hackathons / Events",
    description: (
      <>
        Participated in{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400">
          AsianHack025
        </span>{" "}
        with team{" "}
        <span className="font-semibold text-white">Codeions</span>, developing
        TaxEase Nepal — a web solution to simplify Nepalese taxation processes.
        Focused on user experience and data visualization using React.js.
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
        A combination of AI/ML expertise, full-stack development skills, and real-world experience in building intelligent applications.
      </p>

      {/* ================= CORE SKILLS ================= */}
      <div className="w-full max-w-5xl mb-10">
        <BackgroundGradient>
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-white/20 bg-transparent grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* AI & Generative AI */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">AI & Generative AI</h3>
              <div className="space-y-1 text-neutral-300">
                <p>LLMs</p>
                <p>Generative AI</p>
                <p>Agentic AI</p>
                <p>AI Agents</p>
                <p>Prompt Engineering</p>
                <p>AI APIs</p>
              </div>
            </div>

            {/* Programming & Backend */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Programming & Backend</h3>
              <div className="space-y-1 text-neutral-300">
                <p>Python</p>
                <p>JavaScript (ES6+)</p>
                <p>FastAPI</p>
                <p>Node.js & Express.js</p>
                <p>REST APIs</p>
                <p>Pydantic & SQLAlchemy</p>
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Frontend</h3>
              <div className="space-y-1 text-neutral-300">
                <p>React.js</p>
                <p>Next.js</p>
                <p>HTML & CSS</p>
                <p>MERN Stack</p>
                <p>API Integration</p>
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Databases</h3>
              <div className="space-y-1 text-neutral-300">
                <p>MongoDB</p>
                <p>MySQL</p>
                <p>PostgreSQL</p>
                <p>SQLite</p>
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Tools</h3>
              <div className="space-y-1 text-neutral-300">
                <p>Git & GitHub</p>
                <p>Postman</p>
                <p>VS Code</p>
                <p>Jupyter Notebook</p>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Soft Skills</h3>
              <div className="space-y-1 text-neutral-300">
                <p>Team Leadership</p>
                <p>Team Collaboration</p>
                <p>Communication</p>
                <p>Problem Solving</p>
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