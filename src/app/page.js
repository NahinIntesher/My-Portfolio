"use client";

// src/app/page.jsx
import Head from "next/head";
import Hero from "@/components/Section/Hero";
import About from "@/components/Section/About";
import Skills from "@/components/Section/Skills";
import Specialization from "@/components/Section/Specialization";
import Education from "@/components/Section/Education";
import LearningPath from "@/components/Section/LearningPath";
import CallToAction from "@/components/Section/CalltoAction";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-[#E7F5DC] to-[#D8E9C9] text-[#112B13]">
      <Hero />
      <About />
      <Skills />
      <Specialization />
      <Education />
      <LearningPath />
      <CallToAction />
    </div>
  );
}
