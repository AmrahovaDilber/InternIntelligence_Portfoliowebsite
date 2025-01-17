import { Timeline } from "./timeline";
import { experienceData } from "../constant/data";

export function TimelineDemo() {
  const data = experienceData.map((item) => ({
    title: item.date,
    content: (
      <div>
        <h3 className="text-white text-sm md:text-base font-semibold mb-2">
          {item.info.company} - {item.info.job}
        </h3>
        <p className="text-neutral-300 text-xs md:text-sm font-normal leading-relaxed">
          {item.info.description}
        </p>
      </div>
    ),
  }));

  return (
    <div className="w-full max-w-7xl mx-auto p-6 lg:p-0">
   
      <Timeline data={data} />
    </div>
  );
}
