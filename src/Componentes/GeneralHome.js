import React from "react";
import Home from "./pageComponents/Home"
import Header from "./pageComponents/Header";
import Navbar from "./pageComponents/Navbar";
import Footer from "./pageComponents/Footer";
import {
  theTools,
  theLanguages,
  MusicCv,
  DeveloperCv,
} from "./Helpers";
import { Curriculums } from "./c.vitae/Curriculums";

export default function GeneralHome() {
  return (
    <main className="container">
      <Header />
      <Navbar />
      <Home />
      <Curriculums />
      <Footer />
    </main>
  );
}
