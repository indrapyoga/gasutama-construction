/* eslint-disable react/no-unescaped-entities */
import Sector from "./Sector";
import OurWork from "./OurWork";
import WhatWeDo from "./WhatWeDo";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Sector />
      <OurWork />
      <WhatWeDo />
      <AboutUs />
    </div>
  );
};

export default Home;
