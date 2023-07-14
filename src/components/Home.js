import React from "react";
import Navbar from "./Navbar.js";
import Content from "./Content.js";
import Certificate from "./Certificate.js";
import Skills from "./Skills.js";
import Footer from "./Footer.js";

function Home() {
  return (
    <div>
      <Navbar />
      <Content />
      <Certificate />
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;
