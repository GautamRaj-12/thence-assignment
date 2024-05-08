import checkMark from "../../assets/images/check.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/brunel-logo.svg";

const Congratulations = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 1) {
        setCountdown(countdown - 1);
      } else {
        navigate("/");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <>
      <div>
        <img src={logo} alt="Brunel Logo" className="my-8 mx-[3.25rem]" />
      </div>
      <section className="flex flex-col items-center justify-center mt-40">
        <div className="max-w-[45rem]">
          <div className="flex justify-center">
            <img src={checkMark} alt="" />
          </div>
          <h1 className="text-[#2DA950] font-[Grace] text-4xl text-center mt-10">
            Success Submitted
          </h1>
          <h2 className="font-semibold text-[3.5rem] max-w-[40rem] text-center mx-auto text-[#1C1C1C] mt-4">
            Congratulations
          </h2>
          <p className="text-[#727272] font-medium text-[1.6875rem] mt-5 text-center max-w-[44rem]">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to you shortly with updates.
          </p>
          <p className="mt-[9.75rem] text-center text-[#727272] text-xl">
            Redirecting you to the homepage in{" "}
            <span className="text-[#1C1C1C] font-bold">{countdown}</span>{" "}
            seconds
          </p>
        </div>
      </section>
    </>
  );
};

export default Congratulations;
