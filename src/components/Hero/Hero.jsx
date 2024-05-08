import heroImage from "../../assets/images/hero-image.png";
import rightArrow from "../../assets/images/right-arrow.png";
import rocketIcon from "../../assets/images/rocket.svg";
const Hero = () => {
  return (
    <section className="ml-16 mt-[5.25rem]">
      {/* Top */}
      <div>
        <h1 className="text-[#2DA950] font-[Grace] text-4xl text-center">
          success stories
        </h1>
        <h2 className="font-semibold md:text-[3.5rem] text-[2.5rem] max-w-[40rem] text-center mx-auto text-[#1C1C1C] mt-4">
          Every success journey we&apos;ve encountered.
        </h2>
      </div>

      {/* Bottom */}
      <div className="flex mt-28 flex-wrap">
        {/* Left Column */}
        <div className="md:ml-64 ml-20 w-[45rem]">
          <div className="relative">
            <img
              src={heroImage}
              alt="A girl looking excited"
              className="mx-auto rounded-[2rem]"
            />

            {/* 40% Part */}
            <div className="w-[16.75rem] h-[15rem] bg-white rounded-[2rem] absolute top-[7rem] -left-[2rem]">
              <p className="font-[Switzer] text-[4rem] font-medium mx-auto w-[13rem]">
                40%
              </p>
              <p className="w-[13rem] text-lg font-medium text-[#828282] mx-auto">
                Achieved reduction in project execution time by optimising team
                availability
              </p>
            </div>

            {/* Staff Deployment Part */}
            <div className="w-[16.75rem] h-[5.5rem] bg-white rounded-full absolute bottom-[3rem] left-[2rem] flex items-center gap-[14px]">
              <div className="w-[3.25rem] h-[3.25rem] rounded-full bg-[#DDEFE0] flex justify-center items-center ml-4">
                <img src={rocketIcon} alt="" className="w-8 h-8" />
              </div>
              <div>
                <p className="font-bold text-2xl text-[#1C1C1C]">10 DAYS</p>
                <p className="text-[#828282] font-medium">Staff Deployment</p>
              </div>
            </div>

            {/* Client Expenses Part */}
            <div className="w-[18.125rem] h-[15rem] bg-[#002E18] rounded-[2rem] absolute -bottom-[3rem] right-[2rem] flex flex-col justify-center items-center gap-[1.25rem]">
              <div className="flex items-baseline gap-3 mx-auto w-[14rem]">
                <p className="font-[Switzer] font-bold text-6xl text-white">
                  $0.5
                </p>
                <p className="font-medium text-[22px] text-[#A6A3A0]">
                  MILLION
                </p>
              </div>
              <p className="text-lg text-[#CCCCCC] mx-auto w-[14rem]">
                Reduced client expenses by saving on hiring and employee costs.
              </p>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="">
          <p className="text-[2.5rem] font-semibold max-w-[24.875rem] text-[#1C1C1C]">
            Enhance fortune 50 company’s insights teams research capabilities
          </p>
          <div className="flex gap-3 mt-14">
            <span className="w-3 h-3 bg-[#2DA950] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#E4E3E3] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#E4E3E3] rounded-full inline-block"></span>
          </div>
          <button className="bg-[#1C1C1C] text-white px-10 py-8 rounded-full flex items-center font-semibold text-xl gap-4 mt-32 hover:bg-[#4E4E4E] transition-all duration-300">
            <span>Explore More </span>
            <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
