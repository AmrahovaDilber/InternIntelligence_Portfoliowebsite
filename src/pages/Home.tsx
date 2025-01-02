import React from "react";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import AboutMe from "../components/HeroSection";
import HeroContent from "../components/AboutMe";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <main
      className="relative w-full min-h-screen flex flex-col items-center justify-start bg-black text-white overflow-x-hidden"
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
      <div className="relative z-20 w-full max-w-[1280px]  mx-auto  flex flex-col ">
        <Header></Header>
      <section className="w-full py-8 ">
          <AboutMe></AboutMe>
        </section>
        <section className="w-full py-8 ">
          <Skills />
        </section>
        <section className="w-full py-8 ">
         <HeroContent></HeroContent>
        </section>
        <section className="w-full py-8 ">
        <Education></Education>
        </section>
        <section className="w-full py-8 ">
        <Experience></Experience>
        </section>
        <section className="w-full py-8 ">
        <Projects></Projects>
        </section>
        <section className="w-full py-8 ">
          <Contact></Contact>
        </section>
 
      </div>
    </main>
  );
};

export default Home;
