import { FiArrowDownCircle } from "react-icons/fi";
import Navbar from "../components/Navbar";
import CardLeaderList from "../components/CardLeaderList";
import PeopleDead from "../components/PeopleDead";
import History from "../components/History";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-hero bg-auto h-screen flex md:bg-cover">
        <div className="px-6 my-auto text-white flex flex-col items-center">
          <h1 className="font-semibold text-3xl">World War 2</h1>
          <p className="mt-2 mb-8 text-center">
            Konflik global yang berlangsung antara tahun 1939 dan 1945,
            melibatkan Sekutu seperti Amerika Serikat, Uni Soviet, dan Britania
            Raya melawan Poros yang dipimpin oleh Jerman, Italia, dan Jepang.
          </p>
          <button className="w-24 h-10 px-2 bg-stone-900 rounded flex items-center justify-around shadow animate-bounce-slow transition duration-1000 hover:shadow-white">
            <a href="#">Baca</a>
            <FiArrowDownCircle />
          </button>
        </div>
      </div>
      <PeopleDead />
      <History />
      <CardLeaderList />
    </div>
  );
};

export default Home;
