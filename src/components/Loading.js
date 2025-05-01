import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { loadingProgressState } from "../store";
import { motion, useScroll, useTransform } from 'framer-motion';


const Loading = () => {
  const stickyRef = useRef(null);
  const [progress, setProgress] = useRecoilState(loadingProgressState);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(()=>{
    const timer = setInterval(()=>{
      setProgress((oldProgress)=>{
        return Math.min(oldProgress + 5, 100);
      })
    }, 100)

    return () => {
      clearInterval(timer);
    }
  }, [setProgress]);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.5 }
    );
    
    if (stickyRef.current) observer.observe(stickyRef.current);
    return () => stickyRef.current && observer.unobserve(stickyRef.current);

   
}, []);

  return (
    <div className="h-screen w-full mt-40 " ref={stickyRef}>
      {/* 프로그레스 바 */}
      <div className="flex justify-center flex-nowrap pl-[1.38vw] pr-[1.38vw]">
        <div className="pr-[1.38vw] flex flex-nowrap items-end">
            <motion.svg
                
                initial={{ opacity: 0, y: -50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }} 
                className="mr-[1.18px] lg:mr-[0.625vw] w-[23.98px] lg:w-[13.194444444444445vw] h-auto" width="190" height="230" viewBox="0 0 190 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.40752e-05 162.436C-0.0328505 205.586 33.6058 229.776 76.3243 229.808C117.748 229.84 140.633 209.577 148.419 185.419L148.389 224.685L189.381 224.717L189.5 68.5129C189.534 24.5002 157.19 0.31159 101.526 0.26909C44.9997 0.22609 12.1833 29.5431 6.54387 68.8049L49.6939 68.8379C52.302 43.8132 71.2975 31.3142 101.071 31.3369C130.413 31.3592 145.938 43.453 145.926 59.4189C145.913 75.7799 126.918 80.8729 97.8184 88.6739C94.6858 89.5139 91.4361 90.3859 88.0803 91.3059C34.1319 105.504 0.0338849 117.992 2.40752e-05 162.436ZM147.598 129.755C147.57 166.432 125.97 198.778 88.43 198.75C63.403 198.73 44.8586 185.34 44.877 161.176C44.8971 134.854 67.3427 124.947 101.438 115.48C126.903 108.164 142.442 101.272 147.629 88.7619L147.598 129.755Z" fill="#091423"></path>
            </motion.svg>
            <motion.svg
                
                initial={{ opacity: 0, y: -50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="mr-[0.13px] lg:mr-[0.06944444444444445vw] w-[15.84px] lg:w-[8.75vw] h-auto" width="126" height="279" viewBox="0 0 126 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M125.961 90.6848L77.6332 90.6479V90.6839L34.5732 90.6511L77.5952 140.443L77.5342 219.667C77.5192 239.947 80.9662 245.991 99.5212 246.005L125.842 246.025L125.817 278.819L86.5512 278.789C45.9902 278.758 34.3532 260.626 34.3822 222.654L34.4832 90.6151L0.825195 90.5894L0.850204 58.6584L34.5072 58.684L34.5522 0L77.7022 0.0328751L77.6572 58.7169L125.985 58.7537L125.961 90.6848Z" fill="#091423"></path>
            </motion.svg>
            <motion.svg
                
                initial={{ opacity: 0, y: -50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9 }}
                className="mr-[2.53px] lg:mr-[1.3888888888888888vw] w-[27.36px] lg:w-[15.138888888888888vw] h-auto" width="218" height="231" viewBox="0 0 218 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.980514 114.787C0.929514 181.238 43.6115 230.03 109.2 230.08C174.356 230.13 217.112 181.403 217.162 114.952C217.212 49.3639 174.53 0.571611 109.374 0.522011C43.7855 0.472011 1.03051 49.1989 0.980514 114.787ZM171.423 114.917C171.387 162.814 148.491 196.885 109.225 196.855C69.5265 196.824 46.6825 162.719 46.7195 114.822C46.7555 67.3569 69.6505 33.7173 109.348 33.7475C148.615 33.7774 171.46 67.4519 171.423 114.917Z" fill="#091423"></path>
            </motion.svg>
            <motion.svg
                
                initial={{ opacity: 0, y: -50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.1 }}
                className="mr-[4.11px] lg:mr-[2.2222222222222223vw] w-[5.44px] lg:w-[3.0555555555555554vw] h-auto" width="44" height="280" viewBox="0 0 44 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.415649 0L43.1346 0.0325458L42.9006 279.032L0.182617 279L0.415649 0Z" fill="#091423"></path>
            </motion.svg>
            <motion.svg
                
                initial={{ opacity: 0, y: -50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.3 }}
                className=" w-[5.44px] lg:w-[3.0555555555555554vw] h-auto" width="44" height="280" viewBox="0 0 44 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.860962 0.0576172L43.58 0.0901631L43.3459 279.09L0.62793 279.057L0.860962 0.0576172Z" fill="#091423"></path>
            </motion.svg>
        </div>
        <div className="mt-96 w-[50%] h-1 bg-gray-200">
            <div className="h-full bg-black transition-all duration-200 ease-out" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      
    </div>
  );
};

export default Loading;
