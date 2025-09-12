"use client"

import Image from 'next/image';
import { useFooterAnimations } from '@/animations/scrollAnimations';
import Img3 from '@/assets/images/offsite/img3.jpg';
import Arrow_Svg from '@/assets/images/hero/arrow_forward.svg';
import M_Svg from '@/assets/images/hero/letters/m.svg';
import O_Svg from '@/assets/images/hero/letters/o.svg';
import A_Svg from '@/assets/images/hero/letters/a.svg';
import R_Svg from '@/assets/images/hero/letters/r.svg';

// Images
import UserImg from '@/assets/images/footer_user.jpg';

const FooterSection = () => {
    const { topContentRef, imageRef, socialRef, linksRef, lettersRef } = useFooterAnimations();

    return (
        <section className="w-full mx-auto relative overflow-hidden md:py-[123px] py-[64px] md:px-0 px-4">
            <div className="w-full flex md:flex-row flex-col justify-between md:gap-7 gap-4">
                <div ref={topContentRef} className="w-full">
                    <h1 className="text-lime-green font-nichrome font-bold md:text-[72px] text-[58px] uppercase leading-18">
                        Join the <br /> community
                    </h1>
                    <p className="text-lime-green font-normal font-nichrome md:text-[40px] text-[26px] tracking-normal">
                        Pour les lève-tôt abonnés à notre newsletter et les clients de Kymono qui participent, on a une surprise spéciale pour vous. Petit indice : ça ne se reproduira pas !
                    </p>
                    <button className="md:mt-6 mt-8 uppercase text-dark-green bg-lime-green font-bold font-nichrome md:text-[32px] text-[28px] md:w-[254px] w-full h-[60px] flex justify-center items-center gap-2">BE FIRST TO JOIN <Image src={Arrow_Svg} alt="Arrow" width={24} height={24} className="w-auto h-auto" /></button>
                </div>
                <div ref={imageRef} className="w-full">
                    <Image src={Img3.src} alt="Offsite" width={357} height={465} className="md:w-[698px] md:h-[517px] w-[358px] h-[290px] object-cover" />
                </div>
            </div>

            <div className='w-full md:mt-[64px] mt-8 flex md:flex-row flex-col justify-between md:gap-7 gap-4'>
                <div ref={socialRef} className='w-full flex flex-col justify-between'>
                    <div className='relative cursor-pointer group touch-manipulation'>
                        <h1 className='text-lime-green font-nichrome font-bold md:text-[96px] text-[58px] uppercase leading-18'>
                            INSTAGRAM
                        </h1>
                        <Image src={UserImg} alt="User" width={100} height={100} className="w-[110px] h-[166px] object-cover absolute top-6 md:left-[45%] right-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className='relative cursor-pointer group touch-manipulation'>
                        <h1 className='text-lime-green font-nichrome font-bold md:text-[96px] text-[58px] uppercase leading-18'>
                            LINKEDIN
                        </h1>
                        <Image src={UserImg} alt="User" width={100} height={100} className="w-[110px] h-[166px] object-cover absolute top-6 md:left-[30%] right-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />
                    </div>
                </div>
                <div ref={linksRef} className='w-full flex flex-col justify-between md:min-h-[192px] min-h-[154px]'>
                    <div className='w-full'>
                        <h3 className='text-lime-green font-nichrome font-bold text-[20px] uppercase leading-18'>MORE</h3>
                        <p className="text-lime-green font-nichrome font-normal text-[16px] mt-[19px]">Privacy Policy</p>
                        <p className="text-lime-green font-nichrome font-normal text-[16px]">Cookie Policy</p>
                    </div>
                    <div className='w-full'>
                        <p className="text-lime-green font-nichrome font-normal text-[16px]">© Momoamo - All rights reserved 2024</p>
                    </div>
                </div>

            </div>

            <div className='md:mt-[56px] mt-8'>
                <div ref={lettersRef} className="flex justify-center md:gap-1 gap-0 relative z-[1]">
                    {/* M */}
                    <Image src={M_Svg} alt="M" width={242} height={242} className="h-12 md:h-60 w-auto" />

                    {/* O */}
                    <Image src={O_Svg} alt="O" width={242} height={242} className="h-12 md:h-60 w-auto" />

                    {/* M */}
                    <Image src={M_Svg} alt="M" width={242} height={242} className="h-12 md:h-60 w-auto" />

                    {/* O */}
                    <Image src={O_Svg} alt="O" width={242} height={242} className="h-12 md:h-60 w-auto" />

                    {/* A */}
                    <Image src={A_Svg} alt="A" width={242} height={242} className="h-12 md:h-60 w-auto" />

                    {/* M */}
                    <Image src={M_Svg} alt="M" width={242} height={242} className="h-12 md:h-60 w-auto" />

                    {/* O */}
                    <Image src={O_Svg} alt="O" width={242} height={242} className="h-12 md:h-60 w-auto" />

                    {/* R */}
                    <Image src={R_Svg} alt="R" width={44} height={46} className="h-3 md:h-11 w-auto" />
                </div>
            </div>
        </section>
    );
}

export default FooterSection;