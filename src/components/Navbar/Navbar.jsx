import logo from "../../assets/images/brunel-logo.svg";
const Navbar = () => {
  return (
    <>
      <header>
        <nav className="m-6 flex justify-between items-center border border-[#EAEAEA] rounded-full">
          <div>
            <img src={logo} alt="Brunel Logo" className="my-8 mx-[3.25rem]" />
          </div>
          <div className="flex gap-4 mr-5">
            <button className="text-lg font-medium border border-[#EAEAEA] rounded-full py-7 px-11">
              Get Projects
            </button>
            <button className="text-lg font-semibold bg-[#1C1C1C] text-white rounded-full py-7 px-11">
              Onboard Talent
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
