// //app/layout.tsx
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import { ShootingStars } from "@/components/ui/shooting-stars";
// import { StarsBackground } from "@/components/ui/stars-background";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//    title: "Kapil Dev Chaudhary",
//   description: "Kapil Dev Chaudhary's Portfolio",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en" className="dark">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-black text-white`}
//       >
//         <ShootingStars className="fixed inset-0 pointer-events-none z-0" />
//         <ShootingStars className="fixed inset-0 pointer-events-none z-0" />
//         <ShootingStars className="fixed inset-0 pointer-events-none z-0" />
//         <ShootingStars className="fixed inset-0 pointer-events-none z-0" />
//         <ShootingStars className="fixed inset-0 pointer-events-none z-0" />

//         <StarsBackground className="fixed inset-0 pointer-events-none z-0" />
//         <StarsBackground className="fixed inset-0 pointer-events-none z-0" />
        

//         <Navbar className="relative z-10" />

//         <main className="relative z-10">{children}</main>
//       </body>
//     </html>
//   );
// }












// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kapil Dev Chaudhary",
  description: "Kapil Dev Chaudhary's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-black text-white`}
      >
        {/* Background Effects (ONLY ONCE) */}
        <ShootingStars className="fixed inset-0 pointer-events-none z-0" />
        <ShootingStars className="fixed inset-0 pointer-events-none z-0" />
        <ShootingStars className="fixed inset-0 pointer-events-none z-0" />
        <ShootingStars className="fixed inset-0 pointer-events-none z-0" />
        <ShootingStars className="fixed inset-0 pointer-events-none z-0" />
        <ShootingStars className="fixed inset-0 pointer-events-none z-0" />
        <StarsBackground className="fixed inset-0 pointer-events-none z-0" />

        {/* Navbar (FIXED - no props) */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}