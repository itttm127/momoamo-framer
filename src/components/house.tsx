"use client"

import Image from "next/image";
import { useRef } from "react";
import { useHouseAnimations } from "@/animations/scrollAnimations";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

// SVGS
import Arrow_House_Svg from '@/assets/images/svgs/arrow_house.svg';
import Diversity2_Svg from '@/assets/images/house/diversity_2.svg';
import HandMeal_Svg from '@/assets/images/house/hand_meal.svg';
import HomeGear_Svg from '@/assets/images/house/home_and_garden.svg';
import Business_Svg from '@/assets/images/house/business_center.svg';

// Images
import Img1 from '@/assets/images/house/img1.jpg';
import Img2 from '@/assets/images/house/img2.jpg';
import Img3 from '@/assets/images/house/img3.jpg';
import Img4 from '@/assets/images/house/img4.jpg';

const features = [
    {
        icon: Diversity2_Svg,
        title: <>La sélection de lieux <br /> rares et singuliers</>,
        description: 'pensés pour l’accueil professionnel (espaces de travail intégrés, qualité du Wi-Fi, ergonomie, ambiance…).',
    },
    {
        icon: HandMeal_Svg,
        title: 'La scénarisation de l’expérience de séjour',
        description: 'avec un accompagnement de A à Z (accueil, restauration, activités, services), qui transforme un offsite en moment marquant.',
    },
    {
        icon: HomeGear_Svg,
        title: <>L’exigence <br /> curatoriale</>,
        description: 'on propose des lieux rares, alignés avec une vision forte de l’expérience professionnelle moderne.',
    },
    {
        icon: Business_Svg,
        title: <>L'angle "pro" assumé<br /> et intégré dès le départ</>,
        description: `là où d'autres adaptent des maisons de vacances pour les séminaires, on conçoit l’expérience autour du besoin (temps de travail, moments d’équipe, logistique fluide).`,
    }


]

const HouseSection = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const { titleRef, swiperRef: swiperAnimRef, featuresRef, descriptionRef } = useHouseAnimations();

    const handleNext = () => {
        swiperRef.current?.slideNext();
    };

    const handlePrev = () => {
        swiperRef.current?.slidePrev();
    };

    return (
        <section className="w-full mx-auto relative overflow-hidden md:py-[123px] py-[64px] md:px-0 px-4">
            <div className="w-full flex justify-between items-end">
                <div ref={titleRef} className="w-full">
                    <h1 className="text-house-secondary font-nichrome font-bold md:text-[72px] text-[58px] uppercase leading-14">Une maison</h1>
                    <h1 className="text-house-secondary font-nichrome font-bold md:text-[72px] text-[58px] uppercase md:leading-normal leading-14">momoamo c'est...</h1>
                </div>
                {/* Navigation */}
                <div className="w-28 h-8 md:flex hidden justify-between">
                    <button
                        className="w-8 h-8 rounded bg-transparent"
                        onClick={handlePrev}
                        aria-label="Previous"
                    >
                        <Image src={Arrow_House_Svg} alt="Arrow" width={24} height={24} className="w-auto h-auto rotate-180" />
                    </button>
                    <button
                        className="w-8 h-8 rounded bg-transparent"
                        onClick={handleNext}
                        aria-label="Next"
                    >
                        <Image src={Arrow_House_Svg} alt="Arrow" width={24} height={24} className="w-auto h-auto" />
                    </button>
                </div>
            </div>

            {/* Slides */}
            <div ref={swiperAnimRef} className="mt-12">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    autoplay={{
                        delay: 180000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    slidesPerView={3}
                    spaceBetween={16}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                        },
                    }}
                    onInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {
                        [
                            { img: Img1.src, title: "de 20 à 50 personnes", description: "Un groupe = Une maison" },
                            { img: Img2.src, title: "À moins de 2h30 des grandes villes", description: "Paris, Lyon, Bordeaux..." },
                            { img: Img3.src, title: "Ancrée dans la nature", description: "Pour s’inspirer, se déconnecter, se dépasser" },
                            { img: Img4.src, title: "Design & singularité", description: "Une groupe = Une maison" }].map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="flex-shrink-0 px-2 relative">
                                        <div
                                            className="relative w-full h-[400px] rounded overflow-hidden"
                                            style={{
                                                background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6) 100%)',
                                                backgroundBlendMode: 'multiply',
                                            }}
                                        >
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                width={429}
                                                height={525}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                                        </div>
                                        {/* Gradient overlay */}
                                        <div className="flex flex-col absolute md:bottom-6 bottom-4 md:left-6 left-4 md:max-w-[351px] max-w-[250px]">
                                            <h1 className="text-[#EEE5D7] font-nichrome font-bold md:text-[32px] text-[28px] uppercase leading-tight">{item.title}</h1>
                                            <p className="text-[#EEE5D7] font-normal font-nichrome md:text-[26px] text-[22px] tracking-normal">{item.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                </Swiper>
            </div>

            {/* Text */}
            <div ref={descriptionRef} className="mt-12 flex justify-end">
                <div className="md:w-[915px] w-[358px]">
                    <h1 className="text-house-secondary font-nichrome font-bold md:text-[72px] text-[58px] uppercase leading-14 text-start">Le vrai savoir-faire</h1>
                    <h1 className="text-house-secondary font-nichrome font-bold md:text-[72px] text-[58px] uppercase md:leading-normal leading-14 text-start">de momoamo®</h1>
                    <p className="text-house-secondary font-normal font-nichrome md:text-[40px] text-[26px] tracking-normal text-start leading-12">Ce n'est pas juste de proposer de belles maisons, mais de créer des parenthèses inspirantes pour les équipes, dans des lieux qui allient exception architecturale, confort hôtelier et expérience sur-mesure.</p>
                </div>
            </div>
            <div ref={featuresRef} className="md:mt-[76px] mt-8 grid md:grid-cols-4 grid-cols-1 gap-8">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-start gap-4 w-[314px]">
                        <Image src={feature.icon} alt={feature.title.toString()} width={40} height={40} className="w-[40px] h-[40px]" />
                        <div className="flex flex-col">
                            <h1 className="text-house-secondary font-nichrome font-bold md:text-[32px] text-[28px] uppercase leading-[100%]">{feature.title}</h1>
                            <p className="text-house-secondary font-normal font-nichrome md:text-[26px] text-[22px] tracking-normal leading-[1.2]">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HouseSection;