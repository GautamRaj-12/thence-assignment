import "./assets/fonts/Covered_By_Your_Grace/CoveredByYourGrace-Regular.ttf";
import "./assets/fonts/Manrope/Manrope-VariableFont_wght.ttf";

import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Congratulations from "./pages/Congratulations/Congratulations";
import Layout from "./Layout";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/congratulations" element={<Congratulations />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
export default App;
