import { connectionType, NavlinkProps, techType } from "../type/types";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

export const techs: techType[] = [
  { src: "/html.png", name: "HTML", percent: 100 },
  { src: "/cssic.webp", name: "CSS", percent: 95 },
  { src: "/tailwindd.svg", name: "Tailwindcss", percent: 93 },
  { src: "/sass.webp", name: "Sass", percent: 86 },
  { src: "/jsicon.png", name: "Javascript", percent: 75 },
  { src: "/typescript.png", name: "Typescript", percent: 70 },
  { src: "/react.webp", name: "React", percent: 78 },
  { src: "/git.png", name: "Git", percent: 81 },
  { src: "/github.png", name: "Github", percent: 81 },
  { src: "/nextjs.png", name: "Next.js", percent: 70 },
];

export const connectionData: connectionType[] = [
  {
    id: 1,
    name: "Phone",
    infor: "+994 51 548 92 72",
    icon: <FaPhoneVolume  size={24} />,
    href: "tel:+994515489272",
  },
  {
    id: 2,
    name: "Email",
    infor: "dilberamrahova1@gmail.com",
    icon: <MdOutlineEmail size={24} />,
    href: "mailto:dilberamrahova1@gmail.com",
  },
  {
    id: 3,
    name: "LinkedIn",
    infor: "Dilber Amrahova",
    icon: <SiLinkedin size={24} />,
    href: "https://www.linkedin.com/in/dilb%C9%99r-%C9%99mrahova",
  },
  {
    id: 4,
    name: "Github",
    infor: "Dilber Amrahova",
    icon: <FaGithub size={24} />,
    href: "https://github.com/AmrahovaDilber",
  },
];

export const educationData = [
  {
    date: "05/2023 – 12/2023",
    title: "Front-end Development",
    text: "IT HUB Azerbaijan | EPAM UpSkill",
  },
  {
    date: "09/2022 – 05/2026",
    title: "Information Technology",
    text: "Azerbaijan State University of Economics - Bachelor",
  },
  {
    date: "02/2024 – 08/2024",
    title: "Front-end Development",
    text: "ATL Academy",
  },
];

export const experienceData = [
  {
    date: "07/2024 – Present",
    info: {
      company: "Digigo Group",
      job: "Front-end Developer | Freelance",
      description:
        "Developed a responsive e-commerce platform using React, integrating APIs for product data, shopping cart, and secure checkout. Utilized React hooks for state management and Tailwind CSS for mobile optimization.Implemented form validation and user authentication for enhanced security",
    },
  },
  {
    date: "12/2024 – 1/2025",
    info: {
      company: "Intern Intelligence",
      job: "Front-end Developer | Intern",
      description:
        "Developed diverse projects using TypeScript, Firebase, and Tailwind CSS to enhance our skills with various technologies. These included a portfolio website to showcase our work and a movie app to explore interactive designs, leveraging the power of React and Next.js. Each project provided valuable hands-on experience and real-world development insights, focusing on building scalable and responsive applications.",
    },
  },
  {
    date: "06/2024 – Present",
    info: {
      company: "Tripsee",
      job: "Front-end Developer",
      description:
        "Responsible for building and optimizing user interfaces, developing responsive layouts, and enhancing user experience using technologies like Next.js, Tailwind CSS, TypeScript, Redux, and Git. Additionally worked with REST APIs, server-side rendering.",
    },
  },
  {
    date: "11/2023 – 12/2023",
    info: {
      company: "4SİM / C4IR Azerbaijan",
      job: "Front-end Developer | Intern",
      description:
        "Collaborated with a team at 4SIM Azerbaijan as a front-end developer,contributing to the design and implementation of user interfaces for web applications, ensuring responsiveness and optimal user experience.",
    },
  },
];

export const projectsData = [
  {
    id: 1,
    title: "HerseyBurada",
    category: "e-commerce",
    des: "HerseyBurada is a modern e-commerce platform that offers a seamless shopping experience. Users can browse products, add them to a cart, and proceed to checkout effortlessly.",
    image: "/herseyburada.png",
    icons: ["/react.webp", "/tailwindd.svg"],
    link: "https://herseyburada.netlify.app/",
  },
  {
    id: 2,
    title: "Ramadan",
    link: "https://ramadanwebsite.netlify.app/",
    image: "/ramadan.png",
    icons: ["/react.webp", "/css.png"],
    des: "Discover daily inspirational quotes, organize your month with our interactive planner, and explore essential information, community events, and more.",
  },

  {
    id: 3,
    title: "Dilber's Portfolio",
    link: "https://diberamrahova-portfolio.netlify.app/",
    image: "/portfolio.png",
    icons: ["/react.webp", "/scss.png"],
    des: "A personal portfolio showcasing my projects, skills, and experience.It highlights key accomplishments, coding expertise, and includes a contact section for professional connections.",
  },
];


export const navLinks:NavlinkProps[] = [
  { href: "#home", title: "Home" },
  { href: "#skills", title: "Skills" },
  { href: "#about", title: "About" },
  { href: "#education", title: "Education" },
  { href: "#experience", title: "Experience" },
  { href: "#projects", title: "Projects" },
  { href: "#contact", title: "Contact" },
];