"use client"

import Image from "next/image";
import { useRef } from "react";
import { useCastleAnimations } from "@/animations/scrollAnimations";

import HanSwiper, { HanSwiperRef } from "./han-swiper";
import Arrow_Svg from '@/assets/images/svgs/castle_arrow.svg';
import Button_Arrow_Svg from '@/assets/images/svgs/arrow_forward.svg';
import Bed_Svg from '@/assets/images/svgs/bed.svg';
import ChairAlt_Svg from '@/assets/images/svgs/chair_alt.svg';
import Forest_Svg from '@/assets/images/svgs/forest.svg';
import Outdoor_Grill_Svg from '@/assets/images/svgs/outdoor_grill.svg';
import Nightlife_Svg from '@/assets/images/svgs/nightlife.svg';
import Castle_Svg from '@/assets/images/svgs/castle.svg';
import Pool_Svg from '@/assets/images/svgs/pool.svg';
import Padel_Svg from '@/assets/images/svgs/padel.svg';
import Sports_Golf_Svg from '@/assets/images/svgs/sports_golf.svg';

const features = [
    {
        icon: Bed_Svg,
        title: '21 chambres twinables avec salle de douche',
    },
    {
        icon: ChairAlt_Svg,
        title: '2 chambres de 5 lits'
    },
    {
        icon: Forest_Svg,
        title: '7 espaces de réunions / travail',
    },
    {
        icon: Outdoor_Grill_Svg,
        title: 'Espaces de détente extérieur, intérieur, modulables...',
    },
    {
        icon: Nightlife_Svg,
        title: 'Un grand espace modulable de réception',
    },
    {
        icon: Forest_Svg,
        title: 'Terrain de 90 Hectares de forêt',
    },
    {
        icon: Castle_Svg,
        title: '4 bâtiments entièrement rénovés',
    },
    {
        icon: Pool_Svg,
        title: 'Piscine chauffée',
    },
    {
        icon: Padel_Svg,
        title: '2 terrains de padel + 1 terrain de tennis',
    },
    {
        icon: Sports_Golf_Svg,
        title: 'Green de golf',
    }

];

const CastleSection = () => {
    const hanSwiperRef = useRef<HanSwiperRef>(null);
    const { titleRef, featuresRef, swiperRef } = useCastleAnimations();

    const handleNext = () => {
        hanSwiperRef.current?.handleNext();
    };

    const handlePrev = () => {
        hanSwiperRef.current?.handlePrev();
    };

    return (
        <section className="w-full mx-auto relative overflow-hidden bg-gray-green md:py-[107px] py-[64px] md:px-0 px-4">
            <div ref={titleRef} className="md:mb-8 mb-6">
                <h1 className="uppercase text-start text-black-green md:text-8xl text-[58px] font-nichrome font-bold tracking-normal">CHÂteau de COURTIGIS</h1>
                <p className="text-start text-black-green md:text-[40px] text-[24px] font-normal font-nichrome tracking-normal max-w-[915px] md:mt-[32px] mt-[24px] leading-[1.1]">Le premier lieu MOMOAMO est un domaine situé à l'est de la forêt d'Orléans à moins d'1h20 de Paris et 15 minutes de la gare de Montargis.</p>
            </div>

            {/* Swiper */}
            <div ref={swiperRef}>
                <HanSwiper ref={hanSwiperRef} slides={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
            </div>

            <div className='md:mt-[49px] mt-[32px] flex justify-between'>
                <div className='md:flex hidden justify-between max-w-28 w-28'>
                    <button
                        className="w-8 h-8 rounded bg-transparent flex justify-center items-center p-[6.67px]"
                        aria-label="Previous"
                        onClick={handlePrev}
                    >
                        <Image src={Arrow_Svg} alt="Arrow" width={18.67} height={18.67} className="w-[18.67px] h-[18.67px]" />
                    </button>
                    <button
                        className="w-8 h-8 rounded bg-transparent flex justify-center items-center p-[6.67px]"
                        aria-label="Next"
                        onClick={handleNext}
                    >
                        <Image src={Arrow_Svg} alt="Arrow" width={18.67} height={18.67} className="w-[18.67px] h-[18.67px] rotate-180" />
                    </button>
                </div>
                <div className="md:w-[915px] w-full">
                    <p className="text-start text-black-green text-[20px] font-normal font-general tracking-normal">
                        A quelques pas de Paris, ce lieu hors-norme vous attend pour vivre une expérience où l’exception devient la règle. Au coeur de 90 hectares de forêt préservés, ce domaine de campagne accueil entre 20 et 50 privilégiés dans un confort haut de gamme, enveloppé dans la nature ici, on se déconnecte (presque) complètement.
                    </p>
                    <br />
                    <p className="text-start text-black-green text-[20px] font-normal font-general tracking-normal">
                        Nous avons choisi ce lieu exceptionnel comme premier bien. Nous avons réalisé près de 2 ans de travaux et souhaitons créer un environnement propice aux échanges et aux moments en équipe.
                    </p>
                </div>
            </div>

            {/* Kind of houses */}
            <div className="w-full rounded-[10px] md:mt-[64px] mt-[40px] px-4 py-8 flex flex-col items-center">
                <h1 className="w-full text-start text-black-green font-nichrome font-bold md:text-[72px] text-[58px] mb-8 uppercase">
                    Les pièces, expériences & loisirs
                </h1>
                <div ref={featuresRef} className="w-full grid md:grid-cols-5 grid-cols-2 gap-y-8 gap-x-6 mb-10">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-start gap-3 md:max-w-[200px] max-w-[150px]">
                            <Image src={feature.icon} alt={feature.title} width={40} height={40} className="w-[40px] h-[40px]" />
                            <span className="text-black-green font-normal font-nichrome md:text-[26px] text-[22px] leading-none">{feature.title}</span>
                        </div>
                    ))}
                </div>
                <button className="uppercase text-[#EEE5D7] bg-[#292222] font-bold font-nichrome md:text-[32px] text-[28px] md:w-[378px] w-[358px] md:h-[72px] h-[60px] flex justify-center items-center gap-[10px] rounded md:py-5 py-4 px-6">
                    RÉSERVER VOTRE OFFSITE
                    <Image src={Button_Arrow_Svg} alt="Arrow" width={20} height={20} className="md:w-[28px] w-[20px] md:h-[28px] h-[20px]" />
                </button>
            </div>
        </section>
    )
}

export default CastleSection;