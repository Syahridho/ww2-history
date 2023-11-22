import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navOn, setNavOn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setNavOn(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white text-slate-800 z-10 sticky w-full top-0 left-0 shadow">
      <div className="justify-between items-center md:py-4 md:flex md:mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <div className="px-6 py-2 flex justify-between items-center shadow-sm md:shadow-none">
          <h1 className="font-semibold text-xl">Histori</h1>
          <button className="p-2 md:hidden" onClick={() => setNavOn(!navOn)}>
            {navOn ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
        {navOn ? (
          <div className="">
            <ul className="md:flex md:gap-10 lg:gap-20">
              <li className="ease-in-out transition-all duration-500">
                <NavLink
                  className="block text-center py-3 transition duration-300 md:w-full md:py-0 hover:text-red-700 active:bg-slate-100"
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="ease-in-out transition-all duration-500">
                <NavLink
                  className="block text-center py-3 transition duration-300 md:w-full md:py-0 hover:text-red-700 active:bg-slate-100"
                  to={"/Axis"}
                >
                  Axis
                </NavLink>
              </li>
              <li className="ease-in-out transition-all duration-500">
                <NavLink
                  className="block text-center py-3 transition duration-300 md:w-full md:py-0 hover:text-red-700 active:bg-slate-100"
                  to={"/west"}
                >
                  West
                </NavLink>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
