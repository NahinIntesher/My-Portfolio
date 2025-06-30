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

export default function page() {
  return (
    <div>
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
