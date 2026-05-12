// "use client";
// import React from "react";
// import { FloatingNav } from "./ui/floating-navbar";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

// export default function Navbar() {
//   const navItems = [
//     {
//       name: "Home",
//       link: "/",
//       icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//     {
//       name: "About",
//       link: "/about",
//       icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//     {
//       name: "Contact",
//       link: "/contact",
//       icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//   ];

//   return (
//     <div className="relative w-full">
//       <FloatingNav navItems={navItems} />
//       <DummyContent />
//     </div>
//   );
// }

// const DummyContent = () => {
//   return (
//     <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
//       <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
//       </p>
//       <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
//     </div>
//   );
// };

// // "use client";
// // import React from "react";
// // import { FloatingNav } from "./ui/floating-navbar";
// // import { IconHome, IconUser, IconMessage, IconBrandGithub } from "@tabler/icons-react";

// // export default function Navbar() {
// //   const navItems = [
// //     {
// //       name: "Home",
// //       link: "#home",
// //       icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
// //     },
// //     {
// //       name: "About",
// //       link: "#about",
// //       icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
// //     },
// //     {
// //       name: "Contact",
// //       link: "#contact",
// //       icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
// //     },
// //   ];

// //   return (
// //     <div className="relative w-full">
// //       <FloatingNav
// //         navItems={navItems}
// //         className="px-4"
// //       >
// //         {/* You can pass children if needed */}
// //       </FloatingNav>
// //     </div>
// //   );
// // }






//src/components/Navbar.tsx
// "use client";

// import React from "react";
// import { FloatingNav } from "./ui/floating-navbar";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

// // Import your sections
// import HeroSection from "./HeroSection";
// import AboutSection from "./AboutSection";
// import ProjectsSection from "./ProjectsSection";
// // import ContactSection from "./ContactSection";

// export default function NavbarWithContent() {
//   const navItems = [
//     {
//       name: "Home",
//       link: "/",
//       icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//     {
//       name: "About",
//       link: "#about",
//       icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//     {
//       name: "Contact",
//       link: "/contact",
//       icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//   ];

//   return (
//     <div className="relative w-full">
//       {/* FloatingNav with scroll-up behavior */}
//       <FloatingNav navItems={navItems} />

//       {/* Page content sections */}
//       {/* Uncomment these when you have the components ready */}
//       <HeroSection />
//       <AboutSection />
//       <ProjectsSection />
//       {/* <ContactSection /> */}

//       {/* Temporary placeholder to allow scrolling */}
//       <div className="h-[60rem] w-full bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-black dark:to-neutral-900">
//         <p className="text-center text-neutral-600 dark:text-neutral-200 mt-40 text-4xl font-bold">
//           Your content goes here
//         </p>
//       </div>
//     </div>
//   );
// }





// src/components/Navbar.tsx
// "use client";

// import React from "react";
// import { FloatingNav } from "./ui/floating-navbar";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

// export default function Navbar() {
//   const navItems = [
//     { name: "Home", link: "/", icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" /> },
//     { name: "About", link: "#about", icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" /> },
//     { name: "Contact", link: "/contact", icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" /> },
//   ];

//   return <FloatingNav navItems={navItems} />;
// }



//src/components/Navbar.tsx
"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function Navbar() {
  const navItems = [
    { name: "Home", link: "/", icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "About", link: "#about", icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Skills", link: "#skills", icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Contact", link: "/contact", icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  ];

  return <FloatingNav navItems={navItems} />;
}
