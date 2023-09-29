import React from "react";
import Banner from "../banner/Banner";
import About from "../about/About";
import Services from "../serviceDiv/Services";
import Skills from "../skills/Skills";
import Freelance from "../freelance/Freelance";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Skills />
      <Freelance />
      {/* <Contact /> */}
    </>
  );
};

export default Home;
