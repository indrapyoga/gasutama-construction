const Services = () => {
  const dataServices = [
    {
      title: "Concept Design & Planning Submission",
      description:
        "The feasibility and design of commercially viable solutions that optimise value and an exemplary reputation for securing planning permissions.",
      bg: "/1.webp",
    },
    {
      title: "Detailed Technical Drawings",
      description:
        "A detailed design process from building regulation submissions through to technical working drawings ready for construction.",
      bg: "/2.webp",
    },
    {
      title: "3D Graphics & Visualisations",
      description:
        "Photo realistic CGIs, 3D models and drone photography helping clients to visualise designs and transform their aspirations into reality.",
      bg: "/3.webp",
    },
    {
      title: "Consultant & Contract Administration",
      description:
        "A comprehensive service which overseas the delivery of the overall project programme.",
      bg: "/4.webp",
    },
    {
      title: "Planning Consultancy",
      description:
        "Expert, independent advice including site appraisals, strategic planning and appeals.",
      bg: "/5.webp",
    },
    {
      title: "Urban Design & Masterplanning",
      description:
        "Forward-thinking masterplanning to deliver strategic solutions for public and private sector clients.",
      bg: "/6.webp",
    },
    {
      title: "Property Remodelling & Extending",
      description:
        "A bespoke design service, maximising a property’s potential and value.",
      bg: "/7.webp",
    },
  ];
  return (
    <div className="flex flex-col w-full py-5 px-4 bg-customDarkBlue gap-4 text-white lg:grid lg:grid-cols-4">
      <div className="flex flex-col gap-4">
        <span className="text-4xl">Services</span>
        <span>
          We offer an architectural service to a diverse range of clients
          including local authorities, schools, charities, developers and house
          builders, private individuals and more.
        </span>
      </div>
      {dataServices.map((data, index) => (
        <div
          className="relative w-full h-[40vh] border border-white cursor-pointer
          group overflow-hidden
          "
          key={index}
          // onMouseOver={() => onMouseOver(index)}
        >
          <img
            src={data.bg}
            className={`absolute inset-0 object-center object-cover w-full h-full`}
          ></img>
          <div className="absolute inset-0 bg-customDarkBlue bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-3 text-white gap-5">
            <span className="font-bold text-2xl">{data.title}</span>
            <span
              // className={` ${hover === index ? "lg:visible" : "lg:hidden"} `}
              className=" lg:opacity-0 lg:h-0 group-hover:h-fit group-hover:opacity-100 lg:transition-all lg:duration-500 lg:ease-linear"
            >
              {data.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
