const ContactBody = () => {
  return (
    <div className="flex flex-col w-full px-4 py-20 bg-customDarkBlue gap-24 lg:flex-row lg:px-40">
      <div className="flex flex-col text-white gap-10 lg:w-1/2">
        <span className="font-thin text-2xl antialiased lg:text-6xl">
          Gasutama Construction
        </span>
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

      <div className="flex flex-col w-full bg-customDarkBlue p-3 lg:w-1/2">
        <span className="text-white text-xl mx-auto">General Enquiry</span>
        <div className="flex bg-customDarkBlue justify-center items-center p-3">
          <span className="text-neutral-400">Arrange Appointment</span>
        </div>
        <div className="flex flex-col gap-5 text-white">
          <input
            type={"text"}
            className="bg-customDarkBlue no-underline border-b-2 border-neutral py-3"
            placeholder="Name"
          ></input>
          <input
            type={"text"}
            className="bg-customDarkBlue no-underline border-b-2 border-neutral py-3"
            placeholder="Email Address"
          ></input>
          <input
            type={"text"}
            className="bg-customDarkBlue no-underline border-b-2 border-neutral py-3"
            placeholder="Phone Number"
          ></input>
          <input
            type={"text"}
            className="bg-customDarkBlue no-underline border-b-2 border-neutral py-3"
            placeholder="Subject"
          ></input>
          <input
            type={"text"}
            className="bg-customDarkBlue no-underline border-b-2 border-neutral py-3"
            placeholder="Site Address"
          ></input>
          <div className="flex justify-center items-center border border-white text-white uppercase p-3">
            <span>UPLOAD FILE</span>
          </div>
          <textarea
            placeholder="Message"
            className="resize w-full p-4 bg-customDarkBlue border-b-2 border-white"
          ></textarea>
          <div className="flex justify-center items-center bg-white text-black p-4">
            SEND
          </div>
          <span className="text-sm text-gray-400">{`By clicking 'send' you are agreeing to our terms & conditions`}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
