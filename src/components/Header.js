// Header.js
import React, { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { showHeaderState } from "../store";
import { colorHeaderState } from "../store";

const Header = () => {
    const showHeader = useRecoilValue(showHeaderState);
    const colorHeader = useRecoilValue(colorHeaderState);


    return (
        <>
            <div id="header_sticky"
                style={{
                    top: showHeader ? 0 : -window.innerHeight,
                    left: 0,
                    transition: 'top 0.5s ease in-out',
                    background: colorHeader ? '#091423' : '#e6e8ea',
                    color: colorHeader ? '#fff' : '#000',
                }}

                className={`max-lg:hidden lg:sticky lg:inset-x-0 lg:z-[90] flex max-lg:items-center max-lg:h-[3.4722222222222223vw] bg-[#E6E8EA] lg:bg-opacity-95 lg:backdrop-blur px-[var(--size-20)] lg:px-0 top-header ${showHeader ? 'block' : 'hidden'}`}>
                <div className="transition-colors duration-300 left-logo-header lg:border-r lg:border-current w-[86px] lg:w-[7.083333333333333vw]">
                    <a href="https://gaefadgdfdfsdf.github.io/portfolio4_portfolio/" className="w-full lg:h-full flex items-center justify-center">

                        <svg style={{ fill: colorHeader ? '#fff' : '#091423' }}
                            className="w-full lg:w-[4.305555555555555vw] h-auto" width="122" height="86" viewBox="0 0 657.5 294.49" fill="#091423" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M176.88,0v228.86c0,36.6-31.27,65.63-72.36,65.63H75.93C33.5,294.49,0,265.46,0,228.86v-48.38l62.53-13.46v61.84
                                    c0,16.41,3.57,19.35,21.44,19.35h10.72c16.53,0,19.65-2.94,19.65-19.35V0H176.88z"/>
                                <path d="M361.36,0h67.45l-73.25,201.52v92.97h-62.53v-92.97L219.76,0h67.45l32.16,135.47h9.83L361.36,0z" />
                                <path d="M594.97,0h62.53v294.49h-62.53V177.54h-56.28v116.96h-62.53V0h62.53v131.26h56.28V0z" />
                            </g>
                        </svg>
                    </a>

                </div>

                <div className="transition-colors duration-300 px-[var(--size-20)] max-lg:hidden">
                    <ul className="host-grotesk-bold menu_header menu_global relative lowercase flex items-center gap-[2.083333333333333vw] text-[20px]">
                        <li>
                            <span style={{ background: colorHeader ? '#fff' : '#000', }}
                                className='h-full bg-black absolute bottom-0 left-0 w-[0.5px]'></span>
                        </li>
                    
                        <li className="flex items-center">
                            <a onClick={() => {
                                document.getElementById('section02').scrollIntoView({ behavior: 'smooth' });
                            }}
                                className="overflow-hidden leading-none flex h-[3.472vw] items-center cursor-pointer">
                                <span className="group relative flex flex-col overflow-hidden ">
                                    <span className="pl-[1.041555vw] translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center" >
                                        <img style={{ background: colorHeader ? '#eee' : '#fff' }}
                                            className='absolute -translate-y-1/2 opacity-[0.2] left-0 w-[0.694vw] h-[0.694vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + '/trai_icon.svg'} alt='trai_icon' />
                                        WORK
                                    </span>
                                    <span className="pl-[1.041555vw] translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-cente">
                                        <img
                                            style={{ background: colorHeader ? '#eee' : '#fff' }}
                                            className='absolute -translate-y-1/2 opacity-[0.2] left-0 w-[0.694vw] h-[0.694vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + '/trai_icon.svg'} alt='trai_icon' />
                                        WORK
                                    </span>
                                </span>
                            </a>
                            <span className="font_editorial text-[.9vw] ml-[.2vw] relative top-[-.3vw]">
                                (3)
                            </span>
                        </li>

                        <li>
                            <a onClick={() => {
                                document.getElementById('section03Ref').scrollIntoView({ behavior: 'smooth' });
                            }}
                                className="overflow-hidden leading-none h-[3.472vw] cursor-pointer">
                                <span className="group relative flex flex-col overflow-hidden">
                                    <span className="pl-[1.041555vw] translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center" >
                                        <img style={{ background: colorHeader ? '#eee' : '#fff' }}
                                            className='absolute top-1/5 -translate-y-1/3 opacity-[0.2] left-0 w-[0.694vw] h-[0.694vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + '/trai_icon.svg'} alt='trai_icon' />
                                        skill
                                    </span>
                                    <span className="pl-[1.041555vw] translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-center">
                                        <img style={{ background: colorHeader ? '#eee' : '#fff' }}
                                            className='absolute top-1/5 -translate-y-1/3 opacity-[0.2] left-0 w-[0.694vw] h-[0.694vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + '/trai_icon.svg'} alt='trai_icon' />
                                        skill
                                    </span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => {
                                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                            }}
                                className="overflow-hidden leading-none contact  h-[3.472vw] cursor-pointer">
                                <span className="group relative flex flex-col overflow-hidden">
                                    <span className="pl-[1.141555vw] translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center" >
                                    <svg style={{fill: colorHeader ? '#fff' : '#999' }} className="mr-2" width='20' height='13' viewBox='0 0 17 10' fill='black' xmlns='http://www.w3.org/2000/svg' >
                                      <path class="st0" d="M7.8,0.5c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0c0,0,0,0,0.1,0c0.5,0,1.1,0,1.6,0c0,0,0,0.9,0,2.1c0,1.6,0,3.7-0.1,4
                                        C9.7,6,10,5.7,10.3,5.4c0.3-0.3,0.6-0.6,0.9-0.9c0.2-0.2,0.5-0.5,0.7-0.7c0.6-0.6,1.2-1.2,1.8-1.7c0.4,0.4,0.8,0.8,1.1,1.2
                                        c-0.7,0.7-1.4,1.3-2,2c-0.1,0.1-0.3,0.3-0.4,0.4c-0.3,0.3-0.5,0.5-0.8,0.8c-0.1,0.1-0.2,0.2-0.2,0.2c-0.3,0.3-0.6,0.6-0.9,0.8
                                        c2,0,4,0,6.1,0c0,0.2,0,0.4,0,0.6c0,0.2,0,0.4,0,0.6c0,0.2,0,0.4,0,0.6c0,0-2.1,0-2.8,0c-0.1,0-0.2,0-0.2,0c-0.3,0-0.6,0-0.9,0
                                        c-0.6,0-1.2,0-1.8,0L8.6,6.8L6.2,9.1c-1.9,0-3.8,0-5.6,0c0-0.6,0-1.1,0-1.7c0.9-0.1,1.7,0,2.6,0c0.1,0,0.3,0,0.4,0
                                        c0.6,0,1.1,0,1.7,0c0.4,0,0.8,0,1.2,0c0-0.1-0.1-0.2-0.2-0.2C5.7,6.5,5,5.8,4.3,5.2C3.7,4.6,3,4,2.4,3.3c0,0,0,0,0-0.1c0,0,0,0,0,0
                                        C2.6,3,2.8,2.8,3,2.6C3.2,2.4,3.4,2.2,3.6,2c0.2,0.2,0.3,0.4,0.5,0.5c0.3,0.4,0.7,0.7,1,1.1C5.5,4,5.8,4.4,6.2,4.7
                                        c0.1,0.1,0.1,0.1,0.2,0.2C6.5,4.9,6.6,5,6.7,5.1c0.4,0.3,0.7,0.7,1,1.1c0,0,0.1-0.2,0.1-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2
                                        c0,0,0-0.1,0-0.1c0-0.2,0-0.5,0-0.7v0l0-1.4c0-0.9,0-1.9,0-2.8l0,0C7.8,0.7,7.8,0.6,7.8,0.5z"/> </svg>  
                                        {/* <img
                                            style={{ background: colorHeader ? '#eee' : '#fff' }}
                                            className='absolute top-1/5 -translate-y-1/2 opacity-[0.2] left-0 w-[1.194vw] h-[0.994vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + '/thesun_33.svg'} alt='thesun_33' />
                                        &nbsp;*/}CONTACT 
                                    </span>
                                    <span className="pl-[1.141555vw] translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-cente">
                                      <svg style={{fill: colorHeader ? '#fff' : '#999' }} className="mr-2 relative top-1" width='20' height='13' viewBox='0 0 17 10' fill='black' xmlns='http://www.w3.org/2000/svg' >
                                      <path class="st0" d="M7.8,0.5c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0c0,0,0,0,0.1,0c0.5,0,1.1,0,1.6,0c0,0,0,0.9,0,2.1c0,1.6,0,3.7-0.1,4
                                        C9.7,6,10,5.7,10.3,5.4c0.3-0.3,0.6-0.6,0.9-0.9c0.2-0.2,0.5-0.5,0.7-0.7c0.6-0.6,1.2-1.2,1.8-1.7c0.4,0.4,0.8,0.8,1.1,1.2
                                        c-0.7,0.7-1.4,1.3-2,2c-0.1,0.1-0.3,0.3-0.4,0.4c-0.3,0.3-0.5,0.5-0.8,0.8c-0.1,0.1-0.2,0.2-0.2,0.2c-0.3,0.3-0.6,0.6-0.9,0.8
                                        c2,0,4,0,6.1,0c0,0.2,0,0.4,0,0.6c0,0.2,0,0.4,0,0.6c0,0.2,0,0.4,0,0.6c0,0-2.1,0-2.8,0c-0.1,0-0.2,0-0.2,0c-0.3,0-0.6,0-0.9,0
                                        c-0.6,0-1.2,0-1.8,0L8.6,6.8L6.2,9.1c-1.9,0-3.8,0-5.6,0c0-0.6,0-1.1,0-1.7c0.9-0.1,1.7,0,2.6,0c0.1,0,0.3,0,0.4,0
                                        c0.6,0,1.1,0,1.7,0c0.4,0,0.8,0,1.2,0c0-0.1-0.1-0.2-0.2-0.2C5.7,6.5,5,5.8,4.3,5.2C3.7,4.6,3,4,2.4,3.3c0,0,0,0,0-0.1c0,0,0,0,0,0
                                        C2.6,3,2.8,2.8,3,2.6C3.2,2.4,3.4,2.2,3.6,2c0.2,0.2,0.3,0.4,0.5,0.5c0.3,0.4,0.7,0.7,1,1.1C5.5,4,5.8,4.4,6.2,4.7
                                        c0.1,0.1,0.1,0.1,0.2,0.2C6.5,4.9,6.6,5,6.7,5.1c0.4,0.3,0.7,0.7,1,1.1c0,0,0.1-0.2,0.1-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2
                                        c0,0,0-0.1,0-0.1c0-0.2,0-0.5,0-0.7v0l0-1.4c0-0.9,0-1.9,0-2.8l0,0C7.8,0.7,7.8,0.6,7.8,0.5z"/> </svg>  
                                        {/* <img
                                            style={{ background: colorHeader ? '#eee' : '#fff' }}
                                            className='absolute top-1/5 -translate-y-1/2 opacity-[0.2] left-0 w-[1.194vw] h-[0.994vw] mt-[0.694vw] block' src={process.env.PUBLIC_URL + '/thesun_33.svg'} alt='thesun_33' />
                                        &nbsp;*/}CONTACT 
                                         </span>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <span style={{ background: colorHeader ? '#fff' : '#000', }}
                        className='max-lg:hidden h-[0.5px] bg-black absolute bottom-0 left-0 w-full'></span>
                </div>

                <div className="host-grotesk-bold transition-colors duration-300 max-lg:hidden cursor-pointer absolute right-0 inset-y-0 flex items-center justify-center">
                    <div style={{ background: colorHeader ? '#fff' : '#000', }}
                        className="block bg-black absolute top-0 left-0 w-[0.5px] h-full"></div>
                    <a href="https://github.com/gaefadgdfdfsdf?tab=repositories" target='_blank' className="h-[3.472vw] text-[1vw] font-medium px-[1vw] flex items-center justify-center w-full overflow-hidden leading-none">
                        <span class="group relative flex flex-col overflow-hidden">
                            <span className="translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 absolute top-0 left-0 flex nowrap items-center">GIT</span>
                            <span className="translate-y-0 opacity-100 group-hover:-translate-y-full  transition-transform duration-300 flex nowrap items-center">GIT</span>
                        </span>
                    </a>

                </div>
                <span style={{ background: colorHeader ? '#fff' : '#000', }}
                    className="max-lg:hidden block border-b border-current absolute bottom-0 left-0 w-full"></span>
            </div>
        </>
    );
};

export default Header;
