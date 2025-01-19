import React from "react";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import AboutMe from "../components/HeroSection";
import HeroContent from "../components/AboutMe";
import Education from "../components/Education";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MagicCursor from "../components/MagicCursor";
import BackToTop from "../components/BackToTop";
import { TimelineDemo } from "../components/TimeLineDemo";
import ProgressBar from "../components/ProgressBar";
import { AnimatedTestimonialsDemo } from "../components/AnimatedProjectsDemo";

const Home: React.FC = () => {
  return (
    <main
      className="relative w-full min-h-screen flex flex-col bg-black text-white overflow-x-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(72, 61, 139, 0.8), transparent),
          radial-gradient(circle at 80% 50%, rgba(25, 25, 112, 0.7), transparent),
          url('/space-background.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
     <ProgressBar></ProgressBar>
      <MagicCursor />
      <div className="relative z-20 flex flex-col">
        <Header />
        <section className="w-full py-8">
          <AboutMe />
        </section>
      
        <section className="w-full py-8">
          <Skills />
        </section>
        <section className="w-full py-8">
          <HeroContent />
        </section>
        <section className="w-full py-8">
          <Education />
        </section>
        <section className="w-full">
          <TimelineDemo></TimelineDemo>
        </section>
        <section className="w-full py-8">
        <AnimatedTestimonialsDemo></AnimatedTestimonialsDemo>
        </section>
        <section className="w-full py-8">
          <Contact />
        </section>

        <section className="w-full">
          <Footer />
        </section>
        <BackToTop></BackToTop>
      </div>
    </main>
  );
};

export default Home;
