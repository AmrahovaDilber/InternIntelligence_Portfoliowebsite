import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[9px] bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 shadow-lg z-50 rounded-full"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
    />
  );
};

export default ProgressBar;
