import { Link } from "react-router-dom";
import logo from "../../assets/images/brunel-logo.svg";
const Navbar = () => {
  return (
    <>
      <header>
        <nav className="m-6 flex md:flex-row flex-col justify-between items-center border border-[#EAEAEA] rounded-full">
          <div>
            <img
              src={logo}
              alt="Brunel Logo"
              className="my-8 sm:mx-[3.25rem] mx-auto"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mr-5 md:mb-0 mb-2 md:ml-0 ml-2">
            <Link
              to="/register"
              className="text-lg font-medium border border-[#EAEAEA] rounded-full sm:py-7 py-3 sm:px-11 px-6 hover:bg-[#F1F1F1] transition-all duration-300"
            >
              Get Projects
            </Link>
            <button className="text-lg font-semibold bg-[#1C1C1C] text-white rounded-full sm:py-7 py-3 sm:px-11 px-6 hover:bg-[#4E4E4E] transition-all duration-300">
              Onboard Talent
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
