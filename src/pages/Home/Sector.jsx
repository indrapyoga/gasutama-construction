import { useState } from "react";
import CardSector from "./CardSector";

const Sector = () => {
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

  const handlerHover = ({ index }) => {
    let data = [];
    for (let i = 0; i < dataCard.length; i++) {
      const element = dataCard[i];
      element.hover = false;
      if (i === index) {
        element.hover = true;
      }
      data.push(element);
      console.log("ini dataCard", dataCard);
    }
    setDataCard(data);
    console.log("ini datacard", dataCard);
  };
  const onMouseLeave = () => {
    let data = [];
    for (let i = 0; i < dataCard.length; i++) {
      const element = dataCard[i];
      element.hover = false;
      data.push(element);
    }
    setDataCard(data);
  };

  return (
    <section className="w-full flex flex-col gap-1 lg:grid lg:grid-cols-3 lg:gap-0">
      {dataCard.map(({ title, description, bg, hover }, i) => (
        <CardSector
          onMouseLeave={() => onMouseLeave()}
          onMouseOver={() => handlerHover({ index: i })}
          data={{ title, description, bg, hover }}
          key={i}
        />
      ))}
    </section>
  );
};

export default Sector;
