import React from "react";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";
import HeroContent from "../components/HeroContent";

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
      <section className="w-full py-10 ">
          <AboutMe></AboutMe>
        </section>
        <section className="w-full py-10 ">
          <Skills />
        </section>
        <section className="w-full py-10 ">
         <HeroContent></HeroContent>
        </section>
   
        <section className="w-full py-10 ">
          <Contact></Contact>
        </section>
 
      </div>
    </main>
  );
};

export default Home;
