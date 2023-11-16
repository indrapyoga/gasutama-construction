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
      bg: "bg-private",
      hover: false,
    },
    {
      title: "Developers",
      description:
        "Feasibility studies, planning submissions and technical working drawings, optimising the value of house types and site layouts",
      bg: "bg-mansion",
      hover: false,
    },
    {
      title: "Commercial",
      description:
        "Design and delivery of health care, commercial, education, institutional property and regeneration projects across the country",
      bg: "bg-building",
      hover: false,
    },
  ]);
  const [indexHover, setIndexHover] = useState(null);

  const handlerHover = ({ index }) => {
    setIndexHover(index);
  };
  const onMouseLeave = () => {
    setIndexHover(null);
  };
  function backgroundImg() {
    switch (indexHover) {
      case 0:
        return "bg-private";
      case 1:
        return "bg-building";
      case 2:
        return "bg-mansion";

      default:
        return "bg-satu";
    }
  }
  return (
    <div className="relative w-full box-border">
      <Navbar />
      <div className="flex flex-col lg:relative">
        <div className="relative h-[50vh] w-full lg:h-[140vh]">
          {/* Backgornd */}
          <div
            className={`absolute inset-0 ${backgroundImg()} bg-cover bg-center lg:transition-all lg:duration-500 lg:ease-linear`}
          ></div>
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
