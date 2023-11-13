/* eslint-disable react/no-unescaped-entities */
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
const Home = () => {
  return (
    <>
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
      <section className="w-full flex flex-col gap-1">
        <div className="relative h-[35vh] flex items-center">
          <div className="absolute inset-0 bg-private bg-center bg-cover px-4 py-16"></div>
          <div className="absolute inset-0 bg-customDarkBlue bg-opacity-40 z-0"></div>
          <div className="absolute flex flex-col p-3 gap-4">
            <span className="inset-0 text-white font-thin text-[32px]">
              Private Clients
            </span>
            <span className="text-white text-[18px]">
              An exclusive service for individuals, delivering timeless
              architecture tailored to provide exceptional forever-homes
            </span>
            <span className="text-white border-b border-white text-[13px] mr-auto">
              SEE MORE
            </span>
          </div>
        </div>
        <div className="relative h-[35vh] flex items-center">
          <div className="absolute inset-0 bg-mansion bg-center bg-cover px-4 py-16"></div>
          <div className="absolute inset-0 bg-customDarkBlue bg-opacity-40 z-0"></div>
          <div className="absolute flex flex-col p-3 gap-4">
            <span className="inset-0 text-white font-thin text-[32px]">
              Developers
            </span>
            <span className="text-white text-[18px]">
              Feasibility studies, planning submissions and technical working
              drawings, optimising the value of house types and site layouts
            </span>
            <span className="text-white border-b border-white text-[13px] mr-auto">
              SEE MORE
            </span>
          </div>
        </div>
        <div className="relative h-[35vh] flex items-center">
          <div className="absolute inset-0 bg-building bg-center bg-cover px-4 py-16"></div>
          <div className="absolute inset-0 bg-customDarkBlue bg-opacity-40 z-0"></div>
          <div className="absolute flex flex-col p-3 gap-4">
            <span className="inset-0 text-white font-thin text-[32px]">
              Commercial
            </span>
            <span className="text-white text-[18px]">
              Design and delivery of health care, commercial, education,
              institutional property and regeneration projects across the
              country
            </span>
            <span className="text-white border-b border-white text-[13px] mr-auto">
              SEE MORE
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col py-10 bg-customDarkBlue">
        <Carousel autoplay dots={false}>
          <div className="relative h-[45vh] w-full">
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
          <div className="relative h-[45vh] w-full">
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
          <div className="relative h-[45vh] w-full">
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
        <div className="flex flex-col gap-7 py-4 px-10">
          <span className="text-white text-[37px] font-thin">Our Work</span>
          <span className="text-white text-[14px]">
            It is our signature dedication to quality that enables us to offer a
            superior service and products, from initial concept right through to
            final delivery.
          </span>
          <div className="flex border border-white justify-center p-3">
            <span className="text-white uppercase font-semibold">
              see more projects
            </span>
          </div>
        </div>
      </section>

      <section className="flex flex-col py-10 bg-customDarkBlue">
        <div className="relative h-[45vh] w-full">
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
            <span className="text-[24px] font-semibold">YOUTUBE</span>
          </div>
        </div>
        <div className="flex flex-col gap-7 py-4 px-10">
          <span className="text-white text-[37px] font-thin">What We Do</span>
          <span className="text-white text-[14px]">
            Recognised for exceptional designs on a global scale, Gasutama
            Construction brings a wealth of over 30 years' industry experience
            to each individual project, offering bespoke architecture services
            to meet each client's demanding needs
          </span>
          <div className="flex border border-white justify-center p-3">
            <span className="text-white uppercase font-semibold">
              see our services
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT US */}

      <section className="flex flex-col py-10 bg-customDarkBlue">
        <div className="relative h-[45vh] w-full">
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
            <span className="text-[24px] font-semibold">YOUTUBE</span>
          </div>
        </div>
        <div className="flex flex-col gap-7 py-4 px-10">
          <span className="text-white text-[37px] font-thin">About Us</span>
          <span className="text-white text-[14px]">
            Founded in 2003, our world leading architectural practice has
            established a reputation for delivering the highest quality of
            service to clients, tailoring every design element individually to
            meet their specific requirements and providing a seamless delivery
            of their desired scheme
          </span>
          <div className="flex border border-white justify-center p-3">
            <span className="text-white uppercase font-semibold">
              FIND out more
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
