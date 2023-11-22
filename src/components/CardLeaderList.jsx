import CardLeader from "./CardLeader";
import getInitialData from "./../utils/data";
import { useState } from "react";

const CardLeaderList = () => {
  const [leaders, setLeaders] = useState(getInitialData());
  console.log(leaders);
  return (
    <div className="mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <h1 className="font-semibold text-3xl text-center mb-8">Pemimpin</h1>
      <div className="px-4 flex gap-4 overflow-hidden overflow-x-auto md:justify-center">
        {leaders.map((leader) => (
          <CardLeader
            key={leader.id}
            id={leader.id}
            img={leader.img}
            name={leader.name}
            country={leader.country}
          />
        ))}
      </div>
    </div>
  );
};

export default CardLeaderList;
