import checkMark from "../../assets/images/check.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Congratulations = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/"), 5000);
  });

  return (
    <>
      <section className="flex flex-col items-center justify-center mt-40">
        <div className="w-[45rem]">
          <div className="flex justify-center">
            <img src={checkMark} alt="" />
          </div>
          <h1 className="text-[#2DA950] font-[Grace] text-4xl text-center mt-10">
            success submitted
          </h1>
          <h2 className="font-semibold text-[3.5rem] w-[40rem] text-center mx-auto text-[#1C1C1C] mt-4">
            Congratulations
          </h2>
          <p className="text-[#727272] font-medium text-[1.6875rem] mt-5 text-center">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
          <p className="mt-[9.75rem] text-center text-[#727272] text-xl">
            Redirecting you to Homepage in{" "}
            <span className="text-[#1C1C1C] font-bold">5 seconds</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Congratulations;
