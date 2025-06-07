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
              src={process.env.PUBLIC_URL + "/web01.jpg"}

              alt="Poster 1"
              className="h-3/4 object-cover shadow-2xl"
            />
            <a
              // href="https://jkdesignlab.com/"
              href="https://gaefadgdfdfsdf.github.io/parameta/"
              target="_blank"
              className="absolute inset-0 flex items-center justify-center bg-black/50 text-[#091423] opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <div className="w-[180px] h-[50px] bg-[#fff] flex items-center justify-center rounded-[5px]">Visit website</div>
            </a>
          </div>

          <div className="relative group max-[768px]:w-[70vw] max-[1023px]:w-[55vw] lg:w-[43vw]">
            <img
              src={process.env.PUBLIC_URL + "/web02.jpg"}
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
              src={process.env.PUBLIC_URL + "/web03.jpg"}
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
              src={process.env.PUBLIC_URL + "/web06.jpg"}
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
              src={process.env.PUBLIC_URL + "/web04.jpg"}
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
              src={process.env.PUBLIC_URL + "/web05.jpg"}
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
              src={process.env.PUBLIC_URL + "/web07.jpg"}
              alt="Poster 7"
              className="h-3/4 object-cover shadow-2xl"
            />
            <a
              href="https://gaefadgdfdfsdf.github.io/css_animation_bird/"
              target="_blank"
              className="absolute inset-0 flex items-center justify-center bg-black/50 text-[#091423] opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <div className="w-[180px] h-[50px] bg-[#fff] flex items-center justify-center rounded-[5px]">Visit website</div>
            </a>
          </div>
        </motion.div>

        <div className='class="lg:w-[calc(100%-32.84722222222222vw)] lg:mt-0 relative left-24'>
          <div className='max-lg:hidden  tracking-[-0.7px] noto-sans-kr-medium text-[18px] max-[1600px]:text-[16px] leading-[133%] max-lg:max-w-[290px] max-lg:mx-auto'>
            기업 프로젝트에 참여해 반응형 웹사이트 제작을 진행한 경험이 있습니다.<br />
            클라이언트와의 줌 미팅 및 기획 회의를 통해 요구사항을 정확히 파악하고,<br />
            원하는 분위기와 기능을 구현할 수 있도록 구조를 설계하고 수정했습니다.<br />
            HTML과 CSS를 기반으로 기존 코드를 이해하고 직접 수정하며,<br />
            기획부터 구현까지 원활한 소통과 협업을 통해 완성도 높은 결과물을 도출했습니다.


          </div>
          <div className='mt-[35px] lg:mt-[2.338888888888889vw] max-md:hidden'>
            <div id="setinterval_icon" className="flex justify-between w-96">
             <motion.div
             animate={{
              scale: [1, 1.2, 1], // 위로 10px 튀고 다시 내려옴
            }}
            transition={{
              duration: 1.5, // 한 번 bounce하는 데 걸리는 시간
              repeat: Infinity, // 무한 반복
              ease: "easeInOut",
             
            }}
              whileHover={{ scale: 1.1 }}
              style={{ originX: 0.5, originY: 0.5 }} >       
                <svg width="45" height="46" viewBox="0 0 45 46" fill="#091423" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6171 3.56917C27.6112 1.71518 24.07 0.645508 20.279 0.645508C16.4913 0.645508 12.953 1.71334 9.94873 3.56438V9.87879C12.6062 7.26092 16.254 5.64551 20.279 5.64551C24.3077 5.64551 27.9583 7.26379 30.6164 9.88576L30.6171 3.56917ZM30.6292 9.89844C33.3279 12.5669 35 16.2714 35 20.3664C35 24.4612 33.3281 28.1655 30.6297 30.834H36.9957C38.8993 27.8005 40 24.212 40 20.3664C40 16.5207 38.8992 12.9321 36.9955 9.89844L30.6292 9.89844ZM30.612 37.1668L30.6113 30.8521C27.9536 33.4711 24.3051 35.0874 20.279 35.0874C16.254 35.0874 12.6062 33.4719 9.94873 30.8541V37.1685C12.953 39.0195 16.4913 40.0874 20.279 40.0874C24.0679 40.0874 27.6071 39.0189 30.612 37.1668ZM3.56277 30.8347L9.92838 30.834C7.22999 28.1655 5.55811 24.4612 5.55811 20.3664C5.55811 16.2714 7.23015 12.567 9.92875 9.89851L3.563 9.8978C1.65906 12.9316 0.558105 16.5204 0.558105 20.3664C0.558105 24.2123 1.65897 27.801 3.56277 30.8347ZM20.2765 14.6953C17.1442 14.6953 14.605 17.2345 14.605 20.3668C14.605 23.4991 17.1442 26.0383 20.2765 26.0383C23.4088 26.0383 25.948 23.4991 25.948 20.3668C25.948 17.2345 23.4088 14.6953 20.2765 14.6953ZM9.60498 20.3668C9.60498 14.4731 14.3828 9.69531 20.2765 9.69531C26.1702 9.69531 30.948 14.4731 30.948 20.3668C30.948 26.2605 26.1702 31.0383 20.2765 31.0383C14.3828 31.0383 9.60498 26.2605 9.60498 20.3668Z" />
                </svg>
              </motion.div>
              <motion.div 
               animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.4, // 한 번 bounce하는 데 걸리는 시간
                repeat: Infinity, // 무한 반복
                ease: "easeInOut",
               
              }}
              whileHover={{ scale: 1.1 }} >
           
                <svg width="49" height="38" viewBox="0 0 49 38" stroke="#E6E8EA" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31 3.00009C32.7626 3.00009 34.7324 3.00012 36.345 3.00012C37.9101 3.00012 39.1759 4.26886 39.1539 5.83376C39.1164 8.48721 39.0498 11.618 39.0498 14.2323L44.7596 19L39.0498 23.7677V32.1665C39.0498 33.7314 37.782 35 36.2171 35C34.5457 35 32.5449 35 31 35" stroke="#E6E8EA" stroke-width="5.1515" />
                  <path d="M18.7598 3.00009C16.9971 3.00009 15.0274 3.00012 13.4148 3.00012C11.8497 3.00012 10.5838 4.26886 10.6059 5.83376C10.6433 8.48721 10.7099 11.618 10.7099 14.2323L5.00021 19L10.7099 23.7677V32.1665C10.7099 33.7314 11.9778 35 13.5427 35C15.2141 35 17.2149 35 18.7598 35" stroke="#E6E8EA" stroke-width="5.1515" />
                </svg>
              </motion.div>
              <motion.div 
               animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.3, // 한 번 bounce하는 데 걸리는 시간
                repeat: Infinity, // 무한 반복
                ease: "easeInOut",
               
              }}
              whileHover={{ scale: 1.1 }}>     
                <svg width="37" height="37" viewBox="0 0 37 37" fill="#091423" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0869 21.0879V29.376C11.8726 28.4452 8.55482 25.1275 7.62391 20.9132L15.914 20.9132L11.1385 16.0871H7.62379C8.55455 11.8727 11.8724 8.55471 16.0869 7.62385V16.0867L20.9168 16.0904L20.9082 25.9604L16.0869 21.0879ZM16.0869 37V33.8646C13.6082 33.4784 11.3233 32.5068 9.37813 31.0957L7.16627 33.3075L3.75371 29.895L5.95598 27.6927C4.51684 25.7322 3.52622 23.422 3.13534 20.9132H0V16.0871H3.13526C3.52093 13.6113 4.4907 11.3288 5.89924 9.38496L3.73193 7.21765L7.14449 3.80509L9.30037 5.96097C11.2623 4.51908 13.5751 3.52661 16.0869 3.1353V0H20.913V3.1353C23.4218 3.52614 25.732 4.51674 27.6925 5.95587L29.9166 3.73176L33.3292 7.14432L31.0956 9.37797C32.5068 11.3233 33.4785 13.6083 33.8646 16.0871H37V20.9132H33.8645C33.4732 23.4249 32.4807 25.7376 31.0389 27.6995L33.3075 29.9681L29.895 33.3807L27.6149 31.1006C25.6712 32.5091 23.3887 33.4789 20.913 33.8646V37H16.0869ZM20.913 16.0871V7.62385C25.1274 8.5547 28.4453 11.8727 29.3761 16.0871H20.913ZM20.913 20.9132L29.3759 20.9132C28.445 25.1275 25.1272 28.4452 20.913 29.376V20.9132Z" />
                </svg>
              </motion.div>
              <motion.div
               animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.2, // 한 번 bounce하는 데 걸리는 시간
                repeat: Infinity, // 무한 반복
                ease: "easeInOut",
               
              }}
               whileHover={{ scale: 1.1 }}>
               
                <svg className="relative -top-2" width="51" height="51" viewBox="0 0 51 51" fill="#091423" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2109 11.3574H35.2655L35.2655 11.4249L35.3633 11.3271L39.5215 15.4853L39.4275 15.5794L39.4275 36.7168H33.5469V21.4733L33.5801 21.4258L29.4224 17.2681L29.4524 17.238L14.2109 17.238V11.3574ZM29.4219 27.3661L29.4275 27.3581V41.3506L23.5469 41.3506V31.544L23.6152 31.4463L19.457 27.2881L19.457 35.5498L14.7207 40.2861L10.5625 36.1279L19.4524 27.238L9.67969 27.238V21.3574H25.2636V21.4268L29.4219 17.2686L29.4219 27.3661Z" />
                </svg>
              </motion.div>
              <motion.div
               animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.1, // 한 번 bounce하는 데 걸리는 시간
                repeat: Infinity, // 무한 반복
                ease: "easeInOut",
               
              }}
               whileHover={{ scale: 1.1 }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="#091423" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9175 18.1053L3.19764 25.8251L6.17493 28.8024L13.8947 21.0826L13.8947 32H18.1053V21.0825L25.8251 28.8024L28.8024 25.8251L21.0826 18.1053H32V13.8947L21.0826 13.8947L28.8024 6.17498L25.8251 3.19769L18.1053 10.9175V1.84048e-07L13.8947 0L13.8947 10.9174L6.17498 3.19767L3.19769 6.17496L10.9175 13.8947L3.68096e-07 13.8947L0 18.1053L10.9175 18.1053ZM18.1111 13.9002L10.9526 13.8947L18.1048 21.1228L18.1111 13.9002Z" />
                </svg>
              </motion.div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Section04;
