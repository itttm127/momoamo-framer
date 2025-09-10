import Image from 'next/image';
import Button_Arrow_Svg from '@/assets/images/svgs/arrow_forward.svg';

// Images
import Img1 from '@/assets/images/place/img1.jpg';
import Img2 from '@/assets/images/place/img2.jpg';
import Img3 from '@/assets/images/place/img3.jpg';
import Img4 from '@/assets/images/place/img4.jpg';

const PlaceSection = () => {
    return (
        <section className="w-full mx-auto relative overflow-hidden md:py-[123px] py-[64px] md:px-0 px-4">
            <h1 className="text-center text-black-green md:text-8xl text-[58px] font-nichrome font-bold tracking-normal">Plus qu’un lieu, un moment</h1>
            <div className='flex justify-center items-center md:mt-10 mt-6'>
                <p className="text-center text-black-green md:text-[40px] text-[24px] font-normal font-nichrome tracking-normal max-w-[915px] md:mt-[32px] mt-[24px]">Offrir à chaque équipe un lieu unique, pour vivre
                    une expérience collective qui allie proximité, confort et inspiration</p>
            </div>
            <div className='flex justify-center items-center md:mt-10 mt-8'>
                <button className="uppercase text-[#EEE5D7] bg-[#292222] font-bold font-nichrome md:text-[20px] text-[18px] md:w-[320px] w-full md:h-[56px] h-[48px] flex justify-center items-center gap-2 rounded">
                    RÉSERVER VOTRE OFFSITE
                    <Image src={Button_Arrow_Svg} alt="Arrow" width={20} height={20} className="w-[20px] h-[20px]" />
                </button>
            </div>

            <div className='md:mt-[137px] mt-8'>
                <div className='flex md:gap-8 gap-4 justify-center items-center'>
                    <Image src={Img1} alt="Place" width={474} height={474} className='md:w-[474px] md:h-[474px] w-[165px] h-[165px] object-cover rounded' />
                    <Image src={Img2} alt="Place" width={474} height={711} className='md:w-[474px] md:h-[711px] w-[165px] h-[247px] object-cover rounded' />
                    <Image src={Img3} alt="Place" width={474} height={474} className='md:w-[474px] md:h-[474px] w-[165px] h-[165px] object-cover rounded' />
                    <Image src={Img4} alt="Place" width={474} height={711} className='md:w-[474px] md:h-[711px] w-[165px] h-[247px] object-cover rounded' />
                </div>
            </div>
            <div className='md:mt-[85px] mt-[24px]'>
                <div className="w-full flex flex-col md:flex-row md:gap-16 gap-8">
                    {/* Left: Destinations List */}
                    <div className="flex flex-col w-full">
                        <h2 className="text-black-green font-nichrome font-bold md:text-[100px] text-[58px] uppercase leading-tight mb-6">
                            Destinations<br />à venir
                        </h2>
                        <div className='md:mt-[49px] mt-8 w-full'>
                            {
                                [{ title: "Perche", description: "Oussoy-en-Gâtinais, loiret 45239", date: "2025" },
                                { title: "Normandie", description: "soon", date: "2025" },
                                { title: "Deauville", description: "soon", date: "2025" },
                                { title: "Vexin", description: "soon", date: "2025" }].map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center w-full border-t border-[#292222] md:h-24 h-32">
                                        <div className='md:w-[932px] w-full flex md:flex-row flex-col md:justify-between items-start md:items-center'>
                                            <h3 className="text-black-green font-nichrome font-bold md:text-[32px] text-[28px] uppercase leading-tight md:max-w-60 max-w-full">{item.title}</h3>
                                            <p className="text-black-green font-normal font-nichrome text-[20px] tracking-normal text-end">{item.description}</p>
                                        </div>
                                        <p className="text-black-green font-normal font-nichrome text-[20px] tracking-normal">{item.date}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PlaceSection;