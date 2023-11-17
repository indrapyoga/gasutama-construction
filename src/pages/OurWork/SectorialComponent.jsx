/* eslint-disable react/prop-types */
const SectorialComponent = (props) => {
  return (
    <div
      className={`w-full p-4 gap-10 lg:p-20 lg:gap-24 private flex flex-col  ${
        (props.index + 1) % 2 === 0
          ? "bg-customDarkBlue bg-opacity-90"
          : "bg-customDarkBlue"
      }`}
    >
      <div className="flex flex-col gap-5 text-white">
        <span className="text-4xl lg:text-6xl antialiased">
          {props.data.title}
        </span>
        <div className="flex flex-col text-white gap-5 font-thin lg:flex-row">
          <span className="text-xl lg:text-2xl antialiased">
            {props.data.description}
          </span>
          <div className="flex justify-center items-center text-white border border-white uppercase p-2 lg:w-1/3 lg:h-12">
            <span className="antialiased">{props.data.button}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-10 gap-5">
        {props.data.picture.map((data, index) => (
          <div
            // className={`relative w-full h-[30vh] lg:hover:border-neutral-400 transition-all duration-500
            // ease-in lg:bg-no-repeat ${data.images} bg-cover lg:hover:bg-center bg-left-bottom lg:hover:border-b-4`}
            className="relative w-full h-[30vh] lg:hover:border-neutral-400 transition-all duration-500 ease-in overflow-hidden group cursor-pointer"
            key={index}
          >
            <img
              src={`${data.images}`}
              alt=""
              className="h-full w-full scale-150 object-cover group-hover:scale-100 transition-all duration-300 ease-in"
            />
            {/* <div className={`absolute inset-0 `}></div> */}
            <div className="absolute inset-0 bg-customDarkBlue bg-opacity-20"></div>
            <div className="absolute bottom-5 px-4 text-white">
              <span className="font-bold antialiased">{data.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorialComponent;
