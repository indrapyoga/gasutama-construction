import Architecture3 from "../../assets/architecture3.jpg";

const AboutUs = () => {
  return (
    <section className="flex flex-col py-10 bg-customDarkBlue lg:flex-row lg:py-0">
      <div className="relative h-[45vh] w-full lg:w-[57vw] lg:h-[70vh]">
        <img
          src={Architecture3}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="absolute bottom-10 flex flex-col px-10 text-white">
          <span className="text-neutral-400 text-[12px]">PRIVATE CLIENTS</span>
          <span className="text-[24px] font-semibold">YOUTUBE</span>
        </div>
      </div>
      <div
        className="flex flex-col gap-7 py-4 px-10 lg:flex-1 lg:justify-center lg:px-20"
        data-aos="slide-left"
      >
        <span className="text-white text-[37px] font-thin">About Us</span>
        <span className="text-white text-[14px]">
          Founded in 2003, our world leading architectural practice has
          established a reputation for delivering the highest quality of service
          to clients, tailoring every design element individually to meet their
          specific requirements and providing a seamless delivery of their
          desired scheme
        </span>
        <div className="flex border border-white justify-center p-3 lg:mr-auto">
          <span className="text-white uppercase font-semibold">
            FIND out more
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
