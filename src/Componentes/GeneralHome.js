import React from "react";
import Home from "./pageComponents/Home";
import Header from "./pageComponents/Header";
import Navbar from "./pageComponents/Navbar";
import About from "./pageComponents/tools";
import Footer from "./pageComponents/Footer";
import Projects from "./projects/Projects";
import { theTools, theLanguages, MusicCv, DeveloperCv } from "./Helpers";
import { Curriculums } from "./c.vitae/Curriculums";
import { useState, useEffect } from "react";
import Contact from "./pageComponents/Contact";

export default function GeneralHome() {
  return (
    <main className="container-fluid pt-5 mt-0">
      <Header />
      <Navbar />
      <Projects />
      <Home />
      <About />
      <Contact/>
      <Curriculums />
      <Footer />
    </main>
  );
}
