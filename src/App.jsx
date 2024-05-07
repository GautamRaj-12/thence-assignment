import Navbar from "./components/Navbar/Navbar";
import "./assets/fonts/Covered_By_Your_Grace/CoveredByYourGrace-Regular.ttf";
import "./assets/fonts/Manrope/Manrope-VariableFont_wght.ttf";
import Congratulations from "./pages/Congratulations/Congratulations";
// import Hero from "./components/Hero/Hero";
// import Registration from "./pages/Registration/Registration";
const App = () => {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      {/* <Registration /> */}
      <Congratulations />
    </>
  );
};
export default App;
