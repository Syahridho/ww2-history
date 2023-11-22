import CardLeader from "./CardLeader";
import getInitialData from "./../utils/data";
import { useState } from "react";

const CardLeaderList = () => {
  const [leaders, setLeaders] = useState(getInitialData());
  console.log(leaders);
  return (
    <div className="mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <h1 className="font-semibold text-3xl text-center mb-8">Pemimpin</h1>
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
