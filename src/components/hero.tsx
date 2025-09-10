import Image from 'next/image';

// SVGS
import Arrow_Svg from '@/assets/images/hero/arrow_forward.svg';
import M_Svg from '@/assets/images/hero/letters/m.svg';
import O_Svg from '@/assets/images/hero/letters/o.svg';
import A_Svg from '@/assets/images/hero/letters/a.svg';
import R_Svg from '@/assets/images/hero/letters/r.svg';

// Images
import User3Image from '@/assets/images/hero/user3.jpg';
import User2Image from '@/assets/images/hero/user2.jpg';
import User1Image from '@/assets/images/hero/user1.jpg';
import HouseImage from '@/assets/images/hero/house.jpg';

const HeroSection = () => {
    return (
        <section className="w-full py-7 mx-auto relative md:h-[950px] h-[812px] overflow-hidden">
            <header className="w-full flex justify-between items-center md:px-0 px-4">
                <div className="flex md:justify-start justify-between items-center gap-6 w-full">
                    <a className="uppercase leading-none tracking-wider font-nichrome text-lime-green text-xl font-bold no-underline cursor-pointer">INSTAGRAM</a>
                    <a className="uppercase leading-none tracking-wider font-nichrome text-lime-green text-xl font-bold no-underline cursor-pointer">LINKEDIN</a>
                </div>
                <div className="justify-end items-center gap-6 hidden md:flex">
                    <button className="uppercase leading-none tracking-wider font-nichrome font-bold text-lime-green text-2xl w-[159px] h-[44px] border-[1px] border-lime-green">CONNEXION</button>
                    <button className="uppercase leading-none tracking-wider font-nichrome font-bold text-dark-green text-2xl w-[159px] h-[44px] bg-lime-green">PRÉ-RÉSERVER</button>
                </div>
            </header>

            <main className="w-full h-full md:mt-10 mt-[18px] md:px-0 px-4">
                <div className="w-full">
                    <div className="flex justify-center md:gap-1 gap-0 relative z-[1]">
                        {/* M */}
                        <Image src={M_Svg} alt="M" width={200} height={187} className="h-12 md:h-48 w-auto" />

                        {/* O */}
                        <Image src={O_Svg} alt="O" width={192} height={191} className="h-12 md:h-48 w-auto" />

                        {/* M */}
                        <Image src={M_Svg} alt="M" width={200} height={187} className="h-12 md:h-48 w-auto" />

                        {/* O */}
                        <Image src={O_Svg} alt="O" width={192} height={191} className="h-12 md:h-48 w-auto" />

                        {/* A */}
                        <Image src={A_Svg} alt="A" width={146} height={187} className="h-12 md:h-48 w-auto" />

                        {/* M */}
                        <Image src={M_Svg} alt="M" width={200} height={187} className="h-12 md:h-48 w-auto" />

                        {/* O */}
                        <Image src={O_Svg} alt="O" width={192} height={191} className="h-12 md:h-48 w-auto" />

                        {/* R */}
                        <Image src={R_Svg} alt="R" width={44} height={46} className="h-3 md:h-11 w-auto" />
                    </div>
                    <div className='w-full justify-center items-center md:mt-[87px] mt-[83px] relative z-[3]'>
                        <h1 className='uppercase text-center leading-none font-nichrome text-lime-green font-bold md:text-[80px] text-[58px] tracking-normal'>Votre prochain offsite</h1>
                        <h1 className='uppercase text-center leading-none font-nichrome text-lime-green font-bold md:text-[80px] text-[58px] tracking-normal'>commence ici</h1>
                        <p className='my-6 text-center text-lime-green text-[20px] font-normal tracking-normal'>Une collection de maisons d’exception destinée aux séjours en équipe</p>
                        <div className="w-full flex justify-center">
                            <button className="uppercase text-dark-green bg-lime-green font-bold font-nichrome md:text-[32px] text-[28px] md:w-[378px] md:h-[72px] w-[358px] h-[60px] flex justify-center items-center gap-2">RÉSERVER VOTRE OFFSITE <Image src={Arrow_Svg} alt="Arrow" width={24} height={24} className="w-auto h-auto" /></button>
                        </div>
                    </div>
                    {/* Images with overlay */}
                    <div className='w-full h-full'>
                        <Image src={HouseImage.src} alt="House" width={355} height={533} className="md:w-[355px] md:h-[533px] w-[219px] h-[329px] object-cover absolute md:right-[56px] md:bottom-[132px] -right-[20px] bottom-[377px]" />
                        <Image src={User1Image.src} alt="User 1" width={162} height={243} className="md:w-[162px] md:h-[243px] w-[129px] h-[193px] object-cover absolute md:bottom-[314px] md:left-[183px] bottom-[118px] left-0 z-[2]" />
                        <Image src={User2Image.src} alt="User 2" width={206} height={309} className="md:w-[206px] md:h-[309px] w-[164px] h-[245px] object-cover absolute md:bottom-[61px] md:left-[231px] -bottom-[50px] left-[31px] z-[1]" />
                        <Image src={User3Image.src} alt="User 3" width={201} height={250} className="absolute bottom-0 left-0 w-[201px] h-[250px] object-cover md:block hidden" />
                    </div>
                </div>
            </main>
        </section>
    )
}

export default HeroSection;