import Accordion from "../Accordion/Accordion";
import Union from "../../assets/images/Union.svg";

const Faq = () => {
  return (
    <>
      <section className="min-h-[46rem] bg-[#E8EEE7] mt-24 mx-8 rounded-[2.5rem] grid grid-cols-2 relative">
        <div className="mt-20 ml-24">
          <h1 className="font-[Grace] text-3xl text-[#9E9D9D]">
            What&rsquo;s on your mind
          </h1>
          <h2 className="font-semibol text-6xl">Ask Questions</h2>
        </div>
        <div className="mt-[8.5rem]">
          <Accordion />
        </div>
        <img src={Union} alt="" className="absolute bottom-[-60px]" />
      </section>
    </>
  );
};

export default Faq;
