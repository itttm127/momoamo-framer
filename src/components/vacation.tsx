"use client"

import Image from "next/image";
import { useVacationAnimations } from "@/animations/scrollAnimations";

// Images
import Img1 from '@/assets/images/vacation/img1.jpg';
import Img2 from '@/assets/images/vacation/img2.jpg';

const VacationSection = () => {
    const { titleRef, firstRowRef, secondRowRef } = useVacationAnimations();

    return (
        <section className="w-full mx-auto relative overflow-hidden md:py-[123px] py-[64px] md:px-0 px-4">
            <div ref={titleRef} className="w-full">
                <h1 className="uppercase text-center text-black-green md:text-8xl text-[58px] font-nichrome font-bold tracking-normal leading-14">Nos valeurs</h1>
                <h1 className="uppercase text-center text-black-green md:text-8xl text-[58px] font-nichrome font-bold tracking-normal md:leading-normal leading-14">donnent vie à votre</h1>
                <h1 className="uppercase text-center text-black-green md:text-8xl text-[58px] font-nichrome font-bold tracking-normal leading-14">séjour de rêve</h1>
            </div>

            <div className="md:mt-[106px] mt-[32px]">
                <div className="grid gap-x-8 gap-y-12">
                    {/* First Row */}
                    <div ref={firstRowRef} className="grid md:grid-cols-3 grid-cols-1 w-full pt-4  border-t border-[#292222]">
                        <div className="flex items-start gap-4">
                            <span className="font-nichrome font-bold md:text-[32px] text-[28px] text-black-green uppercase leading-tight">MAKE IT MEMORABLE</span>
                        </div>
                        <div className="mt-2 flex flex-col md:flex-row gap-4">
                            <Image
                                src={Img1.src}
                                width={429}
                                height={525}
                                alt="Make it memorable"
                                className="md:w-[429px] w-[358px] h-[525px] object-cover rounded"
                            />
                        </div>
                        <p className="text-black-green text-[20px] font-general font-normal md:ml-4 mt-2 md:mt-0">
                            On soigne les détails pour surprendre, marquer et créer de vrais souvenirs collectifs.
                        </p>
                    </div>
                    {/* Second Row */}
                    <div ref={secondRowRef} className="grid md:grid-cols-3 grid-cols-1 w-full pt-4  border-t border-[#292222]">
                        <div className="flex items-start gap-4">
                            <span className="font-nichrome font-bold md:text-[32px] text-[28px] text-black-green uppercase leading-tight">Effortless simplicity</span>
                        </div>
                        <div className="mt-2 flex flex-col md:flex-row gap-4">
                            <Image
                                src={Img2.src}
                                width={429}
                                height={525}
                                alt="Make it memorable"
                                className="md:w-[429px] w-[358px] h-[525px] object-cover rounded"
                            />
                        </div>
                        <p className="text-black-green text-[20px] font-general font-normal md:ml-4 mt-2 md:mt-0">
                            On pense à tout pour que nos invités n’aient plus qu’à profiter. Le confort d’un hôtel, la chaleur d’une maison, la liberté d’un lieu à soi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VacationSection;