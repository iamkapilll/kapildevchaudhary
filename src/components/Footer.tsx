// "use client";

// import React from "react";

// function Footer() {
//   return (
//     <footer className="bg-black text-gray-400 py-12">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        
//         {/* About Me */}
//         <div>
//           <h2 className="text-white text-lg font-semibold mb-4">About Me</h2>
//           <p className="mb-4">
//             I am Kapil Dev Chaudhary, a passionate developer focused on building scalable web applications
//             and creative solutions. I love exploring modern technologies and contributing to meaningful projects.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
//           <ul>
//             <li>
//               <a href="#home" className="hover:text-white transition-colors duration-300">Home</a>
//             </li>
//             <li>
//               <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
//             </li>
//             <li>
//               <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
//             </li>
//             <li>
//               <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
//             </li>
//           </ul>
//         </div>

//         {/* Follow Me */}
//         <div>
//           <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
//           <div className="flex space-x-4">
//             <a href="https://facebook.com" className="hover:text-white transition-colors duration-300">Facebook</a><br />
//             <a href="https://twitter.com" className="hover:text-white transition-colors duration-300">Twitter</a><br />
//             <a href="https://linkedin.com" className="hover:text-white transition-colors duration-300">LinkedIn</a><br />
//             <a href="https://github.com" className="hover:text-white transition-colors duration-300">GitHub</a>
//           </div>
//         </div>

//         {/* Contact */}
//         <div>
//           <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
//           <p>Kathmandu, Nepal</p>
//           <p>New Baneshwor</p>
//           <p>Email: kapildevchaudhary067@gmail.com</p>
//           <p>Phone: +977 1234567890</p>
//         </div>

//       </div>

//       {/* Copyright */}
//       <p className="text-center text-xs pt-8">© 2025 Kapil Dev Chaudhary. All rights reserved.</p>
//     </footer>
//   );
// }

// export default Footer;



//src/components/Footer.tsx
"use client";

import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* About Me */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Me</h2>
          <p className="mb-4">
            I am Kapil Dev Chaudhary, a passionate developer focused on building scalable web applications
            and creative solutions. I love exploring modern technologies and contributing to meaningful projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a href="#home" className="hover:text-white transition-colors duration-300">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
            </li>
          </ul>
        </div>

        {/* Follow Me (Vertical) */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="https://www.facebook.com/kapil.dev.440742" className="hover:text-white transition-colors duration-300">Facebook</a>
            </li>
            
            <li>
              <a href="https://www.linkedin.com/in/kapil-dev-chaudhary/" className="hover:text-white transition-colors duration-300">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/iamkapilll" className="hover:text-white transition-colors duration-300">GitHub</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p>Lalitpur, Nepal</p>
          {/* <p>Ekantakuna, Lalitpur</p> */}
          <p>Email: kapildevchaudhary067@gmail.com</p>
          <p>Phone: +977 9822637377</p>
        </div>

      </div>

      {/* Copyright */}
      <p className="text-center text-xs pt-8">© 2025 Kapil Dev Chaudhary. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
