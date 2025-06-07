import React, { useEffect, useRef, useState, useCallback } from 'react';

const TypingText = ({ phrases, typingSpeed = 120, deletingSpeed = 50, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const charIndexRef = useRef(0);
  const frameRef = useRef(null);
  const lastTimeRef = useRef(0);
  const pauseRef = useRef(false);

  // 자식 컴포넌트에 함수를 props로 전달할 때 useCallback을 사용하여 불필요한 렌더링을 방지 가능
  const tick = useCallback((time) => {
    const delta = time - lastTimeRef.current;
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    if (pauseRef.current) {
      frameRef.current = requestAnimationFrame(tick);
      return;
    }

    if (delta > speed) {
      const currentPhrase = phrases[phraseIndex];
      if (!isDeleting) {
        charIndexRef.current += 1;
        setDisplayText(currentPhrase.slice(0, charIndexRef.current));

        if (charIndexRef.current === currentPhrase.length) {
          pauseRef.current = true;
          setTimeout(() => {
            setIsDeleting(true);
            pauseRef.current = false;
          }, pauseTime);
        }
      } else {
        charIndexRef.current -= 1;
        setDisplayText(currentPhrase.slice(0, charIndexRef.current));

        if (charIndexRef.current === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }

      lastTimeRef.current = time;
    }

    frameRef.current = requestAnimationFrame(tick);
  }, [deletingSpeed, typingSpeed, isDeleting, phrases, phraseIndex, pauseTime]);

  useEffect(() => {
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [tick]);

  return (
    <span>
      {displayText}
      
    </span>
  )
  
};

const Section05 = () => {
  return (
    <>
      <section id="contact" className='my-[100px] lg:my-[8.333333333333332vw] overflow-hidden'>
        <div className='max-w-full pl-[1.388vw] pr-[1.388vw]'>
          <div className='noto-sans-kr-medium  text-[#091423] max-lg:max-w-[550px] max-lg:mx-auto mb-[-5px] lg:mb-0'>
            <h2 className='max-[550px]:text-[45px] max-[620px]:text-[60px] text-[76px] lg:text-[8.222222222222223vw] tracking-tight font-medium leading-[100%] lg:leading-[116%]'>
            Growing as a 
           <br />
           frontend 
              <svg class="ml-[18px] relative -top-0.5 inline-block lg:hidden" width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.7468 16.7559V5.0489H27.6836V23.3571L4.99444 0.667969L0 5.66241L22.6122 28.2746L4.28723 28.2746L4.28723 35.3378H29.6754L29.7882 35.4507L34.6198 30.6191L27.7517 23.7511L34.7468 16.7559Z" fill="#091423"></path>
              </svg>
            </h2>
          </div>
          <div className='max-lg:max-w-[550px] max-lg:mx-auto lg:ml-[40.763888888888886vw] lg:mt-[-8.402777777777779vw] text-right lg:text-left'>
            <div className='lg:mb-[6.319444444444445vw] relative'>
              <div className='max-lg:hidden absolute left-[-5.819444444444445vw] top-[2.430555555555556vw]'>
                <svg class="w-[35px] lg:w-[4.513888888888888vw] h-auto" width="65" height="66" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M49.7134 13.1963L37.1131 0.596053L29.511 8.19817L49.2162 27.9033L0.375508 27.9033L0.375509 38.6543L49.0505 38.6543L29.3274 58.3775L36.9295 65.9796L64.2548 38.6543H64.4976V28.254H49.7134V13.1963Z" fill="#091423"></path>
                </svg>
              </div>
              <h2 className='max-[550px]:ml-56 max-[550px]:text-[45px]  max-[620px]:text-[60px] max-lg:relative max-lg:ml-52 max-lg:flex noto-sans-kr-medium text-[#091423] text-[76px] lg:text-[8.222222222222223vw] tracking-tight font-medium leading-[100%] lg:leading-[86%] whitespace-nowrap'>
                <span className='max-lg:block opacity-0'>.</span>
                <span className='max-lg:block hidden opacity-0'>.</span>
                  <TypingText
                    
                    phrases={['developer', 'craftsman', 'engineer']}
                    typingSpeed={120}
                    deletingSpeed={50}
                    pauseTime={2000}
                  />
              </h2>
            </div>
            <div className='text-center lg:text-left mt-10 lg:mt-0'>
              <div>
                <div className='noto-sans-kr-medium lg:text-[1.25vw] lg:leading-[133%] lg:tracking-[-0.02em]'>
                  <div>
                    &nbsp;Clean code. Bold vision.
                   
                  </div>
                  <div>
                    &nbsp; I’m ready to ship.
                  </div>
                </div>
              </div>
              
              <div className='mt-[37px] lg:mt-[2.638888888888889vw]'>
                
             <a
                href="#"
                className="group relative inline-flex items-center justify-center rounded-[5px] h-[80px] lg:px-[2.7777777777777777vw] lg:text-[0.9722222222222222vw] bg-[#091423] min-w-[223px] lg:min-w-[15.555555555555555vw] overflow-hidden"
              >
                  <span className="ransition-transform duration-300 group-hover:bottom-16 rotate-[135deg] absolute left-2 bottom-2 noto-sans-kr-medium group flex overflow-hidden text-white ">
                  
                  <img className="rotate-[90deg] w-[10px] translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center"
                   src={process.env.PUBLIC_URL + '/arrow.png'} alt='arrow' />
                  <img className="w-[10px] translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-center"
                   src={process.env.PUBLIC_URL + '/arrow.png'} alt='arrow' />
                
                </span>
              
               <span className="noto-sans-kr-medium group relative flex flex-col overflow-hidden  text-white ">
                   <a href="/resume.pdf" download target='_blank' className='leading-[26px]'>
                    <span className="translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center">
                     my resume
                      </span>
                    <span className="translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-center">my resume</span>
                    </a>
                  </span>
                  

                  <span className="ransition-transform duration-300 group-hover:top-16 rotate-[315deg] absolute top-2 right-2 noto-sans-kr-medium group flex overflow-hidden text-white ">
                  
                      <img className="rotate-[90deg] w-[10px] translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center"
                       src={process.env.PUBLIC_URL + '/arrow.png'} alt='arrow' />
                      <img className="w-[10px] translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-center"
                       src={process.env.PUBLIC_URL + '/arrow.png'} alt='arrow' />
                    
                  </span>
              </a>
              </div>

            </div>
          </div>
         
        </div>
      </section>
      <footer className='bg-[#091423] lg:text-[0.9722222222222222vw] lg:h-[calc(100vh+1px-3.472vw)] overflow-hidden'>
        <div className='lg:grid lg:grid-cols-2 font-medium relative border-b border-white border-solid'>
          <div className='line'>
            <ul className="text-white h-full p-0 m-0">
              <li className="group h-[33.3334%] relative overflow-hidden">
                <div className="group-hover:translate-y-0 hover-bg h-full bg-[#E6E8EA] absolute inset-0 translate-y-[100px] transition-transform duration-300"></div>
                <p className="max-[550px]:h-[6.5vw] max-lg:h-[4.5vw] flex items-center pl-[1.388vw] pr-[1.388vw] lg:h-[3vw] lg:pt-0 lg:pb-0 lg:text-[0.9722222222222222vw] relative z-10 transition-colors duration-300 group-hover:text-black">
                   조윤하 980920
                </p>
              </li>

              <li className="group h-[33.3334%] relative overflow-hidden cursor-pointer">
                <div className="group-hover:translate-y-0 hover-bg h-full bg-[#E6E8EA] absolute inset-0 translate-y-[100px] transition-transform duration-300"></div>
                
                <p className="max-[550px]:h-[6.5vw] max-lg:h-[4.5vw]  flex items-center pl-[1.388vw] pr-[1.388vw] lg:h-[3vw] lg:pt-0 lg:pb-0 lg:text-[0.9722222222222222vw] relative z-10 transition-colors duration-300 group-hover:text-black">
                  ISTJ
                </p>
               
              </li>

              <li className="group h-[33.3334%] relative overflow-hidden cursor-pointer p-0">
                <div className="group-hover:translate-y-0 hover-bg h-full bg-[#E6E8EA] absolute inset-0 translate-y-[100px] transition-transform duration-300"></div>
               
                <a href="tel:010-8864-4851" target='_blank' className="max-[550px]:h-[6.5vw] max-lg:h-[4.5vw] flex items-center pl-[1.388vw] pr-[1.388vw] lg:h-[3vw] lg:pt-0 lg:pb-0 lg:text-[0.9722222222222222vw] relative z-10 transition-colors duration-300 group-hover:text-black">
                  010-8864-4851
                </a>
               
              </li>
            </ul>
          </div>
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[0.5px] bg-[#E6E8EA]  h-full z-10"></div>
          <div className="line2 text-white flex justify-between pr-[1.388vw] pl-[1.388vw] lg:pt-[1.1111111111vw] lg:pb-[1.1111111111vw]  lg:flex-col  text-right px-[1.388vw]">
            <div className="flex items-center lg:pt-0 lg:pb-0 lg:justify-end lg:mb-[3.555556vw]">
              JYH
              <svg className="mx-1 lg:mx-[0.20833333333333334vw] -mt-0.5 lg:mt-[-0.1388888888888889vw] w-3.5 lg:w-[0.9722222222222222vw] h-auto" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3806 12.398C10.1206 13.67 8.56058 14.306 6.70058 14.306C4.84058 14.306 3.27458 13.67 2.00258 12.398C0.742578 11.126 0.112578 9.53 0.112578 7.61C0.112578 5.69 0.742578 4.094 2.00258 2.822C3.27458 1.538 4.84058 0.895999 6.70058 0.895999C8.56058 0.895999 10.1206 1.538 11.3806 2.822C12.6526 4.094 13.2886 5.69 13.2886 7.61C13.2886 9.53 12.6526 11.126 11.3806 12.398ZM2.57858 11.912C3.67058 13.04 5.04458 13.604 6.70058 13.604C8.35658 13.604 9.73058 13.04 10.8226 11.912C11.9146 10.772 12.4606 9.338 12.4606 7.61C12.4606 5.882 11.9086 4.448 10.8046 3.308C9.71258 2.168 8.34458 1.598 6.70058 1.598C5.05658 1.598 3.68258 2.168 2.57858 3.308C1.48658 4.448 0.940578 5.882 0.940578 7.61C0.940578 9.338 1.48658 10.772 2.57858 11.912ZM6.75458 11.714C5.63858 11.714 4.72658 11.33 4.01858 10.562C3.31058 9.782 2.95658 8.792 2.95658 7.592C2.95658 6.38 3.29858 5.384 3.98258 4.604C4.67858 3.812 5.60858 3.416 6.77258 3.416C7.69658 3.416 8.44058 3.662 9.00458 4.154C9.58058 4.646 9.92258 5.276 10.0306 6.044H8.66258C8.57858 5.588 8.36858 5.228 8.03258 4.964C7.70858 4.7 7.28258 4.568 6.75458 4.568C5.98658 4.568 5.39258 4.85 4.97258 5.414C4.56458 5.978 4.36058 6.704 4.36058 7.592C4.36058 8.468 4.57658 9.182 5.00858 9.734C5.45258 10.286 6.03458 10.562 6.75458 10.562C7.33058 10.562 7.78658 10.4 8.12258 10.076C8.47058 9.752 8.67458 9.338 8.73458 8.834H10.0666C10.0426 9.65 9.74258 10.328 9.16658 10.868C8.56658 11.432 7.76258 11.714 6.75458 11.714Z" fill="#E6E8EA"></path>
              </svg>
              2025
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-between py-3.5 lg:py-0">
              <nav className="flex justify-between lg:justify-end gap-[1.25vw] mt-[20px]">
                <a href="https://github.com/gaefadgdfdfsdf?tab=repositories" target='_blank'>
                  <span className="group h-[1em] relative flex flex-col overflow-hidden">
                    <span className="translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center" >GIT</span>
                    <span className="translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-center" >GIT</span>
                  </span>
                </a>
              </nav>

              <div className="max-lg:hidden mt-[20px]">
                <ul className="flex gap-[1.25vw]">
                  <li>
                    {/* 이메일로 mailto */}
                    <a href="mailto:joyunha4@gmail.com" target='_blank'>
                      <span className=" group leading-[132%] h-[1.3em] relative flex flex-col overflow-hidden">
                        <span className="translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center" >joyunha4@gmail.com</span>
                        <span className="translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-center" >joyunha4@gmail.com</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <div class="px-[1.388vw] pb-[1.388vw] lg:pb-0 pt-5 lg:pt-[3.4722222222222223vw] overflow-hidden">
          <div className="overflow-hidden">
           
           <svg viewBox="0 0 2000 900" className="w-full h-auto" width="1407" height="635" fill="white" xmlns="http://www.w3.org/2000/svg" >
                <path class="st0" d="M580.06,21.25V687.5c0,106.55-84.46,191.06-195.47,191.06h-77.22c-114.63,0-205.12-84.51-205.12-191.06V546.65
            l168.92-39.19V687.5c0,47.76,9.65,56.34,57.92,56.34h28.96c44.64,0,53.09-8.57,53.09-56.34V21.25H580.06z"/>
          <path class="st0" d="M1108.86,28.25h182.2l-197.88,586.64v270.66H924.25V614.89L726.37,28.25h182.2l86.88,394.36h26.55
            L1108.86,28.25z"/>
          <path class="st0" d="M1758.76,28.25h168.92v857.31h-168.92V545.08h-152.03v340.47h-168.92V28.25h168.92v382.11h152.03V28.25z"/>
          <path class="st0" d="M154.16,263c-21.2,0-40.12-4.36-56.77-13.07c-16.64-8.71-29.74-21.05-39.3-37.01
            c-9.56-15.96-14.34-34.86-14.34-56.7c0-15.84,2.72-31.29,8.16-46.35c5.44-15.05,12.94-29.12,22.49-42.19
            c9.56-13.07,20.68-24.56,33.37-34.46c12.69-9.9,26.34-17.66,40.95-23.26c14.61-5.6,29.6-8.4,44.99-8.4
            c21.31,0,40.26,4.36,56.85,13.07c16.59,8.72,29.66,21.05,39.22,37.01c9.56,15.96,14.34,34.86,14.34,56.7
            c0,15.85-2.72,31.3-8.16,46.35c-5.44,15.05-12.94,29.12-22.49,42.19c-9.56,13.07-20.68,24.56-33.37,34.46
            c-12.69,9.91-26.34,17.66-40.95,23.26C184.53,260.2,169.54,263,154.16,263z M154.16,256.38c14.61,0,28.92-2.69,42.93-8.06
            c14.01-5.37,27.08-12.79,39.22-22.24c12.14-9.45,22.79-20.46,31.97-33.02c9.17-12.56,16.37-26.06,21.59-40.49
            c5.22-14.43,7.83-29.17,7.83-44.22c0-20.48-4.48-38.2-13.43-53.14C275.3,40.26,263,28.69,247.34,20.49
            c-15.65-8.2-33.53-12.31-53.64-12.31c-14.61,0-28.92,2.69-42.93,8.06c-14.01,5.38-27.08,12.79-39.22,22.24
            C99.43,47.93,88.77,58.94,79.6,71.5c-9.17,12.56-16.37,26.03-21.59,40.41c-5.22,14.37-7.83,29.14-7.83,44.31
            c0,20.6,4.48,38.4,13.43,53.39c8.95,15,21.26,26.54,36.91,34.63C116.18,252.33,134.06,256.38,154.16,256.38z M156.14,210.71
            c-17.36,0-31.31-4.84-41.85-14.52c-10.55-9.68-15.82-22.83-15.82-39.47c0-13.92,2.31-27.08,6.92-39.47
            c4.61-12.39,11.01-23.34,19.2-32.85c8.18-9.51,17.63-16.98,28.34-22.41c10.71-5.43,22.22-8.15,34.52-8.15
            c13.07,0,23.42,4.41,31.06,13.24c7.63,8.83,11.95,20.54,12.94,35.14h-2.14c-1.54-10.64-4.2-19.07-7.99-25.3
            c-3.79-6.22-8.13-10.7-13.02-13.41c-4.89-2.72-9.75-4.07-14.58-4.07c-7.58,0-14.42,2.58-20.52,7.72
            c-6.1,5.15-11.45,11.94-16.07,20.37c-4.61,8.43-8.49,17.66-11.62,27.67c-3.13,10.02-5.47,19.98-7,29.88
            c-1.54,9.9-2.31,18.82-2.31,26.74c0,6.45,0.63,12.22,1.89,17.32c1.26,5.09,3.65,9.08,7.17,11.97c3.51,2.89,8.68,4.33,15.49,4.33
            c7.36,0,14.42-1.95,21.17-5.86c6.76-3.9,13.1-9.11,19.03-15.62c5.93-6.51,11.48-13.72,16.64-21.65h2.31
            c-4.61,8.38-10.05,16.24-16.31,23.6c-6.26,7.36-13.38,13.33-21.34,17.91C174.29,208.42,165.59,210.71,156.14,210.71z M207.22,208.67
            l-14.5-13.92c3.07-2.49,6.18-5.37,9.31-8.66c3.13-3.28,6.18-7.07,9.15-11.37l6.43-12.39h3.79l-10.88,46.35H207.22z M229.3,102.23
            l-1.15-12.22c-1.1-4.07-2.39-7.64-3.87-10.7c-1.48-3.06-3.32-6-5.52-8.83l21.26-14.6h3.3l-10.22,46.35H229.3z"/>
              </svg>
          </div>
			  </div>
      </footer>
    </>
  )
}

export default Section05