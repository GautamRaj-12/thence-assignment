import { useState } from "react";
import errorBadge from "../../assets/images/Badges.svg";
import logo from "../../assets/images/brunel-logo.svg";
import closeIcon from "../../assets/images/Close.svg";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleCloseClick = () => {
    navigate("/");
  };
  const handleNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const validateEmail = (input) => {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (!emailRegex.test(input.trim())) {
      setError("Enter a valid email address");
      setIsFormValid(false);
    } else {
      setError("");
      setIsFormValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    if (fullName.trim() === "") {
      setError("Please enter a name");
      setIsFormValid(false);
      return;
    }
    if (isFormValid) {
      e.target.submit();
    }
  };

  return (
    <>
      <div className="flex items-center justify-between my-8 mx-[3.25rem]">
        <img src={logo} alt="Brunel Logo" />
        <span
          className="w-16 h-16 rounded-full border border-[#CACACA] flex justify-center items-center cursor-pointer"
          onClick={handleCloseClick}
        >
          <img src={closeIcon} alt="A close icon to go back to home page" />
        </span>
      </div>
      <section className="mt-16">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#2DA950] font-[Grace] text-4xl text-center">
            Registration Form
          </h1>
          <h2 className="font-semibold md:text-[3.5rem] text-[2rem] max-w-[40rem] text-center mx-auto text-[#1C1C1C] mt-4">
            Start your success Journey here!
          </h2>

          <form
            action="/congratulations"
            className="flex flex-col mt-16 gap-6"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={fullName}
              onChange={handleNameChange}
              placeholder="Enter your name"
              className="bg-[#EFEFEF] py-6 px-9 rounded-full w-[26rem] text-xl font-medium outline-none"
            />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="bg-[#EFEFEF] py-6 px-9 rounded-full w-[26rem] text-xl font-medium outline-none"
            />
            {error && (
              <div className="font-medium flex text-[#FF0808] self-start gap-[7px]">
                <img src={errorBadge} alt="A badge displaying errror" />
                {error}
              </div>
            )}
            <button
              className="w-[26rem] bg-[#1C1C1C] py-6 text-white rounded-full font-semibold text-lg mt-12 disabled:bg-[#C9C9C9]"
              type="submit"
              disabled={!isFormValid}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Registration;
