import { Carousel } from "antd";
import Navbar from "../../components/Navbar";
import Architecture1 from "../../assets/architecture1.jpg";
import Architecture2 from "../../assets/architecture2.jpg";
import Architecture3 from "../../assets/architecture3.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full box-border">
      <Navbar className="" />
      {/* <h1 className="absolute top-0 z-40">TEST</h1> */}
      <Carousel autoplay dots={false}>
        <div className="h-screen relative">
          <img
            src={Architecture1}
            alt=""
            className="h-full object-cover lg:w-full"
          />
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        </div>
        <div className="h-screen relative">
          <img
            src={Architecture2}
            alt=""
            className="h-full object-cover lg:w-full"
          />
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        </div>
        <div className="h-screen relative">
          <img
            src={Architecture3}
            alt=""
            className="h-full object-cover lg:w-full"
          />
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        </div>
      </Carousel>

      <div className="absolute top-0 h-screen px-6 flex flex-col w-full gap-4 lg:px-32">
        <div className="pt-[40vh] lg:pt-[40vh] text-5xl lg:text-[100px] text-white">
          <span className="font-thin">We are </span>
          <span className="font-bold">Gasutama Construction</span>
        </div>
        <span className="text-white font-thin text-xl lg:text-[28px]">
          A multi-sector construction company
        </span>
        <div className="flex flex-col lg:flex lg:flex-row lg:items-center justify-center lg:justify-between">
          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-sm flex justify-center items-center font-semibold lg:w-56">
              <span>BROWSE OUR WORK</span>
            </div>
            <div className="border border-white text-white uppercase p-4 rounded-sm lg:flex justify-center items-center font-semibold lg:w-72 hidden lg:visible">
              <span>arrange an appointment</span>
            </div>
          </div>

          <div className="flex text-white w-full justify-evenly text-2xl mt-4 lg:mt-0 lg:w-auto lg:gap-7">
            <div className="border-b border-white py-3">
              <FaFacebookF className="" />
            </div>
            <div className="border-b border-white py-3">
              <FaInstagram className="" />
            </div>
            <div className="border-b border-white py-3">
              <FaLinkedinIn className="" />
            </div>
            <div className="border-b border-white py-3">
              <FaPinterest className="" />
            </div>
            <div className="border-b border-white py-3">
              <FaYoutube className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
