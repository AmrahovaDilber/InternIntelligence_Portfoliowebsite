import { connectionType, techType } from "../type/types";
import { FaPhoneVolume } from "react-icons/fa";
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
    icon: <FaPhoneVolume size={24} />,
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
