import { useState } from "react";
import errorBadge from "../../assets/images/Badges.svg";

const Registration = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    // if (fullName.trim() === "") {
    //   setError("Please enter a name");
    //   return;
    // }
    if (!emailRegex.test(email.trim())) {
      setError("Enter a valid email address");
      return;
    }
    e.target.submit();
  };
  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#2DA950] font-[Grace] text-4xl text-center">
            Registration Form
          </h1>
          <h2 className="font-semibold text-[3.5rem] w-[40rem] text-center mx-auto text-[#1C1C1C] mt-4">
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
              disabled={isFormValid}
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
