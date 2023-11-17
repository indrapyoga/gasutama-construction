import { useState } from "react";
import Navbar from "../../components/Navbar";
import WWDCard from "./WWDCard";

const HeroWWD = () => {
  // eslint-disable-next-line no-unused-vars
  const [dataCard, setDataCard] = useState([
    {
      title: "Private Clients",
      description:
        "An exclusive service for individuals, delivering timeless architecture tailored to provide exceptional forever-homes",
      bg: "/private.webp",
      hover: false,
    },
    {
      title: "Developers",
      description:
        "Feasibility studies, planning submissions and technical working drawings, optimising the value of house types and site layouts",
      bg: "/mansion.webp",
      hover: false,
    },
    {
      title: "Commercial",
      description:
        "Design and delivery of health care, commercial, education, institutional property and regeneration projects across the country",
      bg: "/building.webp",
      hover: false,
    },
  ]);
  const [indexHover, setIndexHover] = useState(null);

  const [backgroundImg, setbackgroundImg] = useState("/1.webp");
  const handlerHover = ({ index }) => {
    switch (index) {
      case 0:
        setbackgroundImg("/private.webp");
        break;
      case 1:
        setbackgroundImg("/building.webp");
        break;
      case 2:
        setbackgroundImg("/mansion.webp");
        break;

      default:
        setbackgroundImg("/1.webp");
        break;
    }
  };
  const onMouseLeave = () => {
    setIndexHover(null);
  };
  return (
    <div className="relative w-full box-border">
      <Navbar />
      <div className="flex flex-col lg:relative">
        <div className="relative h-[50vh] w-full lg:h-[140vh]">
          {/* Backgornd */}
          <img
            src={backgroundImg}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover`}
          ></img>
          {/* Layer  */}
          <div className="absolute inset-0 bg-customDarkBlue bg-opacity-20"></div>
          {/* Tulisan */}
          <div className="absolute inset-0 flex flex-col justify-center px-5 text-white gap-5">
            <div className="flex gap-3 items-center text-xs">
              <span className="uppercase">Home</span>
              <span className="text-neutral-300 uppercase">{`>`}</span>
              <span className="text-neutral-300 uppercase">{`What We Do`}</span>
            </div>
            <span className="text-5xl">What We Do</span>
            <span>
              Innovative, thought-provoking and inspirational architectural
              design with quality as its core ingredient
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col lg:grid lg:grid-cols-3 lg:absolute lg:bottom-0 lg:gap-1">
          {dataCard.map(({ title, description, bg, hover }, i) => (
            <WWDCard
              onMouseLeave={() => onMouseLeave()}
              onMouseOver={() => handlerHover({ index: i })}
              data={{ title, description, bg, hover, indexHover, i }}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroWWD;
