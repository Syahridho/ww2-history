import CardLeader from "./CardLeader";
import getInitialData from "../utils/leaders.js";
import { useEffect, useState } from "react";

const CardLeaderList = () => {
  const [leaders, setLeaders] = useState(getInitialData());
  useEffect(() => {
    const card = document.querySelectorAll(".bg-white");

    card.forEach((img, i) => {
      img.dataset.aos = "fade-up";
      img.dataset.aosDelay = i * 100;
      img.dataset.aosDuration = 1000;
    });
  }, []);
  return (
    <div className="mx-auto my-10 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <h1
        className="font-semibold text-3xl text-center mb-8"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Pemimpin
      </h1>
      <div className="mx-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {leaders.map((leader) => (
          <CardLeader
            key={leader.id}
            id={leader.id}
            img={leader.img}
            name={leader.name}
            country={leader.country}
            quotes={leader.quotes}
          />
        ))}
      </div>
    </div>
  );
};

export default CardLeaderList;
