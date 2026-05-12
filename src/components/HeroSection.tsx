// "use client";

// import Link from "next/link";
// import { Spotlight } from "./ui/Spotlight";

// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="relative h-auto md:h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden py-10 md:py-0 px-4"
//     >
//       {/* Spotlight animated background */}
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//         // style={{ animation: "spotlight 2s ease 0.75s 1 forwards" }}
//       />

//       {/* Hero content */}
//       <div className="relative z-10 text-center max-w-4xl">
//         <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
//           Hi, I'm Kapil Dev Chaudhary
//         </h1>

//         <p className="mt-4 md:mt-6 text-base md:text-lg text-neutral-300 mx-auto max-w-lg">
//           A passionate web developer and problem solver. I create interactive web applications, 
//           build creative projects, and love turning ideas into reality. Skilled in web technologies 
//           and always learning new things to level up.
//         </p>

//         <div className="mt-6 md:mt-8">
//           <Link href="/courses">
//             {/* Add Button here later */}
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


//original:1
//src/components/HeroSection.tsx
// "use client";

// import Link from "next/link";
// import { Spotlight } from "./ui/Spotlight";
// import { Button } from "./ui/moving-border";

// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="relative h-auto md:h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden py-10 md:py-0 px-4"
//     >
//       {/* Spotlight animated background */}
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />

//       {/* Hero content */}
//       <div className="relative z-10 text-center max-w-4xl">
//         <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
//           Hi, I'm Kapil Dev Chaudhary
//         </h1>
        

//         <p className="mt-4 md:mt-6 text-base md:text-lg text-neutral-300 mx-auto max-w-lg">
//           A passionate web developer and problem solver. I create interactive web applications, 
//           build creative projects, and love turning ideas into reality. Skilled in web technologies 
//           and always learning new things to level up.
//         </p>

//         <div className="mt-6 md:mt-8">
//           <Link href="#projects">
//             <Button
//               borderRadius="1.75rem"
//               className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 px-6 py-3 text-sm md:text-base"
//             >
//               View Projects
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }




//original:2
"use client";

import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-auto md:h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden py-10 md:py-0 px-4 bg-black/30"
    >
      {/* Spotlight animated background */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Hi, I'm Kapil Dev Chaudhary
        </h1>
        

        <p className="mt-4 md:mt-6 text-base md:text-lg text-neutral-300 mx-auto max-w-lg">
          A passionate web developer and problem solver. I create interactive web applications, 
          build creative projects, and love turning ideas into reality. Skilled in web technologies 
          and always learning new things to level up.
        </p>

        <div className="mt-6 md:mt-8">
          <Link href="#projects">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 px-6 py-3 text-sm md:text-base"
            >
              View Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}








//1st
// "use client";

// import Link from "next/link";
// import { Spotlight } from "./ui/Spotlight";
// import { Button } from "./ui/moving-border";
// import {
//   TextRevealCard,
//   TextRevealCardTitle,
//   TextRevealCardDescription,
// } from "./ui/text-reveal-card";

// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="relative h-auto md:h-[50rem] w-full flex flex-col items-center justify-center overflow-hidden py-10 md:py-0 px-4"
//     >
//       {/* Spotlight animated background */}
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />

//       {/* Hero content */}
//       <div className="relative z-10 text-center max-w-4xl flex flex-col items-center">
//         <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
//           Hi, I'm Kapil Dev Chaudhary
//         </h1>

//         <p className="mt-4 md:mt-6 text-base md:text-lg text-neutral-300 mx-auto max-w-lg">
//           A passionate web developer and problem solver. I create interactive web applications, 
//           build creative projects, and love turning ideas into reality. Skilled in web technologies 
//           and always learning new things to level up.
//         </p>

//         <div className="mt-6 md:mt-8">
//           <Link href="#projects">
//             <Button
//               borderRadius="1.75rem"
//               className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 px-6 py-3 text-sm md:text-base"
//             >
//               View Projects
//             </Button>
//           </Link>
//         </div>

//         {/* Text Reveal Card */}
//         <div className="mt-10 w-full flex justify-center">
//           <TextRevealCard
//             text="You know the business"
//             revealText="I know the chemistry"
//           >
//             <TextRevealCardTitle>
//               Sometimes, you just need to see it.
//             </TextRevealCardTitle>
//             <TextRevealCardDescription>
//               Hover over the card to reveal the hidden text.
//             </TextRevealCardDescription>
//           </TextRevealCard>
//         </div>
//       </div>
//     </section>
//   );
// }





//3
// "use client";

// import Link from "next/link";
// import { Spotlight } from "./ui/Spotlight";
// import { Button } from "./ui/moving-border";
// import {
//   TextRevealCard,
// } from "./ui/text-reveal-card";

// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="relative h-auto md:h-[50rem] w-full flex flex-col items-center justify-center overflow-hidden py-10 md:py-0 px-4"
//     >
//       {/* Spotlight animated background */}
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />

//       {/* Hero content */}
//       <div className="relative z-10 text-center max-w-4xl flex flex-col items-center">
//         {/* Enhanced Text Reveal Card for the main heading */}
//         <div className="w-full max-w-4xl mb-6">
//           <TextRevealCard
//             text="Hi, I'm Kapil Dev Chaudhary"
//             revealText="Full Stack Web Developer"
//             className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
//           >
//             <div className="text-4xl md:text-7xl font-bold">
//               Hi, I'm Kapil Dev Chaudhary
//             </div>
//           </TextRevealCard>
//         </div>

//         <p className="mt-4 md:mt-6 text-base md:text-lg text-neutral-300 mx-auto max-w-lg">
//           A passionate web developer and problem solver. I create interactive web applications, 
//           build creative projects, and love turning ideas into reality. Skilled in web technologies 
//           and always learning new things to level up.
//         </p>

//         <div className="mt-6 md:mt-8">
//           <Link href="#projects">
//             <Button
//               borderRadius="1.75rem"
//               className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 px-6 py-3 text-sm md:text-base"
//             >
//               View Projects
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }




//4
// "use client";

// import Link from "next/link";
// import { Spotlight } from "./ui/Spotlight";
// import { Button } from "./ui/moving-border";
// import { TextRevealCard } from "./ui/text-reveal-card";

// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="relative h-auto md:h-[50rem] w-full flex flex-col items-center justify-center overflow-hidden py-10 md:py-0 px-4"
//     >
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />

//       <div className="relative z-10 text-center max-w-4xl flex flex-col items-center">
//         {/* Only the TextRevealCard with the heading inside */}
//         <TextRevealCard
//           text="Hi, I'm Kapil Dev Chaudhary"
//           revealText="Web Developer & Problem Solver"
//         >
//           <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
//             {/* Hi, I'm Kapil Dev Chaudhary */}
//           </h1>
//         </TextRevealCard>

//         <p className="mt-4 md:mt-6 text-base md:text-lg text-neutral-300 mx-auto max-w-lg">
//           A passionate web developer and problem solver. I create interactive web applications, 
//           build creative projects, and love turning ideas into reality. Skilled in web technologies 
//           and always learning new things to level up.
//         </p>

//         <div className="mt-6 md:mt-8">
//           <Link href="#projects">
//             <Button
//               borderRadius="1.75rem"
//               className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 px-6 py-3 text-sm md:text-base"
//             >
//               View Projects
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }




//5
// "use client";

// import Link from "next/link";
// import { Spotlight } from "./ui/Spotlight";
// import { Button } from "./ui/moving-border";
// import {
//   TextRevealCard,
// } from "./ui/text-reveal-card";

// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="relative h-auto md:h-[50rem] w-full flex flex-col items-center justify-center overflow-hidden py-10 md:py-0 px-4"
//     >
//       {/* Spotlight animated background */}
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />

//       {/* Hero content */}
//       <div className="relative z-10 text-center max-w-4xl flex flex-col items-center">
//         {/* Text Reveal Card for the main heading - simplified */}
//         <TextRevealCard
//           text="Hi, I'm Kapil Dev Chaudhary"
//           revealText="Full Stack Developer"
//         >
//           <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
//             {/* Hi, I'm Kapil Dev Chaudhary */}
//           </h1>
//         </TextRevealCard>

//         <p className="mt-4 md:mt-6 text-base md:text-lg text-neutral-300 mx-auto max-w-lg">
//           A passionate web developer and problem solver. I create interactive web applications, 
//           build creative projects, and love turning ideas into reality. Skilled in web technologies 
//           and always learning new things to level up.
//         </p>

//         <div className="mt-6 md:mt-8">
//           <Link href="#projects">
//             <Button
//               borderRadius="1.75rem"
//               className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 px-6 py-3 text-sm md:text-base"
//             >
//               View Projects
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }



///6
// "use client";

// import Link from "next/link";
// import { Spotlight } from "./ui/Spotlight";
// import { Button } from "./ui/moving-border";
// import { TextRevealCard } from "./ui/text-reveal-card";

// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="relative h-auto md:h-[50rem] w-full flex flex-col items-center justify-center overflow-hidden py-10 md:py-0 px-4"
//     >
//       {/* Background Spotlight */}
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />

//       {/* Hero content */}
//       <div className="relative z-10 text-center max-w-4xl flex flex-col items-center">
//         {/* Text Reveal Card with integrated spotlight effect */}
//         <div className="relative inline-block">
//           {/* Additional spotlight specifically for the reveal text */}
//           <Spotlight
//             className="top-10 left-1/2 transform -translate-x-1/2 w-64 h-64 opacity-70"
//             fill="rgba(255,255,255,0.3)"
//           />
          
//           <TextRevealCard
//             text="Hi, I'm Kapil Dev Chaudhary"
//             revealText="Full Stack Developer"
//           >
//             <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 relative z-10">
//               {/* Hi, I'm Kapil Dev Chaudhary */}
//             </h1>
//           </TextRevealCard>
//         </div>

//         <p className="mt-4 md:mt-6 text-base md:text-lg text-neutral-300 mx-auto max-w-lg relative z-10">
//           A passionate web developer and problem solver. I create interactive web applications, 
//           build creative projects, and love turning ideas into reality. Skilled in web technologies 
//           and always learning new things to level up.
//         </p>

//         <div className="mt-6 md:mt-8 relative z-10">
//           <Link href="#projects">
//             <Button
//               borderRadius="1.75rem"
//               className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 px-6 py-3 text-sm md:text-base"
//             >
//               View Projects
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }



//7
// "use client";

// import Link from "next/link";
// import { Spotlight } from "./ui/Spotlight";
// import { Button } from "./ui/moving-border";
// import { TextRevealCard } from "./ui/text-reveal-card";

// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="relative h-auto md:h-[50rem] w-full flex flex-col items-center justify-center overflow-hidden py-10 md:py-0 px-4 bg-black" // Added bg-black here
//     >
//       {/* Background Spotlight */}
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />

//       {/* Hero content */}
//       <div className="relative z-10 text-center max-w-4xl flex flex-col items-center">
//         {/* Text Reveal Card with matching background */}
//         <div className="relative inline-block bg-black rounded-lg p-4"> {/* Added bg-black and padding */}
//           <TextRevealCard
//             text="Hi, I'm Kapil Dev Chaudhary"
//             revealText="Full Stack Developer"
//           >
//             <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 relative z-10">
//               {/* Hi, I'm Kapil Dev Chaudhary */}
//             </h1>
//           </TextRevealCard>
//         </div>

//         <p className="mt-4 md:mt-6 text-base md:text-lg text-neutral-300 mx-auto max-w-lg relative z-10">
//           A passionate web developer and problem solver. I create interactive web applications, 
//           build creative projects, and love turning ideas into reality. Skilled in web technologies 
//           and always learning new things to level up.
//         </p>

//         <div className="mt-6 md:mt-8 relative z-10">
//           <Link href="#projects">
//             <Button
//               borderRadius="1.75rem"
//               className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 px-6 py-3 text-sm md:text-base"
//             >
//               View Projects
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }




//8
// "use client";

// import Link from "next/link";
// import { Spotlight } from "./ui/Spotlight";
// import { Button } from "./ui/moving-border";
// import { TextRevealCard } from "./ui/text-reveal-card";

// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="relative h-auto md:h-[50rem] w-full flex flex-col items-center justify-center overflow-hidden py-10 md:py-0 px-4 bg-black"
//     >
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />

//       <div className="relative z-10 text-center max-w-4xl flex flex-col items-center">
//         {/* Text Reveal Card with transparent background overlay */}
//         <div className="bg-black/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
//           <TextRevealCard
//             text="Hi, I'm Kapil Dev Chaudhary"
//             revealText="Full Stack Developer"
//           >
//             <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
//               {/* Hi, I'm Kapil Dev Chaudhary */}
//             </h1>
//           </TextRevealCard>
//         </div>

//         <p className="mt-4 md:mt-6 text-base md:text-lg text-neutral-300 mx-auto max-w-lg">
//           A passionate web developer and problem solver. I create interactive web applications, 
//           build creative projects, and love turning ideas into reality. Skilled in web technologies 
//           and always learning new things to level up.
//         </p>

//         <div className="mt-6 md:mt-8">
//           <Link href="#projects">
//             <Button
//               borderRadius="1.75rem"
//               className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 px-6 py-3 text-sm md:text-base"
//             >
//               View Projects
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }