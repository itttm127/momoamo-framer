import Image from "next/image"
// SVG
import Arrow_Svg from "@/assets/images/place/place_arrow.svg"
import PowerFramer from "@/assets/images/power/frame.svg"
import PowerLogo from "@/assets/images/power/logo.svg"
import Airbnb_Svg from "@/assets/images/power/airbnb.svg"
import Alan_Svg from "@/assets/images/power/alan.svg"
import Doctolib_Svg from "@/assets/images/power/doctolib.svg"
import Google_Svg from "@/assets/images/power/google.svg"
import Konbini_Svg from "@/assets/images/power/konbini.svg"
import Loreal_Svg from "@/assets/images/power/loreal.svg"
import Microsoft_Svg from "@/assets/images/power/microsoft.svg"
import Netflix_Svg from "@/assets/images/power/netflix.svg"
import Qonto_Svg from "@/assets/images/power/qonto.svg"

// Images
import PowerBanner from "@/assets/images/power/banner.jpg"

const PowerSection = () => {
    return (
        <section className="w-full mx-auto relative overflow-hidden md:py-[123px] py-[64px] md:px-0 px-4">
            <div className="w-full flex justify-between md:gap-14 gap-8">
                <div className="w-full">
                    <h1 className="text-power-secondary font-nichrome font-bold md:text-[100px] text-[58px] uppercase leading-tight mb-6">
                        Powered by <br />KYMONO®
                    </h1>
                    <p className="text-power-secondary font-normal font-nichrome text-[20px] tracking-normal md:mt-[24px] mt-8">
                        Depuis 2017, Kymono aide les entreprises à donner vie à leur culture.Avec des expertises complémentaires — vêtements et objets personnalisés, aménagement de bureaux, conseil et événementiel. On crée des expériences qui renforcent les liens et l’esprit d’équipe.
                        <br />
                        <br />
                        Notre mission côté événements : imaginer des moments forts pour les collaborateurs, et faire vibrer la culture d’entreprise.
                    </p>
                    <button className="uppercase text-power-main bg-power-secondary font-bold font-nichrome md:text-[20px] text-[18px] md:w-[204px] w-full h-[60px] flex justify-center items-center gap-2 rounded mt-8">
                        Voir le site
                        <Image src={Arrow_Svg} alt="Arrow" width={20} height={20} className="w-[20px] h-[20px]" />
                    </button>
                    <div className="w-full md:mt-[72px] mt-8 flex justify-between items-center">
                        {[
                            { title: "+10 000", description: "Clients" },
                            { title: "319", description: "Évènements" },
                            { title: "37%", description: "“Au vert” proche de paris" }
                        ].map((item, index) => (
                            <div className="flex flex-col" key={index}>
                                <h2 className="uppercase font-nichrome font-bold text-[44px] text-power-secondary">{item.title}</h2>
                                <p className="font-general font-normal text-[20px] text-power-secondary">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full h-auto md:block hidden relative">
                    <Image src={PowerBanner.src} alt="Power Img" width={644} height={605} className="md:w-[644px] md:h-[605px] w-full h-auto md:block hidden" />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 md:w-[644px] md:h-[605px]" />

                    <div className="w-full h-full flex flex-col justify-center items-center absolute -top-10 left-0">
                        <Image src={PowerLogo} alt="Framer Img" width={273} height={274} className="w-[273px] h-[274px]" />
                        <Image src={PowerFramer} alt="Framer Img" width={273} height={42} className="w-[273px] h-auto absolute top-56" />
                    </div>
                </div>
            </div>
            <div className="mt-6 flex flex-col justify-center">
                <p className="text-[20px] font-general font-normal text-center">Tout n’est qu’une histoire de confiance.</p>
                <div className="w-full my-6 flex justify-center items-center md:gap-[71px] gap-10">
                    {[{ img: Airbnb_Svg, width: 103, height: 32 }, { img: Alan_Svg, width: 103, height: 21 }, { img: Doctolib_Svg, width: 98, height: 29 }, { img: Google_Svg, width: 62, height: 59 }, { img: Konbini_Svg, width: 90, height: 27 }, { img: Loreal_Svg, width: 90, height: 25 }, { img: Microsoft_Svg, width: 90, height: 30 }, { img: Netflix_Svg, width: 92, height: 25 }, { img: Qonto_Svg, width: 92, height: 25 }].map((item, index) => (
                        <Image src={item.img} alt={`Logo ${index}`} key={index} width={item.width} height={item.height} className={`md:w-[${item.width}px] md:h-[${item.height}px] w-[90px] h-[25px] mx-4 object-contain`} />
                    ))}
                </div>
            </div>
        </section >
    );
}
export default PowerSection; 