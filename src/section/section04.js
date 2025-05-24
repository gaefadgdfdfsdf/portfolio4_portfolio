import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Section04 = () => {
  const containerRef = useRef(null);



   // 화면 폭 상태 (3단계 구분)
   const [screenSize, setScreenSize] = useState("wide"); // wide / medium / small

   // 화면 크기 변화 감지
   useEffect(() => {
     const handleResize = () => {
       const width = window.innerWidth;
       if (width >= 1024) {
         setScreenSize("wide");
       } else if (width >= 769) {
         setScreenSize("medium");
       } else {
         setScreenSize("small");
       }
     };
 
     window.addEventListener("resize", handleResize);
 
     // 초기 체크
     handleResize();
 
     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);



  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-225vw"]);

 // 스크롤에 따른 가로 이동 값
  // 스크롤에 따른 가로 이동 값 (반응형)
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    screenSize === "wide"
      ? ["0%", "-225vw"]
      : screenSize === "medium"
      ? ["0%", "-350vw"]
      : ["0%", "-655vw"]
  );

  return (
    <div ref={containerRef} className="h-[600vh] mt-10">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative top-32 left-16">
            <h2 className="noto-sans-kr-semibold lg:text-[30px] text-[#091423]">｛ 기업 프로젝트로 참여한 반응형 웹사이트 ｝</h2>
        </div>
        <motion.div
          className="host-grotesk-bold h-[63vh] w-[600vh] flex flex-shrink-0 items-center justify-start px-20 space-x-40 pt-28"
          style={{ x }}
        >
          {/* {Array.from({ length: 6 }).map((_, index) => (
            <img
              key={index}
              src={`/web0${index + 1}.jpg`}
              alt={`Poster ${index + 1}`}
              className="h-3/4 object-cover shadow-2xl"
              
            />
          ))} */}

        <div className="host-grotesk-bold relative group max-[768px]:w-[70vw] max-[1023px]:w-[55vw] lg:w-[43vw]">
            <img
            src="/web01.jpg"
            alt="Poster 1"
            className="h-3/4 object-cover shadow-2xl"
            />
            <a
            href="https://jkdesignlab.com/"
            target="_blank"
            className="absolute inset-0 flex items-center justify-center bg-black/50 text-[#091423] opacity-0 group-hover:opacity-100 transition-opacity"
            >   
            <div className="w-[180px] h-[50px] bg-[#fff] flex items-center justify-center rounded-[5px]">Visit website</div>         
            </a>
        </div>

        <div className="relative group max-[768px]:w-[70vw] max-[1023px]:w-[55vw] lg:w-[43vw]">
            <img
            src="/web02.jpg"
            alt="Poster 2"
            className="h-3/4 object-cover shadow-2xl"
            />
             <a
            href="https://kumdori.co.kr/"
            target="_blank"
            className="absolute inset-0 flex items-center justify-center bg-black/50 text-[#091423] opacity-0 group-hover:opacity-100 transition-opacity"
            >   
            <div className="w-[180px] h-[50px] bg-[#fff] flex items-center justify-center rounded-[5px]">Visit website</div>         
            </a>
        </div>

        <div className="relative group max-[768px]:w-[70vw] max-[1023px]:w-[55vw] lg:w-[43vw]">
            <img
            src="/web03.jpg"
            alt="Poster 3"
            className="h-3/4 object-cover shadow-2xl"
            />
             <a
            href="https://euletraum.com/"
            target="_blank"
            className="absolute inset-0 flex items-center justify-center bg-black/50 text-[#091423] opacity-0 group-hover:opacity-100 transition-opacity"
            >   
            <div className="w-[180px] h-[50px] bg-[#fff] flex items-center justify-center rounded-[5px]">Visit website</div>         
            </a>
        </div>

        <div className="relative group max-[768px]:w-[70vw] max-[1023px]:w-[55vw] lg:w-[43vw]">
            <img
            src="/web06.jpg"
            alt="Poster 6"
            className="h-3/4 object-cover shadow-2xl"
            />
              <a
            href="https://c2l-connect.com/"
            target="_blank"
            className="absolute inset-0 flex items-center justify-center bg-black/50 text-[#091423] opacity-0 group-hover:opacity-100 transition-opacity"
            >   
            <div className="w-[180px] h-[50px] bg-[#fff] flex items-center justify-center rounded-[5px]">Visit website</div>         
            </a>
        </div>

        <div className="relative group max-[768px]:w-[70vw] max-[1023px]:w-[55vw] lg:w-[43vw]">
            <img
            src="/web04.jpg"
            alt="Poster 4"
            className="h-3/4 object-cover shadow-2xl"
            />
             <a
            href="https://b2model.com/"
            target="_blank"
            className="absolute inset-0 flex items-center justify-center bg-black/50 text-[#091423] opacity-0 group-hover:opacity-100 transition-opacity"
            >   
            <div className="w-[180px] h-[50px] bg-[#fff] flex items-center justify-center rounded-[5px]">Visit website</div>         
            </a>
        </div>

        <div className="relative group max-[768px]:w-[70vw] max-[1023px]:w-[55vw] lg:w-[43vw]">
            <img
            src="/web05.jpg"
            alt="Poster 5"
            className="h-3/4 object-cover shadow-2xl"
            />
             <a
            href="https://www.no1cats.com/"
            target="_blank"
            className="absolute inset-0 flex items-center justify-center bg-black/50 text-[#091423] opacity-0 group-hover:opacity-100 transition-opacity"
            >   
            <div className="w-[180px] h-[50px] bg-[#fff] flex items-center justify-center rounded-[5px]">Visit website</div>         
            </a>
        </div>

        <div className="relative group max-[768px]:w-[70vw] max-[1023px]:w-[55vw] lg:w-[43vw]">
            <img
            src="/web07.jpg"
            alt="Poster 7"
            className="h-3/4 object-cover shadow-2xl"
            />
             <a
            href="https://www.no1cats.com/"
            target="_blank"
            className="absolute inset-0 flex items-center justify-center bg-black/50 text-[#091423] opacity-0 group-hover:opacity-100 transition-opacity"
            >   
            <div className="w-[180px] h-[50px] bg-[#fff] flex items-center justify-center rounded-[5px]">Visit website</div>         
            </a>
        </div>
        </motion.div>
      
        <div className='class="lg:w-[calc(100%-32.84722222222222vw)] lg:mt-0 relative left-24'>
            <div className='max-lg:hidden  tracking-[-0.7px] noto-sans-kr-medium text-[18px] max-[1600px]:text-[16px] leading-[133%] max-lg:max-w-[290px] max-lg:mx-auto'> 
            기업 프로젝트에 참여해 반응형 웹사이트 제작을 진행한 경험이 있습니다.<br/>
            클라이언트와의 줌 미팅 및 기획 회의를 통해 요구사항을 정확히 파악하고,<br/>
            원하는 분위기와 기능을 구현할 수 있도록 구조를 설계하고 수정했습니다.<br/>
            HTML과 CSS를 기반으로 기존 코드를 이해하고 직접 수정하며,<br/>
            기획부터 구현까지 원활한 소통과 협업을 통해 완성도 높은 결과물을 도출했습니다.


            </div>
            <div className='mt-[35px] lg:mt-[2.338888888888889vw] '>
                {/* <a href='file:///C:/Users/User/Downloads/%EC%9A%B0%EB%A6%AC%EB%B0%94%EC%9D%B4%EB%AF%B8%20%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4.pdf' target="_balnk" className='w-[200px] h-[70px] text-white bg-[#091423] rounded-[5px] block leading-[70px]'>
                    <span className='host-grotesk-bold relative overflow-visible flex flex-col items-center'>
                        <span className='opacity-0 flex absolute flex-nowrap items-center'>SEE MORE</span>
                        <span className='flex absolute flex-nowrap items-center'>SEE MORE</span>
                    </span>
                </a>     */}
                <a
                href="#"
                className="group relative inline-flex items-center justify-center rounded-[5px] h-[80px] lg:px-[2.7777777777777777vw] lg:text-[0.9722222222222222vw] bg-[#091423] min-w-[233px] lg:min-w-[13.555555555555555vw] overflow-hidden"
              >
                  <span className="ransition-transform duration-300 group-hover:bottom-16 rotate-[135deg] absolute left-2 bottom-2 noto-sans-kr-medium group flex overflow-hidden text-white ">
                  
                  <img className="rotate-[90deg] w-[10px] translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center"
                   src={process.env.PUBLIC_URL + 'arrow.png'} alt='arrow' />
                  <img className="w-[10px] translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-center"
                   src={process.env.PUBLIC_URL + 'arrow.png'} alt='arrow' />
                
                </span>
               <span className="noto-sans-kr-medium group relative flex flex-col overflow-hidden  text-white ">
                    <span className="translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center">
                    SEE MORE
                      </span>
                    <span className="translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-center">SEE MORE</span>
                  </span>

                  <span className="ransition-transform duration-300 group-hover:top-16 rotate-[315deg] absolute top-2 right-2 noto-sans-kr-medium group flex overflow-hidden text-white ">
                  
                      <img className="rotate-[90deg] w-[10px] translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center"
                       src={process.env.PUBLIC_URL + 'arrow.png'} alt='arrow' />
                      <img className="w-[10px] translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-center"
                       src={process.env.PUBLIC_URL + 'arrow.png'} alt='arrow' />
                    
                  </span>
              </a>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Section04;
