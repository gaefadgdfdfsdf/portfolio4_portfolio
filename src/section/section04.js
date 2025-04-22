import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Section04 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200vw"]);

 

  return (
    <div ref={containerRef} className="h-[600vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative top-24 left-24">
            <h2 className="lg:text-[30px] text-[#091423]">CAFE 24로 작업한 홈페이지</h2>
        </div>
        <motion.div
          className="h-[65vh] w-full flex flex-shrink-0 items-center justify-start px-20 space-x-40 pt-28"
          style={{ x }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <img
              key={index}
              src={`/web0${index + 1}.jpg`}
              alt={`Poster ${index + 1}`}
              className="h-3/4 object-cover shadow-2xl"
              
            />
          ))}
        </motion.div>
      
        <div className='class="lg:w-[calc(100%-32.84722222222222vw)] mt-[20px] lg:mt-0 relative left-24'>
            <div className='text-[1.15vw] leading-[133%] max-lg:max-w-[290px] max-lg:mx-auto'> 
            From initial planning to final delivery,<br/>
            our approach to artistic direction is deeply<br/>
            informed by an understanding of your business<br/>
            and audience.From initial planning to final.
            </div>
            <div className='mt-[35px] lg:mt-[1.538888888888889vw]'>
                <a href='' className='text-white bg-[#091423] rounded-[5px] block h-[70px] w-[150px] min-w-[150px] lg:min-w-[10.194444444444445vw] leading-[70px]'>
                    <span className='relative overflow-visible flex flex-col items-center'>
                        <span className='opacity-0 flex absolute flex-nowrap items-center'>SEE MORE</span>
                        <span className='flex absolute flex-nowrap items-center'>SEE MORE</span>
                    </span>
                </a>    
            </div>
        </div>

      </div>
    </div>
  );
};

export default Section04;
