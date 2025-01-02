import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "../constant/data";
import Title from "./Title";

// Define the type for experience data
interface ExperienceData {
  date: string;
  info: {
    company: string;
    job: string;
    description: string;
  };
}

interface ExperienceCardProps {
  experience: ExperienceData;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { company, job, description } = experience.info;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgb(23,11,42)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: "#4a5568" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <span className="text-white text-lg font-bold">
            {job.charAt(0).toUpperCase()}
          </span>
        </div>
      }
    >
      <div>
        <h3 className="text-white text-2xl font-bold">{job}</h3>
        <p className="text-secondary text-lg font-semibold m-0">{company}</p>
      </div>
      <p className="mt-5 text-gray-300 text-sm tracking-wide">{description}</p>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        <Title>Work Experience</Title>
      </motion.div>

      <div className="flex flex-col">
        <VerticalTimeline layout="1-column-left">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
