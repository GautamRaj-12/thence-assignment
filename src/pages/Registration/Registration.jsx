const Registration = () => {
  return (
    <>
      <section>
        <div>
          <h1 className="text-[#2DA950] font-[Grace] text-4xl text-center">
            Registration Form
          </h1>
          <h2 className="font-semibold text-[3.5rem] w-[40rem] text-center mx-auto text-[#1C1C1C] mt-4">
            Start your success Journey here!
          </h2>

          <form
            action=""
            className="flex justify-center items-center flex-col mt-16 gap-6"
          >
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-[#EFEFEF] py-6 px-9 rounded-full w-[26rem] text-xl font-medium outline-none"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#EFEFEF] py-6 px-9 rounded-full w-[26rem] text-xl font-medium outline-none"
            />
            <button
              className="w-[26rem] bg-[#1C1C1C] py-6 text-white rounded-full font-semibold text-lg mt-12"
              type="submit"
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
