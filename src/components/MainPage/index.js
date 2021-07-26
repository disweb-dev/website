import React from "React";
import Header from "../Header";
import Hero from "../Hero";
import Tech from "../Tech";
import Services from "../Services";
import Projects from "../Projects";
import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";

const mainPage = () => {
  return (
    <section>
      <Header />
      <Hero />
      <Tech />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </section>
  );
};

export default mainPage;
