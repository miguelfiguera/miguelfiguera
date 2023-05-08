import React from "react";
import Home from "./pageComponents/Home";
import Header from "./pageComponents/Header";
import Navbar from "./pageComponents/Navbar";
import About from "./pageComponents/About";
import Footer from "./pageComponents/Footer";
import Projects from "./projects/Projects";
import { theTools, theLanguages, MusicCv, DeveloperCv } from "./Helpers";
import { Curriculums } from "./c.vitae/Curriculums";

export default function GeneralHome() {
  return (
    <main className="">
      <Header />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Curriculums />
      <Footer />
    </main>
  );
}
