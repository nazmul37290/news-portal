import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="max-w-screen-lg mx-auto px-5">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Layout;
