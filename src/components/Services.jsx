import { BsAlignStart, BsArrowDownLeftCircle, BsCloud, BsCreditCard, BsFillNutFill, BsPencil, BsShieldFillCheck, BsSmartwatch } from "react-icons/bs";
import { BiAward, BiBath, BiCalendarAlt, BiMessageSquare, BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle}) => (
    <div className="flex flex-row justify-end items-start p-3 m-2 cursor-pointer hover:shadow-xl">
        <div className="ml-1 flex flex-row flex-1">
            <h3 className="mt-3 px-2 text-white text-lg">{title}</h3>
            <h3 className="mt-4 text-white text-lg">{icon}</h3>
            <p className="mt-1 text-white text-sm md:w-9/12">
            {subtitle}
            </p>
        </div>
    </div>
);

const Services = () => {
    return (
        <div className="w-full flex-1 justify items-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-2 py-12 px-4">
                <div className="flex-1 flex flex-col justify-end items-center">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
                        The <em>Hodl</em> doesn't <br /> have to be hard
                    </h1>
                    <p className="text-center my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                        <em>The premium choice for sending ethereum.</em>
                    </p>
                </div>                
            </div>
            <div className="flex-1 p-3 flex flex-col font-light items-center justify-center">
                <ServiceCard
                    color="bg-[#ffff]"
                    title="Secure"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                />
                <ServiceCard
                    color="bg-[#ffff]"
                    title="Quick"
                    icon={<BsSmartwatch fontSize={21} className="text-white" />}
                    subtitle=""
                />
                <ServiceCard
                    color="bg-[#ffff]"
                    title="Clean"
                    icon={<BiAward fontSize={21} className="text-white" />}
                />
                <ServiceCard
                    color="bg-[#ffff]"
                    title="Effecient"
                    icon={<BsFillNutFill fontSize={21} className="text-white" />}
                />

            </div>

        </div>
    );
}

export default Services;