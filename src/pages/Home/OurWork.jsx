import { Carousel } from "antd";
import { useEffect } from "react";

import Architecture1 from "../../assets/architecture1.jpg";
import Architecture2 from "../../assets/architecture2.jpg";
import Architecture3 from "../../assets/architecture3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const OurWork = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
const navigate = useNavigate()
  return (
    <section className="flex flex-col py-10 bg-customDarkBlue lg:flex-row lg:py-0">
      <div className="lg:w-[57vw] lg:h-full">
        <Carousel autoplay dots={false}>
          <div className="relative h-[45vh] w-full lg:h-[70vh]">
            <img
              src={Architecture1}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
            <div className="absolute bottom-10 flex flex-col px-10 text-white">
              <span className="text-neutral-400 text-[12px]">
                PRIVATE CLIENTS
              </span>
              <span className="text-[24px] font-semibold">INTERIOR</span>
            </div>
          </div>
          <div className="relative h-[45vh] w-full lg:h-[70vh]">
            <img
              src={Architecture2}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
            <div className="absolute bottom-10 flex flex-col px-10 text-white">
              <span className="text-neutral-400 text-[12px]">
                PRIVATE CLIENTS
              </span>
              <span className="text-[24px] font-semibold">
                DESIGNER BUILDING
              </span>
            </div>
          </div>
          <div className="relative h-[45vh] w-full lg:h-[70vh]">
            <img
              src={Architecture3}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
            <div className="absolute bottom-10 flex flex-col px-10 text-white">
              <span className="text-neutral-400 text-[12px]">
                PRIVATE CLIENTS
              </span>
              <span className="text-[24px] font-semibold">ATHAYA CLUSTER</span>
            </div>
          </div>
        </Carousel>
      </div>
      <div
        className="flex flex-col gap-7 py-4 px-10 lg:justify-center lg:px-20 lg:flex-1"
        data-aos="slide-left"
      >
        <span className="text-white text-[37px] font-thin lg:text-[60px]">
          Our Work
        </span>
        <span className="text-white text-[14px] lg:text-[18px]">
          It is our signature dedication to quality that enables us to offer a
          superior service and products, from initial concept right through to
          final delivery.
        </span>
        <div onClick={()=>navigate('/our-work')} className="flex border border-white justify-center p-3 lg:text-[14px] lg:mr-auto cursor-pointer">
          <span className="text-white uppercase font-semibold">
            see more projects
          </span>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
