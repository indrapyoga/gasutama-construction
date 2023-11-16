import Logo from "../assets/logo.png";
import { Twirl as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const onToggle = () => {
    setToggled(!toggled);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // E
  return (
    <div
      className={`flex flex-col w-full fixed z-40 ${
        toggled ? "lg:relative" : ""
      }`}
    >
      <div
        className={`flex justify-between py-2 px-6 items-center h-[10vh] z-10 ${
          scrollPosition > 0 ? "bg-customDarkBlue bg-opacity-80 shadow-lg" : ""
        } transition-all duration-500 ease-in fixed w-full`}
      >
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
          onClick={() => navigate("/")}
          className={`h-[18vh] w-full bg-customDarkBlue cursor-pointer flex justify-center items-center lg:h-screen lg:absolute lg:left-[0vw] ${
            toggled ? "lg:w-[20vw]" : "lg:w-0"
          } lg:hover:bg-private lg:hover:bg-cover lg:hover:bg-fill lg:transition-all lg:duration-500`}
        >
          <span className={`mx-auto ${toggled ? "" : "lg:hidden"}`}>Home</span>
        </div>
        <div
          onClick={() => navigate("/what-we-do")}
          className={`h-[18vh] w-full bg-customDarkBlue cursor-pointer flex justify-center items-center lg:h-screen lg:absolute lg:left-[20vw] ${
            toggled ? "lg:w-[20vw]" : "lg:w-0"
          } lg:hover:bg-mansion lg:hover:bg-cover lg:transition-all lg:duration-500 `}
        >
          <span className={`mx-auto ${toggled ? "" : "lg:hidden"}`}>
            What We Do
          </span>
        </div>
        <div
          onClick={() => navigate("/our-work")}
          className={`h-[18vh] w-full bg-customDarkBlue cursor-pointer flex justify-center items-center lg:h-screen lg:absolute lg:left-[40vw] ${
            toggled ? "lg:w-[20vw]" : "lg:w-0"
          } lg:hover:bg-building lg:hover:bg-cover lg:transition-all lg:duration-500`}
        >
          <span className={`mx-auto ${toggled ? "" : "lg:hidden"}`}>
            Our Work
          </span>
        </div>
        <div
          onClick={() => navigate("/about-us")}
          className={`h-[18vh] w-full bg-customDarkBlue cursor-pointer flex justify-center items-center lg:h-screen lg:absolute lg:left-[60vw] ${
            toggled ? "lg:w-[20vw]" : "lg:w-0"
          } lg:hover:bg-private lg:hover:bg-cover lg:transition-all lg:duration-500`}
        >
          <span className={`mx-auto ${toggled ? "" : "lg:hidden"}`}>
            About Us
          </span>
        </div>
        <div
          onClick={() => navigate("/contact")}
          className={`h-[18vh] w-full bg-customDarkBlue cursor-pointer flex justify-center items-center lg:h-screen lg:absolute lg:left-[80vw] ${
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
