import Logo from "../assets/logo.png";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const onToggle = () => {
    setToggled(!toggled);
  };
  return (
    <div
      className={`flex flex-col w-full absolute z-40 ${
        toggled ? "lg:relative" : ""
      }`}
    >
      <div className="flex justify-between py-2 px-6 items-center h-[10vh] z-10">
        <img src={Logo} alt="" className="h-8" />
        <Hamburger size={18} color="#ffff" onToggle={() => onToggle()} />
      </div>

      <div
        className={`flex flex-col text-white font-bold absolute transition-all duration-500 ease-linear w-full ${
          toggled ? "left-0" : "-left-[100%]"
        } lg:flex-row lg:left-0 ${toggled ? "lg:fixed" : "lg:absolute"}`}
      >
        <div className="h-[10vh] w-full bg-customLightBlue -z-10 lg:hidden"></div>
        <div
          className={`h-[18vh] w-full bg-customDarkBlue flex justify-center items-center lg:h-screen lg:absolute lg:left-[0vw] ${
            toggled ? "lg:w-[20vw]" : "lg:w-0"
          } lg:hover:bg-private lg:hover:bg-cover lg:hover:bg-fill lg:transition-all lg:duration-500`}
        >
          <span className={`mx-auto ${toggled ? "" : "lg:hidden"}`}>Home</span>
        </div>
        <div
          className={`h-[18vh] w-full bg-customDarkBlue flex justify-center items-center lg:h-screen lg:absolute lg:left-[20vw] ${
            toggled ? "lg:w-[20vw]" : "lg:w-0"
          } lg:hover:bg-mansion lg:hover:bg-cover lg:transition-all lg:duration-500 `}
        >
          <span className={`mx-auto ${toggled ? "" : "lg:hidden"}`}>
            What We Do
          </span>
        </div>
        <div
          className={`h-[18vh] w-full bg-customDarkBlue flex justify-center items-center lg:h-screen lg:absolute lg:left-[40vw] ${
            toggled ? "lg:w-[20vw]" : "lg:w-0"
          } lg:hover:bg-building lg:hover:bg-cover lg:transition-all lg:duration-500`}
        >
          <span className={`mx-auto ${toggled ? "" : "lg:hidden"}`}>
            Our Work
          </span>
        </div>
        <div
          className={`h-[18vh] w-full bg-customDarkBlue flex justify-center items-center lg:h-screen lg:absolute lg:left-[60vw] ${
            toggled ? "lg:w-[20vw]" : "lg:w-0"
          } lg:hover:bg-private lg:hover:bg-cover lg:transition-all lg:duration-500`}
        >
          <span className={`mx-auto ${toggled ? "" : "lg:hidden"}`}>
            About Us
          </span>
        </div>
        <div
          className={`h-[18vh] w-full bg-customDarkBlue flex justify-center items-center lg:h-screen lg:absolute lg:left-[80vw] ${
            toggled ? "lg:w-[20vw]" : "lg:w-0"
          } lg:hover:bg-building lg:hover:bg-cover lg:transition-all lg:duration-500`}
        >
          <span className={`mx-auto ${toggled ? "" : "lg:hidden"}`}>
            Contact
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
