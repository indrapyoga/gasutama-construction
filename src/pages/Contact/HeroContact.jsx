import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const HeroContact = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full box-border">
      <Navbar />
      <div className="flex flex-col lg:relative">
        <div className="relative h-[50vh] w-full lg:h-[70vh]">
          {/* Backgornd */}
          <img
            src="/5.webp"
            className={`absolute inset-0 object-cover object-center h-full w-full lg:transition-all lg:duration-500 lg:ease-linear`}
          ></img>
          {/* Layer  */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          {/* Tulisan */}
          <div className="absolute inset-0 flex flex-col justify-center px-5 text-white gap-5 lg:w-1/2 lg:px-20 lg:gap-10">
            <div className="flex gap-3 items-center text-xs">
              <span
                onClick={() => navigate("/")}
                className="uppercase cursor-pointer"
              >
                Home
              </span>
              <span className="text-neutral-300 uppercase">{`>`}</span>
              <span className="text-neutral-300 uppercase">{`Contact`}</span>
            </div>
            <span className="text-5xl lg:text-9xl lg:drop-shadow-lg lg:font-thin lg:antialiased">
              Contact
            </span>
          </div>
        </div>
        {/* <div className="w-full flex flex-col lg:grid lg:grid-cols-3 lg:absolute lg:bottom-0 lg:gap-1">
            {dataCard.map(({ title, description, bg, hover }, i) => (
              <WWDCard
                onMouseLeave={() => onMouseLeave()}
                onMouseOver={() => handlerHover({ index: i })}
                data={{ title, description, bg, hover, indexHover, i }}
                key={i}
              />
            ))}
          </div> */}
      </div>
    </div>
  );
};

export default HeroContact;
