import React, { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { showHeaderState } from '../store';



const Section02 = () => {
  
  const containerRef =useRef(null);  
  const divcontainerRef = useRef(null);

  const sectionRef = useRef(null);
  const setShowHeader = useSetRecoilState(showHeaderState);

 useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const scrollY = window.scrollY;
      const divcontainerRect = divcontainerRef.current.getBoundingClientRect(); // 높이값
      const containerRefTop = containerRef.current.offsetTop;
       

      // section02의 시작점보다 아래로 스크롤하면 header 보이기
      if (scrollY >= sectionTop) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      
    };

    // 초기 체크 + 이벤트 등록
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setShowHeader]);

    return (
        <>
            {/* section02 */}
            <div ref={sectionRef} id="section02" className="mb-5 lg:mb-[3.6111111111111107vw]">
                <div className="max-w-full pl-[1.38vw] pr-[1.38vw]">
                    <div className="pr-[60px] lg:pr-[11.527777777777779vw] relative">
                        <div class="absolute right-12 lg:right-[18.3194444444444444vw] -top-0.5 lg:top-[-0.06944444444444445vw] text-[18px] lg:text-[2.2222222222222223vw] leading-[100%]">
                            <span class="bodoni-moda-bold inline-flex mx-[3px] lg:mx-[0.4166666666666667vw]">
                                ｛ 03 ｝				</span>
                        </div>
                        <div>
                            <img className='w-full h-auto max-w-full' src={process.env.PUBLIC_URL + 'portfolio.svg'} alt='portfolio' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden h-[7.916666666666666vw]'></div>
           <section className='pb-[10.416666666666668vw]'>  {/* ref={section02Ref}  */}
                <div ref={containerRef} id="header_Sticky" className='w-full bg-black h-[0.5px]'></div> {/* ref={containerRef}  */}
                <div className='max-w-full pl-[1.38vw]  pr-[1.38vw] '>
                    <div className='relative h-[500vh]'>
                        <div className='lg:sticky lg:top-0 lg:grid'>

                            <div ref={divcontainerRef} className='lg:h-[34.29166666666667vw] overflow-hidden relative'>
                                <div className='absolute bottom-0 left-0 w-full bg-black h-[1px] z-10'></div>
                                <a href='https://gaefadgdfdfsdf.github.io/portfolio2_glaxywatch/' target='_blank' className='absolute inset-0 z-[1]' />
                                <div className='py-5 lg:py-[1.38vw] flex flex-col-reverse lg:flex-row lg:h-full'>
                                    <div className='lg:w-[32.84722222222222vw] lg:pr-[2.7777777777777777vw] mt-[18px] lg:mt-0'>
                                        <h2 className='host-grotesk-superbold text-[32px] lg:text-[4.166666666666666vw] leading-[100%] tracking-tighter font-medium'>glaxywatch</h2>
                                        <div className='noto-sans-kr-bold text-[14px] lg:text-[0.9722222222222222vw] mt-2.5 lg:mt-[1vw] font-medium'>html & css & JavaScript</div>
                                        <div className='noto-sans-kr-medium text-[16px] description lg_br_enable mt-5 lg:mt-[2vw] lg:tracking-tight leading-[134%]'>
                                            휠 스크롤 기반의 섹션 이동 사이트로 HTML, CSS, JavaScript로 제작되었고, 각각의 Section으로 스무스하게 이동합니다.
                                            wheel 이벤트를 사용하여 직접 스크롤을 제어하고, 현재 위치에 따라 애니메이션이 실행됩니다.
                                            일부 섹션은 sticky 포지션을 활용하여 화면에 고정된 뒤, 콘텐츠가 애니메이션과 함께 전환됩니다.
                                            데스크탑 중심이지만, 반응형 처리를 위한 CSS도 일부 적용되어 있어 다양한 해상도에서도 콘텐츠가 유지됩니다.
                                        </div>
                                    </div>
                                    <div className='lg:w-[calc(100%-32.84722222222222vw)]'>
                                        <div className='wrap-img-distortion overflow-hidden rounded-[.3472222222222222vw] h-[42vw] lg:h-full relative'>
                                            <img className='object-cover w-full relative h-full lg:top-1/2 lg:-translate-y-1/2' src={process.env.PUBLIC_URL + 'galaxy.jpg'} alt='galaxy' />
                                            <div class="absolute top-[50%] w-full left-0 z-1 translate-y-[-50%]">
                                                <canvas className='w-full h-full object-cover' id="hover-effect-canvas-1745038706574" width="1236" height="618"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div ref={divcontainerRef} className='lg:h-[34.29166666666667vw] overflow-hidden relative'>
                                <div className='absolute bottom-0 left-0 w-full bg-black h-[1px] z-10'></div>
                                <a href='https://gaefadgdfdfsdf.github.io/portfolio_1_hyundai/' target='_blank' className='absolute inset-0 z-[1]' />
                                <div className='py-5 lg:py-[1.38vw] flex flex-col-reverse lg:flex-row lg:h-full'>
                                    <div className='lg:w-[32.84722222222222vw] lg:pr-[2.7777777777777777vw] mt-[18px] lg:mt-0'>
                                        <h2 className='host-grotesk-superbold text-[32px] lg:text-[4.166666666666666vw] leading-[100%] tracking-tighter font-medium'>hyundai</h2>
                                        <div className='noto-sans-kr-bold text-[14px] lg:text-[0.9722222222222222vw] mt-2.5 lg:mt-[1vw] font-medium'>html & css & JavaScript</div>
                                        <div className='noto-sans-kr-medium text-[16px] description lg_br_enable mt-5 lg:mt-[2vw] lg:tracking-tight leading-[134%]'>
                                            이 포트폴리오 사이트는 HTML, CSS, JavaScript로 제작하였고, Swiper.js를 이용해 슬라이드 기능을 구현했습니다.
                                            GSAP 라이브러리를 활용해 텍스트나 이미지에 자연스러운 애니메이션 효과를 더해 생동감을 주었습니다.
                                            슬라이드가 넘어갈 때마다 요소들이 부드럽게 등장하거나 사라지도록 처리해 사용자 몰입도를 높였습니다.
                                            전체적으로 구조가 깔끔하고, 인터랙션이 잘 적용되어 보기 편한 웹사이트입니다.
                                        </div>
                                    </div>
                                    <div className='lg:w-[calc(100%-32.84722222222222vw)]'>
                                        <div className='wrap-img-distortion overflow-hidden rounded-[.3472222222222222vw] h-[42vw] lg:h-full relative'>
                                            <img className='object-cover w-full relative h-full lg:top-1/2 lg:-translate-y-1/2' src={process.env.PUBLIC_URL + 'hyundai.jpg'} alt='hyunda' />
                                            <div class="absolute top-[50%] w-full left-0 z-1 translate-y-[-50%]">
                                                <canvas className='w-full h-full object-cover' id="hover-effect-canvas-1745038706574" width="1236" height="618"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div ref={divcontainerRef} className='lg:h-[34.29166666666667vw] overflow-hidden relative'>
                                <div className='absolute bottom-0 left-0 w-full bg-black h-[1px] z-10'></div>
                                <a href='https://gaefadgdfdfsdf.github.io/portfolio2_glaxywatch/' target='_blank' className='absolute inset-0 z-[1]' />
                                <div className='py-5 lg:py-[1.38vw] flex flex-col-reverse lg:flex-row lg:h-full'>
                                    <div className='lg:w-[32.84722222222222vw] lg:pr-[2.7777777777777777vw] mt-[18px] lg:mt-0'>
                                        <h2 className='host-grotesk-superbold text-[32px] lg:text-[4.166666666666666vw] leading-[100%] tracking-tighter font-medium'>herryporter</h2>
                                        <div className='noto-sans-kr-bold text-[14px] lg:text-[0.9722222222222222vw] mt-2.5 lg:mt-[1vw] font-medium'>react & JavaScript & tailwandcss</div>
                                        <div className='noto-sans-kr-medium text-[16px] description lg_br_enable mt-5 lg:mt-[2vw] lg:tracking-tight leading-[134%]'>
                                            이 프로젝트는 Harry Potter 시리즈를 테마로 한 영화관 스타일의 인터랙티브 웹사이트입니다.
                                            다양한 라이브러리를 조합하여 기획 + 디자인 + 구현까지 모두 제작하였습니다.
                                            모든 섹션을 컴포넌트 단위로 쪼개어 관리하고, 반응형 대응을 고려한 레이아웃 설계로 확장성과 유지보수 용이성을 확보하였습니다.
                                            Framer Motion + useScroll + useTransform 각 섹션에 스크롤 기반 애니메이션 효과와
                                            ScrollTrigger로 스크롤의 위치를 감지해 타이밍별로 애니메이션 트리거를 적용했습니다.
                                            Intersection Observer + useScroll, useTransform 으로 가로 스크롤로 구현하여 캐릭터와 TEXT를 단순 페이지 전환이 아닌 스토리텔링 중심 인터랙션으로 구현하였습니다.
                                            Swiper + Navigation 모듈로 하단에 Harry Potter 영화 시리즈별 미리보기 슬라이드 구현하였습니다.
                                            페이지 전환 없이 스크롤만으로 모든 콘텐츠 탐색이 가능, 부드러운 흐름 제공합니다.
                                        </div>
                                    </div>
                                    <div className='lg:w-[calc(100%-32.84722222222222vw)]'>
                                        <div className='wrap-img-distortion overflow-hidden rounded-[.3472222222222222vw] h-[42vw] lg:h-full relative'>
                                            <img className='object-cover w-full relative h-full lg:top-1/2 lg:-translate-y-1/2' src={process.env.PUBLIC_URL + 'herryporter-1.jpg'} alt='herryporter' />
                                            <div class="absolute top-[50%] w-full left-0 z-1 translate-y-[-50%]">
                                                <canvas className='w-full h-full object-cover' id="hover-effect-canvas-1745038706574" width="1236" height="618"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='lg:flex pt-[81px] lg:pt-[2.430555555555556vw] text-center lg:text-left'>
                                    <div className='lg:w-[32.84722222222222vw] lg:pr-[2.7777777777777777vw]'>
                                        <div className='flex justify-center lg:justify-start'>
                                            <div id="blackline" className='min-w-[208px] lg:min-w-[15.069444444444443vw] pl-2 lg:pl-[0.5555555555555556vw] pr-[5px] lg:pr-[0.4166666666666667vw] min-h-[49px] lg:min-h-[3.4027777777777777vw] inline-flex items-center justify-between rounded-[5px]'>
                                                <div className='flex items-center'>
                                                    <img className='w-[32px] lg:w-[2.2222222222222223vw] h-auto mr-2 lg:mr-[0.5555555555555556vw]' src={process.env.PUBLIC_URL + 'icon-projects.svg'} alt='icon-projects' />
                                                    <div className='host-grotesk-bold text-left leading-[100%] text-[12px] lg:text-[0.8333333333333334vw] tracking-[-0.7px] uppercase'>
                                                        ADDED<br />
                                                        PORTFOLIO<br />
                                                        PROJECTS
                                                    </div>
                                                </div>
                                                <div className='bodoni-moda-bold ml-4 lg:ml-[2vw] font_editorial text-[44px] lg:text-[3.0555555555555554vw] leading-none'>3</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='class="lg:w-[calc(100%-32.84722222222222vw)] mt-[37px] lg:mt-0 max-lg:mx-auto'>
                                        <div className='tracking-[-2px] noto-sans-kr-medium text-[2.18vw] leading-[133%] max-lg:max-w-[330px] max-lg:mx-auto'>
                                            More in the vault. <br />
                                            Take a look.
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section02