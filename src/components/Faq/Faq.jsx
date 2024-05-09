import Accordion from "../Accordion/Accordion";
import Union from "../../assets/images/Union.svg";

const Faq = () => {
  return (
    <>
      <section className="min-h-[46rem] bg-[#E8EEE7] mt-24 mx-8 rounded-[2.5rem] grid lg:grid-cols-2 grid-cols-1 relative">
        <div className="mt-20 md:ml-24 mx-auto">
          <h1 className="font-[Grace] md:text-3xl text-2xl text-[#9E9D9D]">
            What&rsquo;s on your mind
          </h1>
          <h2 className="font-semibol md:text-6xl text-3xl">Ask Questions</h2>
        </div>
        <div className="mt-[8.5rem] lg:mx-0 mx-auto md:w-auto w-[90%]">
          <Accordion />
        </div>
        <img
          src={Union}
          alt=""
          className="absolute bottom-[-60px] pointer-events-none"
        />
      </section>
    </>
  );
};

export default Faq;
