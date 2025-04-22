import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Section04 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100vw"]);

 

  return (
    <div ref={containerRef} className="h-[600vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="h-[100vh] w-full flex flex-shrink-0 items-center justify-start px-20 space-x-40"
          style={{ x }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <img
              key={index}
              src={`/po0${index + 1}.webp`}
              alt={`Poster ${index + 1}`}
              className="h-3/4 object-cover rounded-3xl shadow-2xl"
              
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Section04;
