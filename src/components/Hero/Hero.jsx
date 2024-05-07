import heroImage from "../../assets/images/hero-image.png";
import rightArrow from "../../assets/images/right-arrow.png";
const Hero = () => {
  return (
    <section className="ml-16 mt-[5.25rem]">
      <div>
        <h1 className="text-[#2DA950] font-[Grace] text-4xl text-center">
          success stories
        </h1>
        <h2 className="font-semibold text-[3.5rem] w-[40rem] text-center mx-auto text-[#1C1C1C] mt-4">
          Every success journey we&apos;ve encountered.
        </h2>
      </div>
      <div className="grid grid-cols-12 mt-28">
        <div className="col-span-7">
          <img
            src={heroImage}
            alt="A girl looking excited"
            className="mx-auto rounded-[2rem]"
          />
        </div>
        <div className="col-span-5">
          <p className="text-[2.5rem] font-semibold max-w-[24.875rem] text-[#1C1C1C]">
            Enhance fortune 50 company’s insights teams research capabilities
          </p>
          <div className="flex gap-3 mt-14">
            <span className="w-3 h-3 bg-[#2DA950] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#E4E3E3] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#E4E3E3] rounded-full inline-block"></span>
          </div>
          <button className="bg-[#1C1C1C] text-white px-10 py-8 rounded-full flex items-center font-semibold text-xl gap-4 mt-32">
            <span>Explore More </span>
            <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
