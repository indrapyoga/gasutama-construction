/* eslint-disable react/prop-types */

const CardSector = (props) => {
  return (
    <div
      className="relative h-[35vh] flex items-center lg:h-[50vh] lg:p-10 cursor-pointer"
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
    >
      <div
        className={`absolute inset-0 ${props.data.bg} bg-center bg-cover px-4 py-16`}
      ></div>
      <div
        className={`absolute inset-0 bg-customDarkBlue bg-opacity-80 z-0 lg:${
          props.data.hover ? "" : "hidden"
        }`}
      ></div>
      <div className="absolute flex flex-col p-3 gap-4">
        <span className="inset-0 text-white font-thin text-[32px]">
          {props.data.title}
        </span>
        <span className="text-white text-[18px]">{props.data.description}</span>
        <span className="text-white border-b border-white text-[13px] mr-auto">
          SEE MORE
        </span>
      </div>
    </div>
  );
};

export default CardSector;
