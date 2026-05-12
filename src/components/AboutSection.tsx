// //src/components/AboutSection.tsx
// "use client";

// import React from "react";
// import { BackgroundGradient } from "./ui/background-gradient";
// import { HoverEffect } from "./ui/card-hover-effect"; // import HoverEffect

// export default function AboutSection() {
//   const eduWorkItems = [
//   {
//   title: "Education",
//   description: (
//     <>
//       Pursuing{" "}
//       <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
//         BSc in Computer Science and Information Technology
//       </span>{" "}
//       (2022–2026). Relevant Coursework: Data Structures, Python, Web
//       Development, AI, Theory of Computation.
//     </>
//   ),
//   link: "#education",
// },

//   {
//     title: "Work Experience",
//     description: (
//       <>
//         Worked as a{" "}
//         <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
//           Frontend Developer
//         </span>{" "}
//         at{" "}
//         <span className="font-semibold text-white">
//           Sagea
//         </span>
//         , building responsive and interactive user interfaces using modern web
//         technologies.

//         <br />
//         <br />

//         Also worked as a{" "}
//         <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
//           Full Stack Developer
//         </span>{" "}
//         at{" "}
//         <span className="font-semibold text-white">
//           Stratigo Collectives
//         </span>
//         , developing scalable web applications with both frontend and backend
//         technologies.
//       </>
//     ),
//     link: "#work",
//   },

//   {
//     title: "Hackathons / Events",
//     description: (
//       <>
//         Recently participated in{" "}
//         <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400">
//           AsianHack025
//         </span>{" "}
//         organized by Asian School of Management and Technology. Gained hands-on
//         experience in project planning, collaboration, and problem-solving.
//       </>
//     ),
//     link: "#hackathon",
//   },
// ];


//   return (
//    <section
//          id="skills"
//          className="relative w-full flex flex-col items-center justify-center py-20 px-4 md:px-16 bg-black/30"
//        >
//          {/* Title */}
//          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
//            Skills & Experience
//          </h2>
   
//          {/* Subtitle */}
//          <p className="max-w-2xl text-center text-neutral-400 mb-12">
//            A combination of technical skills, real-world experience, and continuous learning in modern web development.
//          </p>
   
//          {/* ================= CORE SKILLS ================= */}
//          <div className="w-full max-w-5xl mb-10">
//            <BackgroundGradient>
//              <div className="p-6 rounded-2xl border border-neutral-200 dark:border-white/20 bg-transparent grid grid-cols-1 md:grid-cols-3 gap-6">
   
//                {/* Frontend */}
//                <div>
//                  <h3 className="text-xl font-semibold text-white mb-3">Frontend</h3>
//                  <div className="space-y-1 text-neutral-300">
//                    <p>React.js</p>
//                    <p>Next.js</p>
//                    <p>TypeScript</p>
//                    <p>TailwindCSS</p>
//                    <p>Framer Motion</p>
//                  </div>
//                </div>
   
//                {/* Backend */}
//                <div>
//                  <h3 className="text-xl font-semibold text-white mb-3">Backend</h3>
//                  <div className="space-y-1 text-neutral-300">
//                    <p>Node.js</p>
//                    <p>Express.js</p>
//                    <p>MongoDB</p>
//                    <p>REST APIs</p>
//                  </div>
//                </div>
   
//                {/* Tools */}
//                <div>
//                  <h3 className="text-xl font-semibold text-white mb-3">Tools</h3>
//                  <div className="space-y-1 text-neutral-300">
//                    <p>Git & GitHub</p>
//                    <p>Postman</p>
//                    <p>VS Code</p>
//                    <p>Vercel</p>
//                  </div>
//                </div>
   
//              </div>
//            </BackgroundGradient>
//          </div>
   
//          {/* ================= PROFILE SECTION ================= */}
//          <div className="w-full max-w-5xl">
//            <HoverEffect
//              items={eduWorkItems}
//              className="grid grid-cols-1 md:grid-cols-3 gap-6"
//            />
//          </div>
//        </section>
//   );
// }





// /////stars wala
// // "use client";

// // import React from "react";
// // import { BackgroundGradient } from "./ui/background-gradient";
// // import { HoverEffect } from "./ui/card-hover-effect";
// // import { StarsBackground } from "./ui/stars-background";

// // export default function AboutSection() {
// //   const eduWorkItems = [
// //     {
// //       title: "Education",
// //       description:
// //         "BSc in Computer Science and Information Technology (2022-2026). Relevant Coursework: Data Structures, Python, Web Development, AI, Theory of Computation.",
// //       link: "#education",
// //     },
// //     {
// //       title: "Work Experience",
// //       description: "No experience for now",
// //       link: "#work",
// //     },
// //     {
// //       title: "Hackathons / Events",
// //       description: (
// //         <>
// //           Recently participated in{" "}
// //           <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400">
// //             AsianHack025
// //           </span>{" "}
// //           organized by Asian School of Management and Technology. Gained hands-on experience in project planning, collaboration, and problem-solving.
// //         </>
// //       ),
// //       link: "#hackathon",
// //     },
// //   ];

// //   return (
// //     <section
// //       id="about"
// //       className="relative w-full flex flex-col items-center justify-center py-20 px-4 md:px-16 overflow-hidden"
// //     >
// //       {/* Stars background */}
// //       <StarsBackground className="absolute inset-0 -z-10" />

// //       {/* Section Title */}
// //       <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
// //         About Me
// //       </h2>

// //       {/* Bio */}
// //       <p className="max-w-2xl text-center text-neutral-700 dark:text-neutral-300 mb-16">
// //         Passionate developer with expertise in building scalable web applications
// //         and creating innovative solutions.
// //       </p>

// //       {/* First row: Skills */}
// //       <div className="w-full max-w-4xl mb-6">
// //         <BackgroundGradient>
// //           <div className="p-6 rounded-2xl border border-neutral-200 dark:border-white/20 bg-transparent flex flex-col md:flex-row gap-8">
// //             {/* Frontend */}
// //             <div className="flex-1">
// //               <h3 className="text-xl font-semibold text-white mb-2">Frontend</h3>
// //               <span className="text-neutral-200 block">React</span>
// //               <span className="text-neutral-200 block">JavaScript</span>
// //               <span className="text-neutral-200 block">TypeScript</span>
// //               <span className="text-neutral-200 block">TailwindCSS</span>
// //             </div>

// //             {/* Backend */}
// //             <div className="flex-1">
// //               <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
// //               <span className="text-neutral-200 block">Node.js</span>
// //               <span className="text-neutral-200 block">Express.js</span>
// //               <span className="text-neutral-200 block">MongoDB</span>
// //             </div>
// //           </div>
// //         </BackgroundGradient>
// //       </div>

// //       {/* Second row: Cards */}
// //       <div className="w-full max-w-4xl mb-6">
// //         <HoverEffect
// //           items={eduWorkItems}
// //           className="grid grid-cols-1 md:grid-cols-3 gap-6"
// //         />
// //       </div>
// //     </section>
// //   );
// // }










// // "use client";

// // import React from "react";
// // import { BackgroundGradient } from "./ui/background-gradient";
// // import { HoverEffect } from "./ui/card-hover-effect"; // import hover effect

// // export default function AboutSection() {
// //   const eduWorkItems = [
// //     {
// //       title: "Education",
// //       description:
// //         "BSc in Computer Science and Information Technology (2022-2026). Relevant Coursework: Data Structures, Python, Web Development, AI, Theory of Computation.",
// //       link: "#education",
// //     },
// //     {
// //       title: "Work Experience",
// //       description: "No experience for now",
// //       link: "#work",
// //     },
// //   ];

// //   return (
// //     <section
// //       id="about"
// //       className="relative w-full flex flex-col items-center justify-center py-20 px-4 md:px-16 bg-gradient-to-b from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-black"
// //     >
// //       {/* Section Title */}
// //       <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
// //         About Me
// //       </h2>

// //       {/* Bio */}
// //       <p className="max-w-2xl text-center text-neutral-700 dark:text-neutral-300 mb-16">
// //         Passionate developer with expertise in building scalable web applications
// //         and creating innovative solutions.
// //       </p>

// //       {/* First row: Single card for Skills */}
// //       <div className="w-full max-w-4xl mb-6">
// //         <BackgroundGradient>
// //           <div className="p-6 rounded-2xl border border-neutral-200 dark:border-white/20 bg-transparent flex flex-col md:flex-row gap-8">
// //             {/* Frontend Skills */}
// //             <div className="flex-1">
// //               <h3 className="text-xl font-semibold text-white mb-2">Frontend</h3>
// //               <span className="text-neutral-200 block">React</span>
// //               <span className="text-neutral-200 block">JavaScript</span>
// //               <span className="text-neutral-200 block">TypeScript</span>
// //               <span className="text-neutral-200 block">TailwindCSS</span>
// //             </div>

// //             {/* Backend Skills */}
// //             <div className="flex-1">
// //               <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
// //               <span className="text-neutral-200 block">Node.js</span>
// //               <span className="text-neutral-200 block">Express.js</span>
// //               <span className="text-neutral-200 block">MongoDB</span>
// //             </div>
// //           </div>
// //         </BackgroundGradient>
// //       </div>

// //       {/* Second row: Education & Work Experience using HoverEffect */}
// //       <div className="w-full max-w-4xl mb-6">
       
// //           <HoverEffect items={eduWorkItems} />
       
// //       </div>
// //     </section>
// //   );
// // }





// // "use client";

// // import React from "react";
// // import { BackgroundGradient } from "./ui/background-gradient";
// // import { HoverEffect } from "./ui/card-hover-effect"; // import hover effect

// // export default function AboutSection() {
// //   const eduWorkItems = [
// //     {
// //       title: "Education",
// //       description:
// //         "BSc in Computer Science and Information Technology (2022-2026). Relevant Coursework: Data Structures, Python, Web Development, AI, Theory of Computation.",
// //       link: "#education",
// //     },
// //     {
// //       title: "Work Experience",
// //       description: "No experience for now",
// //       link: "#work",
// //     },
// //   ];

// //   return (
// //     <section
// //       id="about"
// //       className="relative w-full flex flex-col items-center justify-center py-20 px-4 md:px-16 bg-gradient-to-b from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-black"
// //     >
// //       {/* Section Title */}
// //       <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
// //         About Me
// //       </h2>

// //       {/* Bio */}
// //       <p className="max-w-2xl text-center text-neutral-700 dark:text-neutral-300 mb-16">
// //         Passionate developer with expertise in building scalable web applications
// //         and creating innovative solutions.
// //       </p>

// //       {/* First row: Single card for Skills */}
// //       <div className="w-full max-w-4xl mb-6">
// //         <BackgroundGradient>
// //           <div className="p-6 rounded-2xl border border-neutral-200 dark:border-white/20 bg-transparent flex flex-col md:flex-row gap-8">
// //             {/* Frontend Skills */}
// //             <div className="flex-1">
// //               <h3 className="text-xl font-semibold text-white mb-2">Frontend</h3>
// //               <span className="text-neutral-200 block">React</span>
// //               <span className="text-neutral-200 block">JavaScript</span>
// //               <span className="text-neutral-200 block">TypeScript</span>
// //               <span className="text-neutral-200 block">TailwindCSS</span>
// //             </div>

// //             {/* Backend Skills */}
// //             <div className="flex-1">
// //               <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
// //               <span className="text-neutral-200 block">Node.js</span>
// //               <span className="text-neutral-200 block">Express.js</span>
// //               <span className="text-neutral-200 block">MongoDB</span>
// //             </div>
// //           </div>
// //         </BackgroundGradient>
// //       </div>

// //       {/* Second row: Education & Work Experience using HoverEffect with same width */}
// //       <div className="w-full max-w-4xl mb-6">
// //         <div className="w-full">
// //           <HoverEffect items={eduWorkItems} />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }







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