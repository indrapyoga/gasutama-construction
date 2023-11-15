/* eslint-disable react/no-unescaped-entities */
import Architecture1 from "../../assets/architecture1.jpg";

const WhatWeDo = () => {
  return (
    <section className="flex flex-col py-10 bg-customDarkBlue lg:flex-row-reverse lg:py-0">
      <div className="relative h-[45vh] w-full lg:w-[57vw] lg:h-[70vh]">
        <img
          src={Architecture1}
          alt=""
          className="h-full w-full object-cover "
        />
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="absolute bottom-10 flex flex-col px-10 text-white">
          <span className="text-neutral-400 text-[12px]">PRIVATE CLIENTS</span>
          <span className="text-[24px] font-semibold">YOUTUBE</span>
        </div>
      </div>
      <div
        className="flex flex-col gap-7 py-4 px-10 lg:flex-1 lg:px-20 lg:justify-center "
        data-aos="slide-right"
      >
        <span className="text-white text-[37px] font-thin lg:text-[60px]">
          What We Do
        </span>
        <span className="text-white text-[14px] lg:text-[18px]">
          Recognised for exceptional designs on a global scale, Gasutama
          Construction brings a wealth of over 30 years' industry experience to
          each individual project, offering bespoke architecture services to
          meet each client's demanding needs
        </span>
        <div className="flex border border-white justify-center p-3 lg:mr-auto">
          <span className="text-white uppercase font-semibold lg:text-[14px]">
            see our services
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
