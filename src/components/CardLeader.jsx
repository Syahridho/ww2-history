const CardLeader = ({ id, img, name, country, quotes }) => {
  return (
    <div className="group">
      <div
        className="bg-white border h-full p-4 shadow rounded transition duration-500 ease-in-out group-hover:-translate-y-6 group-hover:bg-stone-100"
        id={id}
      >
        <div className="flex items-center gap-4 mb-2">
          <div className="w-14 h-14 rounded-full bg-cover overflow-hidden shadow">
            <img src={img} alt={name} />
          </div>
          <div>
            <h1 className="font-semibold">{name}</h1>
            <p>{country}</p>
          </div>
        </div>
        <p className="text-sm">&quot; {quotes} &quot;</p>
      </div>
    </div>
  );
};

export default CardLeader;
