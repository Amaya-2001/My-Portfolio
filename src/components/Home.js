import React from "react";
import Navbar from "./Navbar.js";
import Content from "./Content.js";
import Skills from "./Skills.js";
import Experience from "./Experience.js";
import Education from "./Education.js";
import Certificate from "./Certificate.js";
import Footer from "./Footer.js";

function Home() {
  return (
    <div>
      <Navbar />
      <Content />
      <Skills />
      <Experience />
      <Education />
      <Certificate />
      <Footer />
    </div>
  );
}

export default Home;
