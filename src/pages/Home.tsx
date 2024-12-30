import React from "react";
import HeroContent from "../components/HeroContent";
import Skills from "../components/Skills";

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
      

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1280px]  mx-auto  flex flex-col ">
        {/* Hero Section */}
        <section className="w-full min-h-[calc(100vh-4rem)]">
          <HeroContent />
        </section>

        {/* Skills Section */}
        <section className="w-full py-20 ">
          <Skills />
        </section>
      </div>

   
    </main>
  );
};

export default Home;