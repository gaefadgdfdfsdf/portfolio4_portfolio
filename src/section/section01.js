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
    useAnimation,
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
  



    return (

        <>
           
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
                                        document.getElementById('section03Ref').scrollIntoView({ behavior: 'smooth' });
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
          
        </>
    )
}

export default Section01