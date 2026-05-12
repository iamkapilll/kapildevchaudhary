"use client";

import React, { useState } from "react";

export default function ContactSection() {

  // ================= STATE =================
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ================= SUBMIT FUNCTION =================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent 🚀");

      // clear fields
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Something went wrong ❌");
    }
  };

  // ================= UI =================
  return (
    <section
      id="contact"
      className="w-full py-24 px-4 md:px-10"
    >
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Contact Me
        </h2>

        <p className="text-center text-neutral-400 mb-12">
          Let’s build something amazing together.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* NAME */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white outline-none"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white outline-none"
          />

          {/* MESSAGE */}
          <textarea
            rows={6}
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white outline-none resize-none"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full rounded-xl bg-white py-4 font-semibold text-black transition hover:scale-[1.02]"
          >
            Send Message 🚀
          </button>

        </form>
      </div>
    </section>
  );
}