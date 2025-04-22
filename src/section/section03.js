import React from 'react'

const Section03 = () => {
  return (
   <>
    <div className='bg-[#091423]'>
        <div id="process_block">
            <div className='lg:flex flex-col justify-between lg:h-[calc(100vh-var(3.4722222222222223vw))] lg:sticky lg:top-[var(3.4722222222222223vw)]'>
                <section className='pt-[25px] lg:pt-[1.1111111111111112vw]'>
                    <div className='w-max-full pl-[1.388vw] pr-[1.388vw]'>
                        <div className='relative'>
                            <div className='inline-flex absolute left-0 opacity-0'>PROCESS</div>
                            <div className='font-medium text-white text-[.8333333333333334vw] -mb-4 lg:mb-[-1.5277777777777777vw] pointer-events-none'>PROCESS</div>
                            <div>
                                <h2 className='text-white leading-[107%] tracking-[-0.01em] lg:text-[3.488888888888889vw]'>
                                    <div className='overflow-hidden'>
                                        <div className='relative block text-start'>
                                            <span className='ml-[90.953px]'>
                                            We are combining our love of well-designed websites
                                            </span>
                                        </div>
                                    </div>
                                    <div className='overflow-hidden'>
                                        <div className='relative block text-start'>
                                        with our marketing knowledge to help you thrive.
                                        </div>
                                    </div>
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='lg:overflow-hidden mt-[70px] lg:mt-[4.861111111111112vw] relative pt-[0.694vw)]'>
                    <div className='h-[0.5px] bg-white top-0 left-0 w-full'></div>
                    <div className='lg:static lg:flex lg:flex-nowrap'>
                        <div className='text-white relative z-[1px]'>
                            <div className='lg:min-h-[27.583333vw] lg:w-[34.236111111111114vw] px-[1.38vw] pt-[11px] lg:pt-[1.38vw] pb-5 lg:pb-[2.875vw] lg:flex flex-col justify-between flex-none'>
                                <div className='flex justify-between'>
                                    <div className='pt-[9px] lg:pt-0'>
                                        <div className='text-[12px] lg:text-[0.9722222222222222vw] leading-[114%] font-medium uppercase hide_br_tablet'>DESIGN</div>
                                        <div className='mt-[13px] lg:mt-[1.9444444444444444vw]'>
                                            <img className='lg:w-[2.7777777777777777vw] h-auto' src={process.env.PUBLIC_URL + ' icon_1.svg'} alt='icon_1'/>
                                        </div>
                                    </div>
                                    <div className='text-[92px] lg:text-[9.722222222222223vw] font-medium leading-none lg:mt-[-0.9722222222222222vw]'>
                                        DES
                                    </div>
                                </div>
                                <div className='flex items-end lg:block mt-[30px] lg:mt-0 min-h-[110px] lg:min-h-px'>
                                    <div className='lg:mt-[3.4722222222222223vw] w-full lg:text-[1.25vw] lg:leading-[133%] lg:tracking-[-0.02em]'>
                                    Unique, thoughtfully designed interfaces to<br/>
                                    reinforce your business authority.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative z-[1px] lg:pt-0 pt-[0.694vw]'>
                            <div className='absolute top-0 left-0 h-full w-[0.5px] bg-white'></div>
                        </div>
                        <div className='relative z-[1px] lg:pt-0 pt-[0.694vw]'></div>
                        <div className='relative z-[1px] lg:pt-0 pt-[0.694vw]'></div>
                        <div className='relative z-[1px] lg:pt-0 pt-[0.694vw]'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Section03