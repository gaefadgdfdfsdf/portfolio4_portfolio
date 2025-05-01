
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


    // useFrame(() => {
    //     const progress = scrollYProgress.get();
    //     if (pivotRef.current) {
    //         let targetRotationY = 0;
    
    //         // 회전 구간 정의
    //         if (progress >= 0.1 && progress <= 0.2) {
    //             targetRotationY = Math.PI * 2; // 360도 회전
    //         }
    
            
    
    //         // ✅ 회전만 적용
    //         pivotRef.current.rotation.y = THREE.MathUtils.lerp(
    //             pivotRef.current.rotation.y,
    //             targetRotationY,
    //             0.05
    //         );
    //     }
    // });

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


const Model = () => {
    const { scene, animations } = useGLTF('/flower.glb');
    console.log(scene); // 모델에 대한 정보
    console.log(animations); // 애니메이션에 대한 정보
    
  
    
    return (
        <primitive
            // ref={ref}
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
  



    useEffect(()=>{
        const handleScroll = () => {
            const sectionTop = section02Ref.current?.getBoundingClientRect().top || 0;
            const sectionBottom = section02Ref.current?.getBoundingClientRect().bottom || 0;

            const isVisible = sectionTop < window.innerHeight && sectionBottom >  0;
            // setIsSectionVisible(isVisible);
            if (isVisible && !isSectionvisible) {
                setIsSectionVisible(true);
            } else if(sectionTop > window.innerHeight){
                setIsSectionVisible(false);
            }

          
            if (sectionTop < window.innerHeight && sectionTop > 0){
                setShowHeader(true);
            }

            else if (sectionTop > window.innerHeight){
                setShowHeader(false);
            } else if (sectionTop < 0) {
                setShowHeader(true);
            }

           
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (

        <>
            <div ref={headerRef} id="header_sticky"
             style={{
                top: showHeader ? 0 : -window.innerHeight,
                left: 0,
                transition:'top 0.5s ease in-out'
             }}
            //  className="hidden lg:sticky lg:inset-x-0 lg:z-[90] flex max-lg:items-center max-lg:h-[66px]  lg:bg-opacity-95 lg:backdrop-blur px-[var(--size-20)] lg:px-0 top-header">
             className={`${isSectionvisible ? 'block' : 'hidden'} lg:sticky lg:inset-x-0 lg:z-[90] flex max-lg:items-center max-lg:h-[66px] bg-[#E6E8EA] lg:bg-opacity-95 lg:backdrop-blur px-[var(--size-20)] lg:px-0 top-header`}>
                <div className="transition-colors duration-300 left-logo-header lg:border-r lg:border-current w-[86px] lg:w-[7.083333333333333vw]">
                    <a href="https://atolldigital.com" className="w-full lg:h-full flex items-center justify-center">
                        <svg className="w-full lg:w-[4.305555555555555vw] h-auto" width="62" height="26" viewBox="0 0 62 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-current" d="M51.2196 0.314453L55.1169 0.317387L55.0956 25.4681L51.1983 25.4652L51.2196 0.314453Z"></path>
                            <path className="fill-current" d="M58.1027 0.319635L62 0.322569L61.9787 25.4733L58.0814 25.4703L58.1027 0.319635Z"></path>
                            <path className="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M29.6488 15.5299C29.6442 21.5202 33.5382 25.9186 39.5219 25.9231C45.4664 25.9276 49.3671 21.5351 49.3717 15.5448C49.3763 9.63228 45.4823 5.23387 39.5379 5.2294C33.5541 5.22489 29.6534 9.61744 29.6488 15.5299ZM45.1988 15.5416C45.1955 19.8593 43.1066 22.9307 39.5242 22.928C35.9025 22.9253 33.8184 19.8508 33.8217 15.5331C33.825 11.2543 35.9138 8.22182 39.5356 8.22455C43.118 8.22724 45.2021 11.2629 45.1988 15.5416Z"></path>
                            <path className="fill-current" d="M29.5558 8.48932L25.1467 8.486L25.1467 8.48925L21.2183 8.48629L25.1433 12.9748L25.1378 20.1165C25.1364 21.9447 25.4509 22.4895 27.1437 22.4908L29.545 22.4926L29.5428 25.4489L25.9604 25.4462C22.2599 25.4434 21.1982 23.8089 21.2009 20.3858L21.21 8.48304L18.1394 8.48072L18.1416 5.60227L21.2123 5.60458L21.2163 0.314453L25.153 0.317417L25.149 5.60755L29.5581 5.61087L29.5558 8.48932Z"></path>
                            <path className="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M2.19646e-06 19.8253C-0.00299705 23.7151 3.06595 25.8957 6.96328 25.8986C10.7425 25.9015 12.8304 24.0748 13.5407 21.8971L13.5379 25.4368L17.2778 25.4396L17.2887 11.3585C17.2917 7.39094 14.3409 5.21043 9.26252 5.20661C4.10545 5.20273 1.11152 7.84554 0.597016 11.3849L4.53371 11.3878C4.77166 9.13193 6.50467 8.00519 9.22099 8.00724C11.898 8.00925 13.3143 9.09946 13.3132 10.5387C13.3121 12.0136 11.579 12.4727 8.92425 13.176C8.63845 13.2517 8.34197 13.3302 8.03582 13.4132C3.11395 14.6931 0.00309142 15.8188 2.19646e-06 19.8253ZM13.4658 16.8792C13.4632 20.1855 11.4926 23.1014 8.06772 23.0988C5.78443 23.0971 4.09258 21.89 4.09426 19.7117C4.09609 17.3389 6.14386 16.4458 9.25452 15.5924C11.5777 14.9329 12.9954 14.3116 13.4686 13.1839L13.4658 16.8792Z"></path>
                        </svg>
                    </a>

                </div>

                <div className="transition-colors duration-300 px-[var(--size-20)] max-lg:hidden">
                    <ul className="menu_header menu_global relative lowercase flex items-center gap-[2.083333333333333vw] text-[20px]">
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

                <div className="transition-colors duration-300 max-lg:hidden cursor-pointer absolute right-0 inset-y-0 flex items-center justify-center">
                    <div className="block bg-black absolute top-0 left-0 w-[0.5px] h-full"></div>
                    <a href="https://atolldigital.com/fr/" className="h-[3.472vw] text-[1vw] font-medium px-[1vw] flex items-center justify-center w-full overflow-hidden leading-none">
                        <span class="group relative flex flex-col overflow-hidden">
                            <span className="translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center">GIT</span>
                            <span className="translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-center">GIT</span>
                        </span>
                    </a>
                
                </div>
                <span className="max-lg:hidden block border-b border-current absolute bottom-0 left-0 w-full"></span>
            </div>
            <section className='relative overflow-x-clip' ref={section01Ref}>
                <div className='grid grid-cols-2'>
                    <div className='absolute top-[-50px] left-[1.38vw] lg:static lg:pb-[2.013888888888889vw] lg:pl-[var(--size-20)] lg:pr-[1.9444444444444444vw] lg:pt-[1.6666666666666667vw]'>
                        <div className="pl-[1.38vw] flex flex-nowrap items-end">
                            <svg className="mr-[1.18px] lg:mr-[0.625vw] w-[23.98px] lg:w-[13.194444444444445vw] h-auto" width="190" height="230" viewBox="0 0 190 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.40752e-05 162.436C-0.0328505 205.586 33.6058 229.776 76.3243 229.808C117.748 229.84 140.633 209.577 148.419 185.419L148.389 224.685L189.381 224.717L189.5 68.5129C189.534 24.5002 157.19 0.31159 101.526 0.26909C44.9997 0.22609 12.1833 29.5431 6.54387 68.8049L49.6939 68.8379C52.302 43.8132 71.2975 31.3142 101.071 31.3369C130.413 31.3592 145.938 43.453 145.926 59.4189C145.913 75.7799 126.918 80.8729 97.8184 88.6739C94.6858 89.5139 91.4361 90.3859 88.0803 91.3059C34.1319 105.504 0.0338849 117.992 2.40752e-05 162.436ZM147.598 129.755C147.57 166.432 125.97 198.778 88.43 198.75C63.403 198.73 44.8586 185.34 44.877 161.176C44.8971 134.854 67.3427 124.947 101.438 115.48C126.903 108.164 142.442 101.272 147.629 88.7619L147.598 129.755Z" fill="#091423"></path>
                            </svg>
                            <svg className="mr-[0.13px] lg:mr-[0.06944444444444445vw] w-[15.84px] lg:w-[8.75vw] h-auto" width="126" height="279" viewBox="0 0 126 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M125.961 90.6848L77.6332 90.6479V90.6839L34.5732 90.6511L77.5952 140.443L77.5342 219.667C77.5192 239.947 80.9662 245.991 99.5212 246.005L125.842 246.025L125.817 278.819L86.5512 278.789C45.9902 278.758 34.3532 260.626 34.3822 222.654L34.4832 90.6151L0.825195 90.5894L0.850204 58.6584L34.5072 58.684L34.5522 0L77.7022 0.0328751L77.6572 58.7169L125.985 58.7537L125.961 90.6848Z" fill="#091423"></path>
                            </svg>
                            <svg className="mr-[2.53px] lg:mr-[1.3888888888888888vw] w-[27.36px] lg:w-[15.138888888888888vw] h-auto" width="218" height="231" viewBox="0 0 218 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.980514 114.787C0.929514 181.238 43.6115 230.03 109.2 230.08C174.356 230.13 217.112 181.403 217.162 114.952C217.212 49.3639 174.53 0.571611 109.374 0.522011C43.7855 0.472011 1.03051 49.1989 0.980514 114.787ZM171.423 114.917C171.387 162.814 148.491 196.885 109.225 196.855C69.5265 196.824 46.6825 162.719 46.7195 114.822C46.7555 67.3569 69.6505 33.7173 109.348 33.7475C148.615 33.7774 171.46 67.4519 171.423 114.917Z" fill="#091423"></path>
                            </svg>
                            <svg className="mr-[4.11px] lg:mr-[2.2222222222222223vw] w-[5.44px] lg:w-[3.0555555555555554vw] h-auto" width="44" height="280" viewBox="0 0 44 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.415649 0L43.1346 0.0325458L42.9006 279.032L0.182617 279L0.415649 0Z" fill="#091423"></path>
                            </svg>
                            <svg className=" w-[5.44px] lg:w-[3.0555555555555554vw] h-auto" width="44" height="280" viewBox="0 0 44 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.860962 0.0576172L43.58 0.0901631L43.3459 279.09L0.62793 279.057L0.860962 0.0576172Z" fill="#091423"></path>
                            </svg>
                        </div>
                    </div>
                    <div className='pt-[38px] lg:pt-0 pb-3 lg:pb-[1.944444444444445vw] relative'>
                        <div className="max-lg:hidden absolute left-0 bottom-0 h-full w-[0.5px] bg-black"></div>
                        <div className='max-lg:hidden px-[var(--size-20)] flex justify-between'>
                            <ul className="menu_header lowercase flex items-center gap-[2.083333333333333vw] font-medium text-[20px]">
                                <li>
                                    <a href="#" className='pl-[1.388vw] pt-[1.5277777777777777vw] pb-[1.5277777777777777vw] px-0 relative flex items-center overflow-hidden'>
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
                                    <a href="#" className="pt-[1.5277777777777777vw] pb-[1.5277777777777777vw] px-0relative flex items-center">
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
                                    <span className="relative text-[12px] -top-[5px] left-[3px]">(10)</span>
                                </li>
                                <li>
                                    <a href="#" className='pt-[1.5277777777777777vw] pb-[1.5277777777777777vw] px-0relative flex items-center overflow-hidden'>
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
                            <div className='flex items-center justify-center mr-6'>
                                <a href="#" className='pt-[1.5277777777777777vw] pb-[1.5277777777777777vw] px-0relative flex items-center overflow-hidden'>
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
                                <h1 className="tracking-[-2px] text-[24px] lg:text-[1.3333333333333335vw] leading-[124%]">
                                    {/* 이 포트폴리오는 모던하고 감각적인 인터랙티브 웹사이트로 React + Tailwind CSS + Framer Motion으로 구성되며, 깔끔한 UI와 부드러운 전환 애니메이션, 3D 모델 임베드 및 가로 스크롤 기반 인터랙션 등 다양한 웹 기술이 활용됩니다. */}
                                    프론트엔드 개발자 조윤하의 포트폴리오 사이트
                                    React + Tailwind CSS + Framer Motion을 중점으로 구현
                                </h1>
                            </div>
                        </div>
                        <div className='mt-[71px] pl-[20px] pr-[20px] lg:bottom-[var(--size-20)] lg:inset-x-[var(--size-20)] text-center lg:text-left'>
                            <div className="inline-flex">
                                <div id="border_black" className="w-[260px] h-[50px] pl-4 lg:pl-[1.1111111111111112vw] pr-2.5 lg:pr-[0.6944444444444444vw] min-h-10 lg:min-h-[2.7777777777777777vw] py-1 lg:py-[.3vw] flex items-center justify-between rounded-[5px]">
                                    <div className="flex items-center">
                                        <div className="text-[12px] lg:text-[0.8333333333333334vw] uppercase text-right font-medium leading-[100%]">
                                            portfolio<br />
                                            since
                                        </div>
                                        <div className="ml-4 lg:ml-[1.0416666666666665vw] font_editorial text-[28px] lg:text-[1.9444444444444444vw] leading-none">©2025</div>
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
                        <div className="animate-up-down">
                            <span>( SCROLL )</span>
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
                                {/* <ambientLight intensity={10} /> */}
                                <directionalLight
                                    position={[0, 10, 0]} // 위치
                                    intensity={40} // 강도
                                    castShadow
                                />

                                <Model position={position} />
                            </Canvas>
                        </Suspense>
                    </motion.div>
                </div>
                <div id="about" className='mt-[-35vw] lg:mt-[-23vw] mb-[116px] lg:mb-[20vw]'>
                    <div className='max-w-full pl-[1.38vw] pr-[1.38vw'>
                        <div className='relative'>
                            <div className="hidden inline-flex absolute left-0 invisible opacity-0 width-view-indent lg:[font-size:0.8333333333vw]">ABOUT</div>
                            <div className="-mb-4 lg:mb-[-1.25vw] pointer-events-none lg:[font-size:0.8333333333vw]">ABOUT</div>
                            <div className="text-[20px] lg:text-[1.3222222222222223vw] leading-[128%] tracking-tight lg:tracking-normal hide_br_tablet">
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
                                        이름처럼 ‘믿을 윤(允)’, ‘연꽃 하(荷)’의 의미를 담아, 신뢰감 있고 성장하는 개발자가 되고자 합니다.
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
            <div id="section02" className="mb-5 lg:mb-[3.6111111111111107vw]">
                <div className="max-w-full pl-[1.38vw] pr-[1.38vw]">
                    <div className="pr-[60px] lg:pr-[11.527777777777779vw] relative">
                        <div class="absolute right-0 lg:right-[1.3194444444444444vw] -top-0.5 lg:top-[-0.06944444444444445vw] text-[18px] lg:text-[2.2222222222222223vw] leading-[100%]">
                            <span class="inline-flex mx-[3px] lg:mx-[0.4166666666666667vw]">
                                ( 04 )					</span>
                        </div>
                        <div>
                            <img className='w-full h-auto max-w-full' src={process.env.PUBLIC_URL + 'featured.svg'} alt='portfolio' />
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
                                <a href='https://gaefadgdfdfsdf.github.io/portfolio_1_hyundai/' target='_blank' className='absolute inset-0 z-[1]' />
                                <div className='py-5 lg:py-[1.38vw] flex flex-col-reverse lg:flex-row lg:h-full'>
                                    <div className='lg:w-[32.84722222222222vw] lg:pr-[2.7777777777777777vw] mt-[18px] lg:mt-0'>
                                        <h2 className='text-[32px] lg:text-[4.166666666666666vw] leading-[100%] tracking-tighter font-medium'>hyundai</h2>
                                        <div className='text-[14px] lg:text-[0.9722222222222222vw] mt-2.5 lg:mt-[1vw] font-medium'>html & css & JavaScript</div>
                                        <div className='text-[16px] description lg_br_enable mt-5 lg:mt-[2vw] lg:tracking-tight leading-[134%]'>
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
                                        <h2 className='text-[32px] lg:text-[4.166666666666666vw] leading-[100%] tracking-tighter font-medium'>glaxywatch</h2>
                                        <div className='text-[14px] lg:text-[0.9722222222222222vw] mt-2.5 lg:mt-[1vw] font-medium'>html & css & JavaScript</div>
                                        <div className='text-[16px] description lg_br_enable mt-5 lg:mt-[2vw] lg:tracking-tight leading-[134%]'>
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
                                <a href='https://gaefadgdfdfsdf.github.io/portfolio2_glaxywatch/' target='_blank' className='absolute inset-0 z-[1]' />
                                <div className='py-5 lg:py-[1.38vw] flex flex-col-reverse lg:flex-row lg:h-full'>
                                    <div className='lg:w-[32.84722222222222vw] lg:pr-[2.7777777777777777vw] mt-[18px] lg:mt-0'>
                                        <h2 className='text-[32px] lg:text-[4.166666666666666vw] leading-[100%] tracking-tighter font-medium'>herryporter</h2>
                                        <div className='text-[14px] lg:text-[0.9722222222222222vw] mt-2.5 lg:mt-[1vw] font-medium'>react & JavaScript & tailwandcss</div>
                                        <div className='text-[16px] description lg_br_enable mt-5 lg:mt-[2vw] lg:tracking-tight leading-[134%]'>
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
                            <div className='lg:h-[34.29166666666667vw] overflow-hidden relative'>
                                <div className='absolute bottom-0 left-0 w-full bg-black h-[1px] z-10'></div>
                                <a href='https://gaefadgdfdfsdf.github.io/portfolio2_glaxywatch/' target='_blank' className='absolute inset-0 z-[1]' />
                                <div className='py-5 lg:py-[1.38vw] flex flex-col-reverse lg:flex-row lg:h-full'>
                                    <div className='lg:w-[32.84722222222222vw] lg:pr-[2.7777777777777777vw] mt-[18px] lg:mt-0'>
                                        <h2 className='text-[32px] lg:text-[4.166666666666666vw] leading-[100%] tracking-tighter font-medium'>flying bird</h2>
                                        <div className='text-[14px] lg:text-[0.9722222222222222vw] mt-2.5 lg:mt-[1vw] font-medium'>HTML & CSS - animation</div>
                                        <div className='text-[16px] description lg_br_enable mt-5 lg:mt-[2vw] lg:tracking-tight leading-[134%]'>
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
                                            <img className='object-cover w-full relative h-full lg:top-1/2 lg:-translate-y-1/2' src={process.env.PUBLIC_URL + 'herryporter-1.jpg'} alt='birds' />
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
                                                    <div className='text-left leading-[100%] text-[12px] lg:text-[0.8333333333333334vw] tracking-tighter uppercase'>
                                                        ADDED<br />
                                                        PORTFOLIO<br />
                                                        PROJECTS
                                                    </div>
                                                </div>
                                                <div className='ml-4 lg:ml-[2vw] font_editorial text-[44px] lg:text-[3.0555555555555554vw] leading-none'>4</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='class="lg:w-[calc(100%-32.84722222222222vw)] mt-[37px] lg:mt-0'>
                                        <div className='text-[1.25vw] leading-[133%] max-lg:max-w-[290px] max-lg:mx-auto'>
                                            More in the vault. <br />
                                            Take a look.
                                        </div>
                                        <div className='mt-[35px] lg:mt-[2.638888888888889vw]'>
                                            <a href='' className='text-white bg-[#091423] rounded-[5px] block h-[70px] min-w-[190px] lg:min-w-[13.194444444444445vw] leading-[70px]'>
                                                <span className='relative overflow-visible flex flex-col items-center'>
                                                    <span className='opacity-0 flex absolute flex-nowrap items-center'>SEE MORE</span>
                                                    <span className='flex absolute flex-nowrap items-center'>SEE MORE</span>
                                                </span>
                                            </a>
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

export default Section01