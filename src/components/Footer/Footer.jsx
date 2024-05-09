import copyrightImg from "../../assets/images/copyright.svg";
const Footer = () => {
  const date = new Date();
  return (
    <>
      <section className="sm:text-lg text-sm flex md:flex-row flex-col md:justify-between items-center md:gap-0 gap-4 my-6 mx-8 py-[3.75rem] px-12 bg-[#F5F5F5] rounded-[2.5rem]">
        <div className="flex gap-2">
          <img src={copyrightImg} alt="Copyright symbol" />
          <span>Talup {date.getFullYear()}. All rights reserved</span>
        </div>
        <div className="flex flex-wrap sm:gap-[3.25rem] gap-2 justify-center">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
