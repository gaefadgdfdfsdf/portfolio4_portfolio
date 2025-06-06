import React, { useEffect, useRef, useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { colorHeaderState } from '../store';
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

const Section03 = () => {
  const section03Ref = useRef(null);
  const setColorHeader = useSetRecoilState(colorHeaderState);

// text opacity
const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  const [isCard1Narrow, setIsCard1Narrow] = useState(false);
  const [isCard2Narrow, setIsCard2Narrow] = useState(false);
  const [isCard3Narrow, setIsCard3Narrow] = useState(false);
  const [isCard4Narrow, setIsCard4Narrow] = useState(false);

  useEffect(() => {
    const observer1 = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        setIsCard1Narrow(width < 260);
      }
    });

    const observer2 = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        setIsCard2Narrow(width < 260);
      }
    });

    const observer3 = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        setIsCard3Narrow(width < 260);
      }
    });

     const observer4 = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        setIsCard4Narrow(width < 260);
      }
    });

    if (card1Ref.current) observer1.observe(card1Ref.current);
    if (card2Ref.current) observer2.observe(card2Ref.current);
    if (card3Ref.current) observer3.observe(card3Ref.current);
    if (card4Ref.current) observer4.observe(card4Ref.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
      observer4.disconnect();
    };
  }, []);
// text opacity
 

 // 화면 폭 상태
 const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1024);

 // 화면 크기 변화 감지
 useEffect(() => {
     const handleResize = () => {
         setIsWideScreen(window.innerWidth >= 1024);
     };

     window.addEventListener("resize", handleResize);

     // 초기 체크
     handleResize();

     return () => {
         window.removeEventListener("resize", handleResize);
     };
 }, []);



  const { scrollYProgress } = useScroll({
    target: section03Ref,
    offset: ["start start", "end end"],
  });

//   const div1Width = useTransform(scrollYProgress, [0, 0.25], ["100%", "9.29166666666667vw"]);
//   const div2Width = useTransform(scrollYProgress, [0.25, 0.5], ["100%", "9.29166666666667vw"]);
//   const div3Width = useTransform(scrollYProgress, [0.5, 0.75], ["100%", "9.29166666666667vw"]);
//   const div4Width = useTransform(scrollYProgress, [0.75, 1], ["100%", "9.29166666666667vw"]);
  

    // 1024 이상일 때만 transform 적용, 아니면 고정값 사용
    const div1Width = useTransform(
        scrollYProgress,
        [0, 0.25],
        isWideScreen ? ["34.236111111111114vw", "9.29166666666667vw"] : ["100%", "100%"]
    );

    const div2Width = useTransform(
        scrollYProgress,
        [0.25, 0.5],
        isWideScreen ? ["34.236111111111114vw", "9.29166666666667vw"] : ["100%", "100%"]
    );
    const div3Width = useTransform(
        scrollYProgress,
        [0.5, 0.75],
        isWideScreen ? ["34.236111111111114vw", "9.29166666666667vw"] : ["100%", "100%"]
    );
    const div4Width = useTransform(
        scrollYProgress,
        [0.75, 1],
        isWideScreen ? ["34.236111111111114vw", "9.29166666666667vw"] : ["100%", "100%"]
    );
  

  useEffect(() => {
    const handleScroll = () => {
      if (!section03Ref.current) return;

      const header = document.getElementById("header_sticky");
      if (!header) return;

      const headerRect = header.getBoundingClientRect();
      const sectionRect = section03Ref.current.getBoundingClientRect();

      // 헤더 하단이 section03 영역에 닿아 있는지 체크
      const isHeaderBottomInSection =
        headerRect.bottom >= sectionRect.top && headerRect.bottom <= sectionRect.bottom;

      setColorHeader(isHeaderBottomInSection);
    };

    handleScroll(); // 초기 상태 반영
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setColorHeader]);
  

  return (
   <>
    <div ref={section03Ref} id="section03Ref" className='bg-[#091423] lg:h-[500vh]'>
        <div id="process_block" className='sticky top-[3.4722222222222223vw] '>
            <div  className='lg:flex flex-col justify-between lg:h-[calc(100vh+1px-3.472vw)] lg:sticky lg:top-[var(3.4722222222222223vw)]'>
                <section  className='pt-[25px] lg:pt-[2.1111111111111112vw]'>
                    <div className='w-max-full pl-[1.388vw] pr-[1.388vw]'>
                        <div className='relative'>
                            <div className='hidden max-lg:hidden host-grotesk-superbold inline-flex absolute left-0 opacity-0'>SKILLSET</div>
                            <div className='relative lg:top-2 font-medium text-white max-lg:text-[1.5vw] lg:text-[.8933333333333334vw] -mb-4 max-[768px]:text-[2.3277777777777777vw] pointer-events-none'>SKILLSET</div>
                            <div>
                                <h2 className='noto-sans-kr-medium text-white leading-[139%] tracking-[-0.01em] lg:text-[2.188888888888889vw]'>
                                    <div className='overflow-hidden'>
                                        <div className='relative block text-start'>
                                            <span className='ml-[90.953px]'>
                                            포토샵과 일러스트를 활용한 세련된 디자인 구현과, HTML, CSS, JavaScript, React를 
                                            기반으로 한 효율적인 웹 개발 능력을 결합하여, 사용자 중심의 직관적이고 혁신적인 웹 경험을 제공합니다.
                                            </span>
                                        </div>
                                    </div>
                                    {/* <div className='overflow-hidden'>
                                        <div className='relative block text-start'>
                                        기반으로 한 효율적인 웹 개발 능력을 결합하여, 사용자 중심의 직관적이고 혁신적인 웹 경험을 제공합니다.
                                        </div>
                                    </div> */}
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='lg:overflow-hidden mt-[70px] lg:mt-[11.861111111111112vw] relative pt-[0.694vw]'>
                    <div className='h-[0.5px] bg-white top-0 left-0 w-full'></div>
                    <div id="section03_static" className='lg:static lg:flex lg:flex-nowrap text-white '>
                        <div  className='relative z-[1px]' >
                            <motion.div ref={card1Ref}  style={{ width: div1Width }} id="reduce" className='overflow-hidden lg:min-h-[27.583333vw] lg:w-[34.236111111111114vw] px-[1.38vw] pt-[11px] lg:pt-[1.38vw] pb-5 lg:pb-[2.875vw] lg:flex flex-col justify-between flex-none'>
                                <div className='flex justify-between'>
                                    <div className='pt-[9px] lg:pt-0'>
                                        <div className='host-grotesk-bold text-[12px] lg:text-[0.9722222222222222vw] leading-[114%] font-medium uppercase hide_br_tablet'>DESIGN</div>
                                        <div className='mt-[13px] lg:mt-[1.9444444444444444vw]'>
                                            <img className='lg:w-[2.7777777777777777vw] h-auto' src={process.env.PUBLIC_URL + '/icon_1.svg'} alt='icon_1'/>
                                        </div>
                                    </div>
                                    <div
                                    className='max-[400px]:left-[170px] max-[400px]:text-[30px] max-[450px]:text-[40px] max-[525px]:left-[160px] max-[580px]:left-56 max-[580px]:text-[50px]  max-[600px]:left-48 max-lg:left-12 max-[1290px]:left-20  w-[500px] relative left-32 max-[600px]:text-[60px]  host-grotesk-bold text-[92px] lg:text-[3.722222222222223vw] font-medium leading-none lg:mt-[1.7722222222222222vw]'> 
                                    Photoshop
                                    </div>
                                </div>
                                <div
                                style={{
                                opacity: isCard1Narrow ? 0 : 1,
                                transition: "opacity 0.5s ease-in-out",
                            }} 
                                className='w-[600px] flex relative bottom-6 items-end lg:block mt-[30px] lg:mt-0 min-h-[110px] lg:min-h-px'>
                                    <div className='max-lg:leading-[130%] noto-sans-kr-medium lg:mt-[3.4722222222222223vw] w-full lg:text-[1.25vw] lg:leading-[133%] lg:tracking-[-0.02em]'>
                                    포토샵의 기초 기능을 활용하여 창의적이고<br/> 효율적인 디자인 작업을 구현합니다.
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div  className='relative z-[1px] lg:pt-0 pt-[0.694vw]' style={{ width: div2Width }}>
                            <div className='absolute top-0 left-0 h-full w-[0.5px] bg-white max-lg:hidden'></div>
                            <div className='absolute top-0 left-0 w-full h-[0.5px] bg-white hidden max-lg:block'></div>
                            <motion.div ref={card2Ref} style={{ width: div2Width }} id="reduce" className='overflow-hidden lg:min-h-[27.583333vw] lg:w-[34.236111111111114vw] px-[1.38vw] pt-[11px] lg:pt-[1.38vw] pb-5 lg:pb-[2.875vw] lg:flex flex-col justify-between flex-none'>
                            <div className='flex justify-between'>
                                    <div className='pt-[9px] lg:pt-0'>
                                        <div className='host-grotesk-bold text-[12px] lg:text-[0.9722222222222222vw] leading-[114%] font-medium uppercase hide_br_tablet'>DESIGN</div>
                                        <div className='mt-[13px] lg:mt-[1.9444444444444444vw]'>
                                            <img className='lg:w-[2.7777777777777777vw] h-auto' src={process.env.PUBLIC_URL + '/icon_2.svg'} alt='icon_2'/>
                                        </div>
                                    </div>
                                    <div className='max-[400px]:text-[30px] max-[450px]:text-[40px] max-[525px]:left-[190px] max-[580px]:left-60 max-[580px]:text-[50px]  max-[600px]:left-56 max-lg:left-24 max-[1290px]:left-24 w-[500px] relative left-40 max-[600px]:text-[60px] host-grotesk-bold text-[92px] lg:text-[3.722222222222223vw]  font-medium leading-none lg:mt-[1.7722222222222222vw]'>
                                    Illustrator
                                    </div>
                                </div>
                                <div
                                style={{
                                opacity: isCard2Narrow ? 0 : 1,
                                transition: "opacity 0.5s ease-in-out",
                            }}  
                                className='w-[600px] relative bottom-6 flex items-end lg:block mt-[30px] lg:mt-0 min-h-[110px] lg:min-h-px'> 
                                    <div className='max-lg:leading-[130%] noto-sans-kr-medium lg:mt-[3.4722222222222223vw] w-full lg:text-[1.25vw] lg:leading-[133%] lg:tracking-[-0.02em]'>
                                    일러스트 기초 기능을 활용하여<br/>
                                    간단한 SVG 아이콘 제작이 가능합니다.
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className='relative z-[1px] lg:pt-0 pt-[0.694vw]' >
                            <div className='absolute top-0 left-0 h-full w-[0.5px] bg-white max-lg:hidden'></div>
                            <div className='absolute top-0 left-0 w-full h-[0.5px] bg-white hidden max-lg:block'></div>
                            <motion.div ref={card3Ref} style={{ width: div3Width }} id="reduce" className='overflow-hidden lg:min-h-[27.583333vw] lg:w-[34.236111111111114vw] px-[1.38vw] pt-[11px] lg:pt-[1.38vw] pb-5 lg:pb-[2.875vw] lg:flex flex-col justify-between flex-none'>
                            <div className='flex justify-between'>
                                    <div className='pt-[9px] lg:pt-0'>
                                        <div className='host-grotesk-bold text-[12px] lg:text-[0.9722222222222222vw] leading-[114%] font-medium uppercase hide_br_tablet'>Development</div>
                                        <div className='mt-[13px] lg:mt-[1.9444444444444444vw]'>
                                            <img className='lg:w-[2.7777777777777777vw] h-auto' src={process.env.PUBLIC_URL + '/icon_3.svg'} alt='icon_3'/>
                                        </div>
                                    </div>
                                    <div className='max-[400px]:left-[120px] max-[400px]:text-[30px] max-[450px]:text-[40px] max-[525px]:left-[100px] max-[580px]:text-[50px] max-[600px]:left-40 max-lg:left-8 max-[1290px]:left-8 w-[500px] relative left-16 max-[600px]:text-[60px] host-grotesk-bold text-[92px] lg:text-[3.722222222222223vw]  font-medium leading-none lg:mt-[1.7722222222222222vw]'>
                                        HTML+CSS
                                    </div>
                                </div>
                                <div
                                 style={{
                                opacity: isCard3Narrow ? 0 : 1,
                                transition: "opacity 0.5s ease-in-out",
                            }}   
                                className='w-[600px] relative bottom-6 flex items-end lg:block mt-[30px] lg:mt-0 min-h-[110px] lg:min-h-px'>
                                    <div className='max-lg:leading-[130%]  noto-sans-kr-medium lg:mt-[3.4722222222222223vw] w-full lg:text-[1.25vw] lg:leading-[133%] lg:tracking-[-0.02em]'>
                                    HTML과 CSS의 기초 지식을 바탕으로<br/>
                                    홈페이지의 구조를 제작하고, Animation CSS를 활용한<br/>
                                    다양한 인터랙션 구현이 가능합니다.
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div  className='relative z-[1px] lg:pt-0 pt-[0.694vw]' >
                            <div className='absolute top-0 left-0 h-full w-[0.5px] bg-white max-lg:hidden'></div>
                            <div className='absolute top-0 left-0 w-full h-[0.5px] bg-white hidden max-lg:block'></div>   
                            <motion.div ref={card4Ref} style={{ width: div4Width }} id="reduce" className='overflow-hidden lg:min-h-[27.583333vw] lg:w-[34.236111111111114vw] px-[1.38vw] pt-[11px] lg:pt-[1.38vw] pb-5 lg:pb-[2.875vw] lg:flex flex-col justify-between flex-none'>
                                <div className='flex justify-between'>
                                        <div className='pt-[9px] lg:pt-0'>
                                            <div className='host-grotesk-bold text-[12px] lg:text-[0.9722222222222222vw] leading-[114%] font-medium uppercase hide_br_tablet'>Development</div>
                                            <div className='mt-[13px] lg:mt-[1.9444444444444444vw]'>
                                                <img className='lg:w-[2.7777777777777777vw] h-auto' src={process.env.PUBLIC_URL + '/icon_4.svg'} alt='icon_4'/>
                                            </div>
                                        </div>
                                        <div className='max-[400px]:left-[135px] max-[400px]:text-[30px] max-[450px]:text-[40px] max-[525px]:left-[130px] max-[580px]:text-[50px]  max-[600px]:left-48 max-[1290px]:left-14 max-lg:left-20 w-[500px] relative left-20 max-[600px]:text-[60px] host-grotesk-bold text-[92px] lg:text-[3.722222222222223vw]  font-medium leading-none lg:mt-[1.7722222222222222vw]'>
                                        Javascript
                                        </div>
                                    </div>
                                    <div
                                     style={{
                                opacity: isCard4Narrow ? 0 : 1,
                                transition: "opacity 0.5s ease-in-out",
                            }} 
                                     className='w-[600px] relative bottom-6 flex items-end lg:block mt-[30px] lg:mt-0 min-h-[110px] lg:min-h-px'>
                                        <div className='max-lg:leading-[130%]  noto-sans-kr-medium lg:mt-[3.4722222222222223vw] w-full lg:text-[1.25vw] lg:leading-[133%] lg:tracking-[-0.02em]'>
                                        스크롤, 휠, 클릭 등 다양한 이벤트 리스너를 활용해<br/>
                                        요소 애니메이션, 화면 전환 등<br/>
                                        동적인 UI를 JavaScript로 구현이 가능합니다.
                                        </div>
                                    </div>
                                </motion.div>
                        </div>
                        <div className='relative z-[1px] lg:pt-0 pt-[0.694vw]'>
                            <div className='absolute top-0 left-0 h-full w-[0.5px] bg-white max-lg:hidden'></div>
                            <div className='absolute top-0 left-0 w-full h-[0.5px] bg-white hidden max-lg:block'></div>
                            <div id="reduce" className='lg:min-h-[27.583333vw] lg:w-[34.236111111111114vw] px-[1.38vw] pt-[11px] lg:pt-[1.38vw] pb-5 lg:pb-[2.875vw] lg:flex flex-col justify-between flex-none'>
                            <div className='flex justify-between'>
                                    <div className='pt-[9px] lg:pt-0'>
                                        <div className='host-grotesk-bold text-[12px] lg:text-[0.9722222222222222vw] leading-[114%] font-medium uppercase hide_br_tablet'>Development</div>
                                        <div className='mt-[13px] lg:mt-[1.9444444444444444vw]'>
                                            <img className='lg:w-[2.7777777777777777vw] h-auto' src={process.env.PUBLIC_URL + '/icon_2.svg'} alt='icon_2'/>
                                        </div>
                                    </div>
                                    <div className='max-[400px]:text-[30px] max-[450px]:right-4 max-[450px]:text-[40px] max-[500px]:right-10 max-[525px]:right-12 max-[580px]:right-8 max-[580px]:text-[50px]  max-lg:right-4 max-[600px]:right-4 relative lg:right-20 max-[600px]:text-[60px] host-grotesk-bold text-[92px] lg:text-[3.722222222222223vw]  font-medium leading-none lg:mt-[1.7722222222222222vw]'>
                                    React
                                    </div>
                                </div>
                                <div className='relative bottom-6 flex items-end lg:block mt-[30px] lg:mt-0 min-h-[110px] lg:min-h-px'>
                                    <div className='max-lg:leading-[130%]  noto-sans-kr-medium lg:mt-[3.4722222222222223vw] w-full lg:text-[1.25vw] lg:leading-[133%] lg:tracking-[-0.02em]'>
                                    React를 기반으로 한 화면 구성과<br/>
                                    Framer Motion, Recoil을 활용한 인터랙션 구현이 가능하며,<br/>
                                    ScrollTrigger, Swiper, useEffect 등<br/>
                                    주요 기능에 대한 이해도를 갖추고 있습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                  
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Section03