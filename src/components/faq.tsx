"use client"

import { useState } from "react";
import { useFAQAnimations } from "@/animations/scrollAnimations";

const paragraph = 'Lorem ipsum dolor sit amet consectetur. Ut tincidunt auctor vel arcu facilisis velit placerat. Nunc augue vulputate diam nibh at. Ultricies molestie augue consectetur augue tincidunt dui nunc egestas. Egestas risus faucibus iaculis lorem. Vitae cras quisque eget pellentesque pellentesque amet tellus scelerisque risus. Eros ut viverra fames etiam. Aliquet lacus non potenti sit. Sed consequat in id arcu ridiculus. Turpis quis mauris tellus mauris. Vulputate donec at amet purus viverra tellus sit. Dignissim dictum sit a fermentum eget sapien sed. Risus scelerisque malesuada lacus feugiat nunc vel imperdiet. At aenean maecenas hac elementum laoreet lorem pulvinar aliquet.';

const data = [
    {
        title: "Quelles expériences uniques notre lieu peut-il offrir pour des retraites d'entreprise dans la campagne française ?",
        paragraph,
    },
    {
        title: "Comment pouvons-nous personnaliser nos services pour répondre aux besoins spécifiques de votre événement professionnel ?",
        paragraph
    },
    {
        title: 'Quelles sont les meilleures saisons pour organiser un événement dans notre emplacement exceptionnel en pleine nature ?',
        paragraph
    },
    {
        title: "Y a-t-il des activités de renforcement d'équipe disponibles pour les groupes séjournant dans notre établissement ?",
        paragraph
    },
    {
        title: "Quelles accommodations proposez-vous pour les invités d'affaires dans notre retraite pittoresque ?",
        paragraph
    }
];

const FAQSection = () => {
    const { titleRef, accordionRef } = useFAQAnimations();

    return (
        <section className="w-full mx-auto relative overflow-hidden md:py-[123px] py-[64px] md:px-0 px-4">
            <div className="w-full flex md:flex-row flex-col gap-4 justify-between items-start">
                <h1 ref={titleRef} className="text-faq-secondary font-nichrome font-bold md:text-[72px] text-[58px] uppercase leading-14">
                    FAQ
                </h1>
                <div ref={accordionRef} className="">
                    <ul className="accordion-list md:max-w-[915px] max-w-[358px]">
                        {data.map((item, key) => (
                            <li className={`accordion-list__item py-8 border-t border-[#312C2C] ${key === data.length - 1 ? 'border-b' : ''}`} key={key}>
                                <AccordionItem {...item} />
                            </li>
                        ))}
                    </ul>

                    <button className="md:mt-[64px] mt-8uppercase text-[#EEE5D7] bg-[#292222] font-bold font-nichrome md:text-[20px] text-[18px] md:w-[152px] w-full md:h-[60px] h-[48px] flex justify-center items-center gap-2 rounded">
                        Voir plus
                    </button>
                </div>
            </div>
        </section>
    );
}

const AccordionItem = ({ title, paragraph }: { title: string, paragraph: string }) => {
    const [opened, setOpened] = useState(false);

    return (
        <div
            className={`accordion-item ${opened ? 'accordion-item--opened' : ''}`}
            onClick={() => setOpened(!opened)}
        >
            <div className="accordion-item__line">
                <h3 className="font-general font-medium text-[20px] uppercase text-[#273A1F] text-faq-secondary leading-none">{title}</h3>
                <span className="accordion-item__icon" />
            </div>
            <div className="accordion-item__inner">
                <div className="accordion-item__content">
                    <p className="font-general font-normal text-[20px] text-faq-secondary">{paragraph}</p>
                </div>
            </div>
        </div>
    );
}


export default FAQSection;