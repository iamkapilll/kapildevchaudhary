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
          Hi, I&apos;m Kapil Dev Chaudhary
        </h1>

        <p className="mt-4 md:mt-6 text-base md:text-lg text-neutral-300 mx-auto max-w-lg">
          A passionate web developer and problem solver. I create interactive
          web applications, build creative projects, and love turning ideas into
          reality. Skilled in web technologies and always learning new things to
          level up.
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
