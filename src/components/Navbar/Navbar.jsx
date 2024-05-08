import { Link } from "react-router-dom";
import logo from "../../assets/images/brunel-logo.svg";
const Navbar = () => {
  return (
    <>
      <header>
        <nav className="m-6 flex flex-wrap justify-between items-center border border-[#EAEAEA] rounded-full">
          <div>
            <img src={logo} alt="Brunel Logo" className="my-8 mx-[3.25rem]" />
          </div>
          <div className="flex gap-4 mr-5">
            <Link
              to="/register"
              className="text-lg font-medium border border-[#EAEAEA] rounded-full py-7 px-11 hover:bg-[#F1F1F1] transition-all duration-300"
            >
              Get Projects
            </Link>
            <button className="text-lg font-semibold bg-[#1C1C1C] text-white rounded-full py-7 px-11 hover:bg-[#4E4E4E] transition-all duration-300">
              Onboard Talent
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
