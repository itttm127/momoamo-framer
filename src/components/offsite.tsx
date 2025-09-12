"use client"

import Image from "next/image";
import { useOffsiteAnimations } from "@/animations/scrollAnimations";

// Images
import Img1 from '@/assets/images/offsite/img1.jpg';
import Img2 from '@/assets/images/offsite/img2.jpg';
import Img3 from '@/assets/images/offsite/img3.jpg';
import Img4 from '@/assets/images/offsite/img4.jpg';
import Img5 from '@/assets/images/place/img1.jpg';
import Img6 from '@/assets/images/place/img2.jpg';
import Img7 from '@/assets/images/place/img3.jpg';
import Img8 from '@/assets/images/place/img4.jpg';

const OffsiteSection = () => {
    const { titleRef, descriptionRef, imagesRef, bottomContentRef } = useOffsiteAnimations();

    return (
        <section className="w-full mx-auto relative overflow-hidden md:py-[123px] py-[64px] md:px-0 px-4 offsite-section">
            <div ref={titleRef} className="md:max-w-[915px] max-w-[358px]">
                <h1 className="text-start text-offsite-secondary font-nichrome font-bold md:text-[72px] text-[58px] uppercase leading-14">
                    momoamo :
                </h1>
                <h1 className="text-start text-offsite-secondary font-nichrome font-bold md:text-[72px] text-[58px] mb-6 uppercase md:leading-normal  leading-14">plus qu'un offsite</h1>
                <p className="text-start text-offsite-secondary font-normal font-nichrome md:text-[40px] text-[26px] tracking-normal">Momoamo crée une collection de maisons d'exception pensées pour les séjours professionnels.</p>
            </div>
            <div ref={descriptionRef} className="w-full flex justify-end md:my-[72px] my-[32px]">
                <p className="md:max-w-[915px] max-w-[358px] text-offsite-secondary font-normal font-nichrome text-[20px] tracking-normal text-end">À mi-chemin entre maison de famille, bureau éphémère et hôtel haut de gamme, chaque lieu Momoamo est un cadre unique pour travailler autrement, se reconnecter et créer des souvenirs communs.</p>
            </div>

            {/* Images with Horizontal Slide Animation */}
            <div ref={imagesRef} className="horizontal-sliders flex flex-nowrap md:h-[826px] h-[320px] md:min-w-[2880px] min-w-[1800px] relative">
                <div className="slide md:h-[826px] h-[320px] relative md:min-w-[1440px] min-w-[408px]">
                    <Image src={Img1.src} alt="Offsite" width={485} height={728} className="absolute z-[1] left-0 bottom-0 md:w-[485px] md:h-[728px] w-[188px] h-[282px] object-cover" />
                    <Image src={Img2.src} alt="Offsite" width={430} height={535} className="absolute top-0 md:left-[429px] left-[166px] md:w-[430px] md:h-[535px] w-[165px] h-[205px] object-cover" />
                    <Image src={Img3.src} alt="Offsite" width={357} height={465} className="absolute bottom-0 md:right-[313px] -right-[67px] md:w-[357px] md:h-[465px] w-[137px] h-[178px] object-cover" />
                    <Image src={Img4.src} alt="Offsite" width={431} height={535} className="absolute top-0 md:-right-[160px] -right-[260px] md:w-[431px] md:h-[535px] w-[165px] h-[205px] object-cover" />
                </div>
                <div className="slide md:h-[826px] h-[320px] relative md:min-w-[1440px] min-w-[408px] md:ml-0 ml-56">
                    <Image src={Img5.src} alt="Offsite" width={485} height={728} className="absolute z-[1] left-0 bottom-0 md:w-[485px] md:h-[728px] w-[188px] h-[282px] object-cover" />
                    <Image src={Img6.src} alt="Offsite" width={430} height={535} className="absolute top-0 md:left-[429px] left-[166px] md:w-[430px] md:h-[535px] w-[165px] h-[205px] object-cover" />
                    <Image src={Img7.src} alt="Offsite" width={357} height={465} className="absolute bottom-0 md:right-[313px] -right-[67px] md:w-[357px] md:h-[465px] w-[137px] h-[178px] object-cover" />
                    <Image src={Img8.src} alt="Offsite" width={431} height={535} className="absolute top-0 md:-right-[160px] -right-[260px] md:w-[431px] md:h-[535px] w-[165px] h-[205px] object-cover" />
                </div>
            </div>

            {/* Text */}
            <div ref={bottomContentRef} className="md:mt-[92px] mt-[32px] flex justify-end">
                <div className="md:max-w-[915px] max-w-[358px]">
                    <h1 className="text-start text-offsite-secondary font-nichrome font-bold md:text-[72px] text-[58px] uppercase leading-14">
                        L'art de créer des
                    </h1>
                    <h1 className="text-start text-offsite-secondary font-nichrome font-bold md:text-[72px] text-[58px] mb-6 uppercase md:leading-normal  leading-14">moments inoubliables</h1>
                    <p className="text-start text-offsite-secondary font-normal font-nichrome md:text-[40px] text-[26px] tracking-normal mb-6 leading-8">Chez Momoamo, on croit que les meilleures expériences sont celles qui nous rapprochent.</p>
                    <p className="text-offsite-secondary font-normal font-nichrome text-[20px] tracking-normal text-start leading-6">C'est pourquoi nous créons des lieux où l'on se sent vraiment chez soi, pour vivre des moments partagés qui sortent du cadre et marquent les esprit.</p>
                </div>
            </div>
        </section>
    );
}

export default OffsiteSection;