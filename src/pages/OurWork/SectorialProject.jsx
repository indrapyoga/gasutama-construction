import SectorialComponent from "./SectorialComponent";

const SectorialProject = () => {
  const dataSectorial = [
    {
      title: "Private Client Projects",
      description:
        "An exclusive service for individuals, delivering timeless architecture tailored to provide exceptional forever-homes.",
      button: "private clients",
      picture: [
        {
          images: "/1.webp",
          title: "Southwinds, St Georges Hill",
        },
        {
          images: "/2.webp",
          title: "Garlands, Wentworth Estate",
        },
        {
          images: "/3.webp",
          title: "Hampton Place, Wentworth Estate",
        },
        {
          images: "/4.webp",
          title: "Southwinds, St Georges Hill",
        },
        {
          images: "/5.webp",
          title: "Garlands, Wentworth Estate",
        },
        {
          images: "/6.webp",
          title: "Hampton Place, Wentworth Estate",
        },
      ],
    },
    {
      title: "Developer Projects",
      description:
        "Feasibility studies, planning submissions and technical working drawings, optimising the value of house types and site layouts.",
      button: "developers",
      picture: [
        {
          images: "/1.webp",
          title: "Southwinds, St Georges Hill",
        },
        {
          images: "/2.webp",
          title: "Garlands, Wentworth Estate",
        },
        {
          images: "/3.webp",
          title: "Hampton Place, Wentworth Estate",
        },
      ],
    },
    {
      title: "Commercial Projects",
      description:
        "Design and delivery of health care, commercial, education, institutional property and regeneration projects across the country.",
      button: "commercial clients",
      picture: [
        {
          images: "/4.webp",
          title: "Southwinds, St Georges Hill",
        },
        {
          images: "/5.webp",
          title: "Garlands, Wentworth Estate",
        },
        {
          images: "/6.webp",
          title: "Hampton Place, Wentworth Estate",
        },
      ],
    },
  ];
  return (
    // <div className="flex flex-col bg-customDarkBlue p-4 gap-10 lg:p-20 lg:gap-24">
    <>
      {dataSectorial.map((data, index) => (
        <SectorialComponent key={index} data={data} index={index} />
      ))}
    </>
    // </div>
  );
};

export default SectorialProject;
