import CardLeaderList from "../components/CardLeaderList";
import Navbar from "../components/Navbar";
import { FiArrowDownCircle } from "react-icons/fi";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-hero bg-auto h-screen flex md:bg-cover">
        <div className="px-6 my-auto text-white flex flex-col items-center ">
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
      <div className="md:mx-auto my-14 md:my-24 px-4 md:px-0 md:max-w-2xl lg:max-w-4xl">
        <div className="bg-stone-900 p-4 text-white flex justify-around text-center rounded-lg">
          <div>
            <h1>85 Juta+</h1>
            <p>Meninggal</p>
          </div>
          <div>
            <h1>40 Juta+</h1>
            <p>Luka</p>
          </div>
          <div>
            <h1>55 Juta+</h1>
            <p>Warga Sipil</p>
          </div>
        </div>
      </div>
      <CardLeaderList />
    </div>
  );
};

export default Home;
