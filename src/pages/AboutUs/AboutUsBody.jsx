const AboutUsBody = () => {
  const dataAboutUs = [
    {
      title: "Our People",
      description: [
        "Home to some of the most talented designers, Ascot Design has a team of over 50. Collectively, we bring a wealth of experience and expertise to each project, with a commitment to complete customer satisfaction.",
      ],
      button: "see our people",
      image: "bg-satu",
    },
    {
      title: "Careers",
      description: [
        "At Ascot Design, we invest in people and nurture talent.",
        "We create a positive and encouraging culture where engaged, skillful, high performing people can develop their career in a truly collaborative environment.",
        "We are always looking for bright individuals to join our team so please get in touch if you think that could be you.",
      ],
      button: "Apply now",
      image: "bg-dua",
    },
    {
      title: "Corporate Social Responsibility",
      description: [
        "We believe that we have a corporate social responsibility to have a positive impact on society and have an obligation to put in place ethical principles which support individuals, the local community and the environment.",
      ],
      button: "read more",
      image: "bg-tiga",
    },
  ];
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col text-white gap-4 bg-customDarkBlue px-4 py-10 lg:flex-row">
        <div className="flex flex-col gap-4 text-xl antialiased lg:flex-1">
          <span>
            Founded in 2003, our world-leading architectural practice has
            established a reputation for delivering the highest quality of
            service to clients, tailoring every design element individually to
            meet their specific requirements and providing a seamless delivery
            of their desired scheme.
          </span>
          <span>
            It is our precision and passion for perfection that has
            distinguished us as one of the finest architecture firms, not just
            in the UK, but on an international scale.
          </span>
          <span>
            From major town regeneration projects, to cutting-edge contemporary
            homes, to elegant classical residences, we produce innovative,
            thought-provoking architectural solutions that will stand the test
            of time.
          </span>
        </div>
        <div className="w-full flex bg-enam h-[30vh] bg-cover bg-center lg:h-auto lg:w-[60vw]"></div>
      </div>
      {dataAboutUs.map((data, i) => (
        <div
          className={`flex flex-col text-white px-4 py-20 gap-10 ${
            (i + 1) % 2 === 0
              ? "lg:flex-row-reverse bg-customDarkBlue"
              : "lg:flex-row bg-customDarkBlue bg-opacity-90"
          } lg:px-0 lg:py-0 lg:h-[70vh]`}
          key={i}
        >
          <div
            className={`w-full flex ${data.image} h-[30vh] bg-cover bg-center lg:h-full lg:w-[57vw]`}
          ></div>
          <div className="flex flex-col gap-4 antialiased lg:flex-1 lg:justify-center lg:px-5">
            <span className="text-2xl lg:text-6xl">{data.title}</span>
            {data.description.map((data, i) => (
              <span key={i}>{data}</span>
            ))}
            <div className="flex justify-center items-center border border-white uppercase p-3 lg:font-bold cursor-pointer">
              <span>{data.button}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUsBody;
