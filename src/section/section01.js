import { useAnimations, useGLTF } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three';
import {
    motion,
    useTransform,
    useMotionValueEvent,
    useScroll,
    MotionValue,
} from "framer-motion";
import { section } from 'framer-motion/client';

/*

  const isSection07Visible = useRecoilValue(isSection07VisibleState);

    className={`${
                  isSection07Visible ? "fill-black" : "fill-white"
                }`}

*/


const CameraController = ({
    scrollYProgress,
}) => {
    const pivotRef = useRef(null);
    const { camera } = useThree();

    useEffect(() => {
        if (pivotRef.current) {
            pivotRef.current.add(camera);
            camera.position.set(0, 0, 5);
            camera.lookAt(0, 0, 0);
        }
    }, [camera]);



    useFrame(() => {
        const progress = scrollYProgress.get();
        if (pivotRef.current) {
            let targetRotationY = 0;
            let targetScale = 1;
    
            // 회전 + 확대 범위
            if (progress >= 0.1 && progress <= 0.2) {
                targetRotationY = Math.PI * 2;
                targetScale = 0.9; // 스크롤 내릴 때 커짐
            }
    
            // 회전 적용
            pivotRef.current.rotation.y = THREE.MathUtils.lerp(
                pivotRef.current.rotation.y,
                targetRotationY,
                0.05
            );
    
            // 스케일 적용 (부드럽게 변화)
            const currentScale = pivotRef.current.scale.x;
            const scaleLerp = THREE.MathUtils.lerp(currentScale, targetScale, 0.05);
            pivotRef.current.scale.set(scaleLerp, scaleLerp, scaleLerp);
        }
    });
    

    return <group ref={pivotRef} position={[0, 0, 0]} />;
};


const Model = ({ position }) => {
    const { scene, animations } = useGLTF('/flower.glb');
    

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                    color: '#ffffff', 
                    metalness: 0.1,   
                    roughness: 0.5,  
                    envMapIntensity: 1.0
                });
            }
        });
    }, [scene]);

    return (
        <primitive
            object={scene}
            position={[0, 0, 0]}
            scale={0.33}
        />
    );
}

const Section01 = () => {

    const threed_Ref = useRef(null);
    const section01Ref = useRef(null);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end" ],
    });

    // 3d 아래쪽으로 이동
   // scrollYProgress로 변경
    const { scrollYProgress: scrollYProgressB } = useScroll({
        target: section01Ref,
        offset: ['start start', 'end start'],
    });

    // 원하는 y transform 값 정의
    const y = useTransform(scrollYProgressB, [0, 1], ['0%', '43%']);
    const x = useTransform(scrollYProgressB, [0, 1], ['0%', '30%']);
   
     // 3d 아래쪽으로 이동
   
    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log(scrollYProgress.get());
        });
    }, [scrollYProgress]);

    const position = useTransform(
        scrollYProgress,
        [0, 0.1, 0.3, 0.7 , 1, 1.3], // 전체 스크롤 범위에서 점진적으로
        [
            new THREE.Vector3(0, 0, 3),       // 초기 위치: 앞에 있음
            new THREE.Vector3(0, 0, 0),       // 점점 가까워짐
            new THREE.Vector3(2, 1, -2),      // 살짝 오른쪽 아래로 내려감
            new THREE.Vector3(4, 2, -5),       // 더 오른쪽 아래, 뒤로 멀어짐
            new THREE.Vector3(0, 0, 3),
            new THREE.Vector3(0, 0, 0),
        ]
    );

    const headerRef = useRef(null);
    const section02Ref = useRef(null);
    const [showHeader, setShowHeader] = useState(false);

    const [isSectionvisible, setIsSectionVisible] = useState(false);




    const containerRef = useRef(null);
  



    // useEffect(()=>{
    //     const handleScroll = () => {
    //         const sectionTop = section02Ref.current?.getBoundingClientRect().top || 0;
    //         const sectionBottom = section02Ref.current?.getBoundingClientRect().bottom || 0;

    //         const isVisible = sectionTop < window.innerHeight && sectionBottom >  0;
         
    //         if (isVisible && !isSectionvisible) {
    //             setIsSectionVisible(true);
    //         } else if(sectionTop > window.innerHeight){
    //             setIsSectionVisible(false);
    //         }

          
    //         if (sectionTop < window.innerHeight && sectionTop > 0){
    //             setShowHeader(true);
    //         }

    //         else if (sectionTop > window.innerHeight){
    //             setShowHeader(false);
    //         } else if (sectionTop < 0) {
    //             setShowHeader(true);
    //         }

           
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     handleScroll();
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (

        <>
             {/* <div ref={headerRef} id="header_sticky"
             style={{
                top: showHeader ? 0 : -window.innerHeight,
                left: 0,
                transition:'top 0.5s ease in-out'
             }}
            
             className={`${isSectionvisible ? 'block' : 'hidden'} max-lg:hidden lg:sticky lg:inset-x-0 lg:z-[90] flex max-lg:items-center max-lg:h-[66px] bg-[#E6E8EA] lg:bg-opacity-95 lg:backdrop-blur px-[var(--size-20)] lg:px-0 top-header`}>
                <div className="transition-colors duration-300 left-logo-header lg:border-r lg:border-current w-[86px] lg:w-[7.083333333333333vw]">
                    <a href="https://atolldigital.com" className="w-full lg:h-full flex items-center justify-center">
                       
                        <svg className="w-full lg:w-[4.305555555555555vw] h-auto" width="122" height="86"  viewBox="0 0 657.5 294.49" fill="#091423" xmlns="http://www.w3.org/2000/svg">
                                 <g>
                               <path d="M176.88,0v228.86c0,36.6-31.27,65.63-72.36,65.63H75.93C33.5,294.49,0,265.46,0,228.86v-48.38l62.53-13.46v61.84
                                    c0,16.41,3.57,19.35,21.44,19.35h10.72c16.53,0,19.65-2.94,19.65-19.35V0H176.88z"/>
                                <path d="M361.36,0h67.45l-73.25,201.52v92.97h-62.53v-92.97L219.76,0h67.45l32.16,135.47h9.83L361.36,0z"/>
                                <path d="M594.97,0h62.53v294.49h-62.53V177.54h-56.28v116.96h-62.53V0h62.53v131.26h56.28V0z"/> 
                                </g>
                        </svg>
                    </a>

                </div>

                <div className="transition-colors duration-300 px-[var(--size-20)] max-lg:hidden">
                    <ul className="host-grotesk-bold menu_header menu_global relative lowercase flex items-center gap-[2.083333333333333vw] text-[20px]">
                        <li>
                            <span className='h-full bg-black absolute bottom-0 left-0 w-[0.5px]'></span>
                        </li>
                        <li>
                            <a href="https://atolldigital.com/about/" className="overflow-hidden leading-none h-[3.472vw]">
                                <span className="group relative flex flex-col overflow-hidden">
                                    <span className="pl-[1.041555vw] translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center" >
                                        <img className='absolute top-1/5 -translate-y-1/3 opacity-[0.2] left-0 w-[0.694vw] h-[0.694vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + 'trai_icon.svg'} alt='trai_icon' />
                                        ABOUT
                                    </span>
                                    <span className="pl-[1.041555vw] translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-center">
                                        <img className='absolute top-1/5 -translate-y-1/3 opacity-[0.2] left-0 w-[0.694vw] h-[0.694vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + 'trai_icon.svg'} alt='trai_icon' />
                                        ABOUT
                                    </span>
                                </span>
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a href="https://atolldigital.com/work/" className="overflow-hidden leading-none flex h-[3.472vw] items-center">
                                <span className="group relative flex flex-col overflow-hidden ">
                                    <span className="pl-[1.041555vw] translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center" >
                                        <img className='absolute -translate-y-1/2 opacity-[0.2] left-0 w-[0.694vw] h-[0.694vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + 'trai_icon.svg'} alt='trai_icon' />
                                        WORK
                                    </span>
                                    <span className="pl-[1.041555vw] translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-cente">
                                        <img className='absolute -translate-y-1/2 opacity-[0.2] left-0 w-[0.694vw] h-[0.694vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + 'trai_icon.svg'} alt='trai_icon' />
                                        WORK
                                    </span>
                                </span>
                            </a>
                            <span className="font_editorial text-[.9vw] ml-[.2vw] relative top-[-.3vw]">
                                (10)
                            </span>
                        </li>
                        <li>
                            <a href="https://atolldigital.com/contact/" className="overflow-hidden leading-none contact  h-[3.472vw]">
                                <span className="group relative flex flex-col overflow-hidden">
                                    <span className="pl-[1.141555vw] translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center" >
                                        <img className='absolute top-1/5 -translate-y-1/2 opacity-[0.2] left-0 w-[1.194vw] h-[0.994vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + 'thesun_33.svg'} alt='thesun_33' />
                                        &nbsp;CONTACT
                                    </span>
                                    <span className="pl-[1.141555vw] translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-cente">
                                        <img className='absolute top-1/5 -translate-y-1/2 opacity-[0.2] left-0 w-[1.194vw] h-[0.994vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + 'thesun_33.svg'} alt='thesun_33' />
                                        &nbsp;CONTACT
                                    </span>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <span className='max-lg:hidden h-[0.5px] bg-black absolute bottom-0 left-0 w-full'></span>
                </div>

                <div className="host-grotesk-bold transition-colors duration-300 max-lg:hidden cursor-pointer absolute right-0 inset-y-0 flex items-center justify-center">
                    <div className="block bg-black absolute top-0 left-0 w-[0.5px] h-full"></div>
                    <a href="https://atolldigital.com/fr/" className="h-[3.472vw] text-[1vw] font-medium px-[1vw] flex items-center justify-center w-full overflow-hidden leading-none">
                        <span class="group relative flex flex-col overflow-hidden">
                            <span className="translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center">GIT</span>
                            <span className="translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-center">GIT</span>
                        </span>
                    </a>
                
                </div>
                <span className="max-lg:hidden block border-b border-current absolute bottom-0 left-0 w-full"></span> 
            </div>*/}
            <section className='max-lg:bg-[#E6E8EA] relative overflow-x-clip max-lg:z-50' ref={section01Ref}>
                <div className='grid grid-cols-2 max-lg:grid-cols-1'>
                    <div className='absolute top-[-50px] left-[1.38vw] lg:static lg:pb-[2.013888888888889vw] lg:pl-[var(--size-20)] lg:pr-[1.9444444444444444vw] lg:pt-[1.6666666666666667vw]'>
                        <div className="pl-[1.38vw] flex flex-nowrap items-end">
                           
                               <svg className="max-lg:hidden w-full h-auto" width="1327" height="555" viewBox="0 0 657.5 294.49" fill="#091423" xmlns="http://www.w3.org/2000/svg">
                                 <g>
                                    
                               <path d="M176.88,0v228.86c0,36.6-31.27,65.63-72.36,65.63H75.93C33.5,294.49,0,265.46,0,228.86v-48.38l62.53-13.46v61.84
                                    c0,16.41,3.57,19.35,21.44,19.35h10.72c16.53,0,19.65-2.94,19.65-19.35V0H176.88z"/>
                                <path d="M361.36,0h67.45l-73.25,201.52v92.97h-62.53v-92.97L219.76,0h67.45l32.16,135.47h9.83L361.36,0z"/>
                                <path d="M594.97,0h62.53v294.49h-62.53V177.54h-56.28v116.96h-62.53V0h62.53v131.26h56.28V0z"/> 
                                
                                </g>
                               </svg> 
                                 
                        </div>
                    </div> 
                    <div className='pt-[38px] lg:pt-0 pb-3 lg:pb-[1.944444444444445vw] relative'>
                        <div className="max-lg:hidden absolute left-0 bottom-0 h-full w-[0.5px] bg-black"></div>
                        <div className='max-lg:hidden px-[var(--size-20)] flex justify-between'>
                            <ul className="host-grotesk-bold menu_header lowercase flex items-center gap-[2.083333333333333vw] font-medium text-[20px]">
                               
                                <li className="flex items-center">
                                    <a onClick={() => {
                                        document.getElementById('section02').scrollIntoView({ behavior: 'smooth' });
                                    }}
                                     href="#" className="pl-[1.388vw] pt-[1.5277777777777777vw] pb-[1.5277777777777777vw] px-0relative flex items-center">
                                        <span className="group relative flex flex-col overflow-hidden">
                                            <span className="pl-[1.041555vw] translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center" >
                                            <img className='absolute -translate-y-1/2 opacity-[0.2] left-0 w-[0.694vw] h-[0.694vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + 'trai_icon.svg'} alt='trai_icon' />
                                            WORK
                                            </span>
                                            <span className="pl-[1.041555vw] translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-cente">
                                                <img className='absolute -translate-y-1/2 opacity-[0.2] left-0 w-[0.694vw] h-[0.694vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + 'trai_icon.svg'} alt='trai_icon' />
                                                WORK
                                            </span>
                                        </span>
                                    </a>
                                    <span className="relative text-[12px] -top-[5px] left-[3px]">(3)</span>
                                </li>
                                <li>
                                    <a onClick={() => {
                                        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    href="#" className='pt-[1.5277777777777777vw] pb-[1.5277777777777777vw] px-0 relative flex items-center overflow-hidden'>
                                        <span className="group relative flex flex-col overflow-hidden">
                                            <span className="pl-[1.041555vw] translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center" >
                                                <img className='absolute top-1/5 -translate-y-1/3 opacity-[0.2] left-0 w-[0.694vw] h-[0.694vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + 'trai_icon.svg'} alt='trai_icon' />
                                                skill
                                            </span>
                                            <span className="pl-[1.041555vw] translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-center">
                                                <img className='absolute top-1/5 -translate-y-1/3 opacity-[0.2] left-0 w-[0.694vw] h-[0.694vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + 'trai_icon.svg'} alt='trai_icon' />
                                                skill
                                            </span>
                                        </span>
                                    </a>

                                </li>
                                <li>
                                    <a onClick={() => {
                                        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    href="#" className='pt-[1.5277777777777777vw] pb-[1.5277777777777777vw] px-0relative flex items-center overflow-hidden'>
                                        <span className="group relative flex flex-col overflow-hidden">
                                            <span className="pl-[1.041555vw] translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center" >
                                            <img className='absolute top-1/5 -translate-y-1/2 opacity-[0.2] left-0 w-[1.194vw] h-[0.994vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + 'thesun_33.svg'} alt='thesun_33' />
                                            &nbsp;CONTACT
                                            </span>
                                            <span className="pl-[1.041555vw] translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-cente">
                                                <img className='absolute top-1/5 -translate-y-1/2 opacity-[0.2] left-0 w-[1.194vw] h-[0.994vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + 'thesun_33.svg'} alt='thesun_33' />
                                                &nbsp;CONTACT
                                            </span>
                                        </span>
                                    </a>
                                </li>

                            </ul>
                            <div className='host-grotesk-bold flex items-center justify-center mr-6'>
                                <a href="https://github.com/gaefadgdfdfsdf?tab=repositories" target='_blank' className='pt-[1.5277777777777777vw] pb-[1.5277777777777777vw] px-0relative flex items-center overflow-hidden'>
                                    <span className="group relative flex flex-col overflow-hidden">
                                        <span className="pl-[1.041555vw] translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center" >
                                        GIT
                                        </span>
                                        <span className="pl-[1.041555vw] translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-cente">
                                        GIT
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className='max-lg:hidden w-full bg-black h-[0.5px]'></div>
                        <div className="pl-[20px] pr-[20px] text-center lg:text-left lg:pt-[1.3194444444444444vw]">
                            <div classNmae="max-w-[600px] lg:max-w-full mx-auto">
                                <h1 className="noto-sans-kr-medium tracking-[-2.5px] text-[24px] lg:text-[2.1033333333333335vw] leading-[124%]">
                                    {/* 이 포트폴리오는 모던하고 감각적인 인터랙티브 웹사이트로 React + Tailwind CSS + Framer Motion으로 구성되며, 깔끔한 UI와 부드러운 전환 애니메이션, 3D 모델 임베드 및 가로 스크롤 기반 인터랙션 등 다양한 웹 기술이 활용됩니다. */}
                                    프론트엔드 개발자 조윤하의 포트폴리오 사이트
                                    React + Tailwind CSS + Framer Motion을 중점으로 구현
                                </h1>
                            </div>
                        </div>
                        <div className='mt-[71px] pl-[20px] pr-[20px] lg:bottom-[var(--size-20)] lg:inset-x-[var(--size-20)] text-center lg:text-left'>
                            <div className="inline-flex">
                                <div id="border_black" className="max-[1024px]:w-[200px] max-[1400px]:w-[180px] max-[1590px]:w-[210px] w-[260px] h-[50px] pl-4 lg:pl-[1.1111111111111112vw] pr-2.5 lg:pr-[0.6944444444444444vw] min-h-10 lg:min-h-[2.7777777777777777vw] py-1 lg:py-[.3vw] flex items-center justify-between rounded-[5px]">
                                    <div className="flex items-center">
                                        <div className="host-grotesk-superbold text-[12px] lg:text-[0.8333333333333334vw] uppercase text-right font-medium leading-[100%]">
                                            portfolio<br />
                                            since
                                        </div>
                                        <div className="tracking-[-3px] bodoni-moda-regular ml-4 lg:ml-[1.0416666666666665vw] font_editorial text-[28px] lg:text-[2.0444444444444444vw] leading-none">© 2025</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-black h-[0.5px]"></div>
            </section>
            <div className="pt-[30px] lg:pt-[3vw] ">
                <div className="max-w-full px-[var(--size-20)]">
                    <div className="text-[12px] lg:text-[0.8333333333333334vw] flex justify-center overflow-hidden text-center font-medium relative z-[1]">
                        <div className="noto-sans-kr-semibold animate-up-down">
                            <span>｛ SCROLL ｝</span>
                        </div>
                    </div>
                </div>
                <div className='overflow-x-clip h-[150vh] mt-[-65vw] lg:mt-[-2vw]'>
                    <motion.div className='sticky top-0 h-screen'
                    
                    id="text"
                    ref={threed_Ref}
                    style={{ y ,x}} 
                    >
                        <Suspense fallback={<span>로딩중..</span>}>
                            <Canvas>
                                <CameraController scrollYProgress={scrollYProgress} />
                                <ambientLight intensity={1} />
                                <directionalLight
                                    position={[5, 5, 5]}
                                    intensity={2}
                                    castShadow
                                />
                                <directionalLight
                                    position={[-5, 5, -5]}
                                    intensity={1}
                                />
                                <Model position={position} />
                            </Canvas>
                        </Suspense>
                    </motion.div>
                </div>
                
                <div id="about" className='max-lg:mt-[-28vw] mt-[-35vw] lg:mt-[-20vw] mb-[116px] lg:mb-[20vw]'>
                    <div className='max-w-full pl-[1.38vw] pr-[1.38vw'>
                        <div className='relative'>
                            <div className="host-grotesk-bold hidden inline-flex absolute left-0 invisible opacity-0 width-view-indent lg:[font-size:0.8333333333vw]">ABOUT</div>
                            <div className="host-grotesk-bold -mb-4 lg:mb-[-1.25vw] pointer-events-none lg:[font-size:0.8333333333vw]">ABOUT</div>
                            <div className="noto-sans-kr-medium text-[18px] lg:text-[1.3222222222222223vw] leading-[134%] tracking-tight lg:tracking-tight hide_br_tablet">
                                <div className="overflow-hidden">
                                    <div className='block relative text-start'>
                                        <span className='mr-[101px] lg:mr-[4.472222222222223vw] '></span>
                                        저는 프론트엔드 개발을 기반으로 꾸준히 학습하고 있는 신입 개발자 JYH입니다.
                                    </div>
                                </div>
                                <div className="oerflow-hidden">
                                    <div className="block relative text-start">
                                        JavaScript, HTML, CSS, React, jQuery 등 웹 기술에 대한 이해를 바탕으로,
                                    </div>
                                </div>
                                <div className="oerflow-hidden">
                                    <div className="block relative text-start">
                                        사용자 중심의 UI 구현에 집중하고 있습니다. 신입이지만 성실함과 꾸준함을
                                    </div>
                                </div>
                                <div className="oerflow-hidden">
                                    <div className="block relative text-start">
                                        바탕으로 기초를 탄탄히 다져왔으며, 실무에서도 빠르게 적응할 수 있는 준비가 되어 있습니다.
                                    </div>
                                </div>
                                <div className="oerflow-hidden">
                                    <div className="block relative text-start">
                                        작은 디테일도 놓치지 않는 꼼꼼함과 책임감을 강점으로 삼고 있습니다.
                                    </div>
                                </div>
                                <div className="oerflow-hidden">
                                    <div className="block relative text-start">
                                        이름처럼 '믿을 윤(允)', '연꽃 하(荷)'의 의미를 담아, 신뢰감 있고 성장하는 개발자가 되고자 합니다.
                                    </div>
                                </div>
                                <div className="oerflow-hidden">
                                    <div className="block relative text-start">
                                        장기적인 관점에서 계속해서 발전할 수 있는 개발자를 목표로 하고 있습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* section02 */}
            {/* <div id="section02" className="mb-5 lg:mb-[3.6111111111111107vw]">
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
            <section  ref={section02Ref}  className='pb-[10.416666666666668vw]'>
                <div ref={containerRef} className='w-full bg-black h-[0.5px]'></div>
                <div className='max-w-full pl-[1.38vw]  pr-[1.38vw] '>
                    <div className='relative'>
                        <div className='lg:sticky lg:top-[var(--header-sticky-height)] lg:grid'>
                           
                            <div className='lg:h-[34.29166666666667vw] overflow-hidden relative'>
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
                             <div className='lg:h-[34.29166666666667vw] overflow-hidden relative'>
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
                            <div className='lg:h-[34.29166666666667vw] overflow-hidden relative'>
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
            </section> */}

        </>
    )
}

export default Section01