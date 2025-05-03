import React from 'react'

const Section03 = () => {

//     const setIsSection07Visible = useSetRecoilState(isSection07VisibleState);
//   const isInView = useInView(containerRef, {
//     once: false,
//     amount: "some",
//     margin: "0px 0px -100% 0px",
//   });

//   useEffect(() => {
//     setIsSection07Visible(isInView);
//   }, [isInView, setIsSection07Visible]);

  return (
   <>
    <div className='bg-[#091423]'>
        <div id="process_block">
            <div className='lg:flex flex-col justify-between lg:h-[calc(100vh-var(3.4722222222222223vw))] lg:sticky lg:top-[var(3.4722222222222223vw)]'>
                <section className='pt-[25px] lg:pt-[2.1111111111111112vw]'>
                    <div className='w-max-full pl-[1.388vw] pr-[1.388vw]'>
                        <div className='relative'>
                            <div className='host-grotesk-superbold inline-flex absolute left-0 opacity-0'>SKILLSET</div>
                            <div className='font-medium text-white text-[.8333333333333334vw] -mb-4 lg:mb-[-1.5277777777777777vw] pointer-events-none'>SKILLSET</div>
                            <div>
                                <h2 className='noto-sans-kr-medium text-white leading-[139%] tracking-[-0.01em] lg:text-[2.188888888888889vw]'>
                                    <div className='overflow-hidden'>
                                        <div className='relative block text-start'>
                                            <span className='ml-[90.953px]'>
                                            포토샵과 일러스트를 활용한 세련된 디자인 구현과, HTML, CSS, JavaScript, React를 
                                            </span>
                                        </div>
                                    </div>
                                    <div className='overflow-hidden'>
                                        <div className='relative block text-start'>
                                        기반으로 한 효율적인 웹 개발 능력을 결합하여, 사용자 중심의 직관적이고 혁신적인 웹 경험을 제공합니다.
                                        </div>
                                    </div>
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='lg:overflow-hidden mt-[70px] lg:mt-[11.861111111111112vw] relative pt-[0.694vw)]'>
                    <div className='h-[0.5px] bg-white top-0 left-0 w-full'></div>
                    <div className='lg:static lg:flex lg:flex-nowrap text-white '>
                        <div className='relative z-[1px]'>
                            <div className='lg:min-h-[27.583333vw] lg:w-[34.236111111111114vw] px-[1.38vw] pt-[11px] lg:pt-[1.38vw] pb-5 lg:pb-[2.875vw] lg:flex flex-col justify-between flex-none'>
                                <div className='flex justify-between'>
                                    <div className='pt-[9px] lg:pt-0'>
                                        <div className='text-[12px] lg:text-[0.9722222222222222vw] leading-[114%] font-medium uppercase hide_br_tablet'>DESIGN</div>
                                        <div className='mt-[13px] lg:mt-[1.9444444444444444vw]'>
                                            <img className='lg:w-[2.7777777777777777vw] h-auto' src={process.env.PUBLIC_URL + ' icon_1.svg'} alt='icon_1'/>
                                        </div>
                                    </div>
                                    <div className='text-[92px] lg:text-[3.722222222222223vw] font-medium leading-none lg:mt-[1.7722222222222222vw]'>
                                    Photoshop
                                    </div>
                                </div>
                                <div className='flex items-end lg:block mt-[30px] lg:mt-0 min-h-[110px] lg:min-h-px'>
                                    <div className='lg:mt-[3.4722222222222223vw] w-full lg:text-[1.25vw] lg:leading-[133%] lg:tracking-[-0.02em]'>
                                    포토샵의 기초 기능을 활용하여 창의적이고<br/> 효율적인 디자인 작업을 구현합니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative z-[1px] lg:pt-0 pt-[0.694vw]'>
                            <div className='absolute top-0 left-0 h-full w-[0.5px] bg-white max-lg:hidden'></div>
                            <div className='absolute top-0 left-0 w-full h-[0.5px] bg-white hidden max-lg:block'></div>
                            <div className='lg:min-h-[27.583333vw] lg:w-[34.236111111111114vw] px-[1.38vw] pt-[11px] lg:pt-[1.38vw] pb-5 lg:pb-[2.875vw] lg:flex flex-col justify-between flex-none'>
                            <div className='flex justify-between'>
                                    <div className='pt-[9px] lg:pt-0'>
                                        <div className='text-[12px] lg:text-[0.9722222222222222vw] leading-[114%] font-medium uppercase hide_br_tablet'>DESIGN</div>
                                        <div className='mt-[13px] lg:mt-[1.9444444444444444vw]'>
                                            <img className='lg:w-[2.7777777777777777vw] h-auto' src={process.env.PUBLIC_URL + ' icon_2.svg'} alt='icon_2'/>
                                        </div>
                                    </div>
                                    <div className='text-[92px] lg:text-[3.722222222222223vw]  font-medium leading-none lg:mt-[1.7722222222222222vw]'>
                                    Illustrator
                                    </div>
                                </div>
                                <div className='flex items-end lg:block mt-[30px] lg:mt-0 min-h-[110px] lg:min-h-px'>
                                    <div className='lg:mt-[3.4722222222222223vw] w-full lg:text-[1.25vw] lg:leading-[133%] lg:tracking-[-0.02em]'>
                                    일러스트 기초 기능을 활용하여<br/>
                                    간단한 SVG 아이콘 제작이 가능합니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative z-[1px] lg:pt-0 pt-[0.694vw]'>
                            <div className='absolute top-0 left-0 h-full w-[0.5px] bg-white max-lg:hidden'></div>
                            <div className='absolute top-0 left-0 w-full h-[0.5px] bg-white hidden max-lg:block'></div>
                            <div className='lg:min-h-[27.583333vw] lg:w-[34.236111111111114vw] px-[1.38vw] pt-[11px] lg:pt-[1.38vw] pb-5 lg:pb-[2.875vw] lg:flex flex-col justify-between flex-none'>
                            <div className='flex justify-between'>
                                    <div className='pt-[9px] lg:pt-0'>
                                        <div className='text-[12px] lg:text-[0.9722222222222222vw] leading-[114%] font-medium uppercase hide_br_tablet'>Development</div>
                                        <div className='mt-[13px] lg:mt-[1.9444444444444444vw]'>
                                            <img className='lg:w-[2.7777777777777777vw] h-auto' src={process.env.PUBLIC_URL + ' icon_3.svg'} alt='icon_3'/>
                                        </div>
                                    </div>
                                    <div className='text-[92px] lg:text-[3.722222222222223vw]  font-medium leading-none lg:mt-[1.7722222222222222vw]'>
                                        HTML+CSS
                                    </div>
                                </div>
                                <div className='flex items-end lg:block mt-[30px] lg:mt-0 min-h-[110px] lg:min-h-px'>
                                    <div className='lg:mt-[3.4722222222222223vw] w-full lg:text-[1.25vw] lg:leading-[133%] lg:tracking-[-0.02em]'>
                                    HTML과 CSS의 기초 지식을 바탕으로<br/>
                                    홈페이지의 구조를 제작하고, Animation CSS를 활용한<br/>
                                    다양한 인터랙션 구현이 가능합니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative z-[1px] lg:pt-0 pt-[0.694vw]'>
                            <div className='absolute top-0 left-0 h-full w-[0.5px] bg-white max-lg:hidden'></div>
                            <div className='absolute top-0 left-0 w-full h-[0.5px] bg-white hidden max-lg:block'></div>   
                            <div className='lg:min-h-[27.583333vw] lg:w-[34.236111111111114vw] px-[1.38vw] pt-[11px] lg:pt-[1.38vw] pb-5 lg:pb-[2.875vw] lg:flex flex-col justify-between flex-none'>
                                <div className='flex justify-between'>
                                        <div className='pt-[9px] lg:pt-0'>
                                            <div className='text-[12px] lg:text-[0.9722222222222222vw] leading-[114%] font-medium uppercase hide_br_tablet'>Development</div>
                                            <div className='mt-[13px] lg:mt-[1.9444444444444444vw]'>
                                                <img className='lg:w-[2.7777777777777777vw] h-auto' src={process.env.PUBLIC_URL + ' icon_4.svg'} alt='icon_4'/>
                                            </div>
                                        </div>
                                        <div className='text-[92px] lg:text-[3.722222222222223vw]  font-medium leading-none lg:mt-[1.7722222222222222vw]'>
                                        Javascript
                                        </div>
                                    </div>
                                    <div className='flex items-end lg:block mt-[30px] lg:mt-0 min-h-[110px] lg:min-h-px'>
                                        <div className='lg:mt-[3.4722222222222223vw] w-full lg:text-[1.25vw] lg:leading-[133%] lg:tracking-[-0.02em]'>
                                        스크롤, 휠, 클릭 등 다양한 이벤트 리스너를 활용해<br/>
                                        요소 애니메이션, 화면 전환 등<br/>
                                        동적인 UI를 JavaScript로 구현이 가능합니다.
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className='relative z-[1px] lg:pt-0 pt-[0.694vw]'>
                            <div className='absolute top-0 left-0 h-full w-[0.5px] bg-white max-lg:hidden'></div>
                            <div className='absolute top-0 left-0 w-full h-[0.5px] bg-white hidden max-lg:block'></div>
                            <div className='lg:min-h-[27.583333vw] lg:w-[34.236111111111114vw] px-[1.38vw] pt-[11px] lg:pt-[1.38vw] pb-5 lg:pb-[2.875vw] lg:flex flex-col justify-between flex-none'>
                            <div className='flex justify-between'>
                                    <div className='pt-[9px] lg:pt-0'>
                                        <div className='text-[12px] lg:text-[0.9722222222222222vw] leading-[114%] font-medium uppercase hide_br_tablet'>Development</div>
                                        <div className='mt-[13px] lg:mt-[1.9444444444444444vw]'>
                                            <img className='lg:w-[2.7777777777777777vw] h-auto' src={process.env.PUBLIC_URL + ' icon_2.svg'} alt='icon_2'/>
                                        </div>
                                    </div>
                                    <div className='text-[92px] lg:text-[3.722222222222223vw]  font-medium leading-none lg:mt-[1.7722222222222222vw]'>
                                    React
                                    </div>
                                </div>
                                <div className='flex items-end lg:block mt-[30px] lg:mt-0 min-h-[110px] lg:min-h-px'>
                                    <div className='lg:mt-[3.4722222222222223vw] w-full lg:text-[1.25vw] lg:leading-[133%] lg:tracking-[-0.02em]'>
                                    React를 기반으로 한 화면 구성과<br/>
                                    Framer Motion, Recoil을 활용한 인터랙션 구현이 가능하며,<br/>
                                    ScrollTrigger, Swiper, useEffect 등<br/>
                                    주요 기능에 대한 이해도를 갖추고 있습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='relative z-[1px] lg:pt-0 pt-[0.694vw]'>
                            <div className='absolute top-0 left-0 h-full w-[0.5px] bg-white max-lg:hidden'></div>
                            <div className='absolute top-0 left-0 w-full h-[0.5px] bg-white hidden max-lg:block'></div>   
                            <div className='lg:min-h-[27.583333vw] lg:w-[34.236111111111114vw] px-[1.38vw] pt-[11px] lg:pt-[1.38vw] pb-5 lg:pb-[2.875vw] lg:flex flex-col justify-between flex-none'>
                                <div className='max-lg:max-w-[310px] max-lg:mx-auto lg:flex lg:justify-between'>
                                    <h2 className='text-[76px] lg:text-[9.722222222222223vw] lg:mt-[-0.9722222222222222vw] font-medium leading-none tracking-tight lg:whitespace-nowrap'>Ready?</h2>
                                </div>
                                <div className='max-lg:max-w-[310px] max-lg:mx-auto mt-7 lg:mt-[3.4722222222222223vw] lg:max-w-[23.26388888888889vw] lg:ml-auto'>
                                    <div className='lg:text-[1.25vw] lg:leading-[133%] lg:tracking-[-0.02em]'>
                                    Code. Create. Conquer.<br/>
                                    With us, no regrets.
                                    </div>
                                    <div className='mt-9 lg:mt-[2.2916666666666665vw]'>
                                        <a href='' className="rounded-[5px] block w-[160px] leading-[50px] h-[50px] bg-white text-[#091423] min-w-[169px] lg:min-w-[11.73611111111111vw] lg:h-[3.4722222222222223vw] lg:text-[0.8333333333333334vw]">
                                            <span className='relative overflow-visible flex flex-col items-center'>
                                                <span className='opacity-0 flex absolute flex-nowrap items-center'>CONTACT</span>
                                                <span className='flex absolute flex-nowrap items-center'>CONTACT</span>
                                            </span>
                                        </a>    
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Section03