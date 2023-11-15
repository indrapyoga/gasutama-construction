import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-customDarkBlue px-2 py-20 flex flex-col w-full text-white lg:border-t-2 lg:gap-20 lg:px-20 gap-10">
      <div className="gap-5 flex flex-col lg:flex-row lg:justify-evenly">
        <div className="useful flex flex-col gap-3">
          <span className="font-semibold text-lg">Useful Links</span>
          <div className="flex flex-col gap-3">
            <span>Home</span>
            <span>Our Work</span>
            <span>About Us</span>
            <span>What We Do</span>
            <span>Contact</span>
            <span>Corporate Social Responsibility</span>
          </div>
        </div>
        <div className="social flex flex-col gap-3">
          <span className="font-semibold text-lg">Social</span>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <FaFacebookF />
              <span>Facebook</span>
            </div>
            <div className="flex items-center gap-4">
              <FaInstagram />
              <span>Instagram</span>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPinterest />
              <span>Pinterest</span>
            </div>
            <div className="flex items-center gap-4">
              <FaYoutube />
              <span>Youtube</span>
            </div>
          </div>
        </div>
        <div className="contact flex flex-col gap-3">
          <span className="font-semibold text-lg">Contact</span>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <span className="font-bold">Head Office:</span>
              <span>Ashurst Manor,</span>
              <span>Ashurst Park, Church Lane,</span>
              <span>Sunninghill, Ascot,</span>
              <span>Berkshire</span>
              <span>SL5 7DD</span>
            </div>
            <span>Tel: 01565 756 147</span>
          </div>
        </div>
      </div>
      <div className="border border-neutral-200 w-full"></div>
      <div className="flex flex-col gap-4 lg:flex-row-reverse lg:mr-auto lg:gap-20">
        <div className="flex flex-col lg:flex-row lg:gap-1">
          <span className="uppercase text-sm text-neutral-200">
            privacy policy
          </span>
          <span className="uppercase text-sm text-neutral-200 pl-6 lg:pl-0">
            terms & conditions
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-1">
          <span className="uppercase text-sm text-neutral-200">
            © 2023 GASUTAMA
          </span>
          <span className="uppercase text-sm text-neutral-200">
            construction
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
