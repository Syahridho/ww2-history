import { useState } from "react";
import historys from "../utils/historys";

import historyImage from "./../assets/history/history.jpg";

const History = () => {
  const [history] = useState(historys()[0]);
  console.log(history);
  return (
    <div className="grid md:grid-cols-5">
      <div className="m-10 md:mx-0 md:col-start-2 md:col-span-3">
        <h1
          className="font-semibold text-3xl text-center mb-8"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {history.title}
        </h1>
        <img
          src={historyImage}
          alt="World War 2"
          className="my-8 shadow rounded xl:h-56 w-full object-cover"
          data-aos="fade-up"
          data-aos-duration="1900"
        />
        <p
          className="mb-10 xl:text-"
          data-aos="fade-up"
          data-aos-duration="1900"
        >
          {history.opening}
        </p>
        <p className="mb-10" data-aos="fade-up" data-aos-duration="1900">
          {history.holocaust}
        </p>
        <p className="mb-10" data-aos="fade-up" data-aos-duration="1900">
          {history.fight}
        </p>
        <p className="mb-10" data-aos="fade-up" data-aos-duration="1900">
          {history.end}
        </p>
      </div>
    </div>
  );
};

export default History;
