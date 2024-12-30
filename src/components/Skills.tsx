const techs = [
  { src: "/html.png", name: "HTML", percent: 100 },
  { src: "/cssic.webp", name: "CSS", percent: 95 },
  { src: "/tailwindd.svg", name: "Tailwindcss", percent: 93 },
  { src: "/sass.webp", name: "Sass", percent: 86 },
  { src: "/jsicon.png", name: "Javascript", percent: 75 },
  { src: "/typescript.png", name: "Typescript", percent: 70 },
  { src: "/react.webp", name: "React", percent: 78 },
  { src: "/git.png", name: "Git", percent: 81 },
  { src: "/nexticon.png", name: "Next", percent: 70 },
];

const Skills = () => {
  return (
    <div id="skills" className="mx-auto max-w-[1280px]  mt-20">
      <p>Skills</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4  rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:transition-transform ease-in-out hover:duration-300  transform transition duration-300"
          >
            <div className="w-[170px] h-[170px] bg-[#140c1c] hover:border-[#6f42c1] hover:border flex flex-col items-center justify-center rounded-[25px]   ">
              <img
                src={tech.src}
                width={90}
                height={90}
                alt={tech.name}
                className="object-cover rounded-[25px] filter grayscale-0  hover:filter-none"
              />
              {/* <p className="text-white mt-2">{tech.percent}%</p> */}
            </div>
            <p className="mt-4 text-lg text-white">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
