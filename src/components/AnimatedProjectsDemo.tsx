import { AnimatedTestimonials } from "./animated-projects";

const projectsData = [
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
    des: "A personal portfolio showcasing my projects, skills, and experience. It highlights key accomplishments, coding expertise, and includes a contact section for professional connections.",
  },
];

interface Testimonial {
  quote: string;
  name: string;
  src: string;
  icons: string[];
  link: string;
}

const testimonialsData: Testimonial[] = projectsData.map((project) => ({
    quote: project.des,
    name: project.title,
    src: project.image,
    link: project.link,
    icons: project.icons,
  }));
  

export function AnimatedTestimonialsDemo() {
  return <AnimatedTestimonials testimonials={testimonialsData} />;
}
