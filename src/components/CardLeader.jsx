const CardLeader = ({ id, img, name, country }) => {
  return (
    <div className="border p-4 h-64 rounded" id={id}>
      <div className="h-28 w-28 overflow-hidden border rounded mb-2">
        <img src={img} alt={name} className="" />
      </div>
      <h1 className="text-md font-medium truncate">{name}</h1>
      <p className="mb-4">{country}</p>
      <button className="bg-stone-800 px-4 py-1 text-white rounded w-full">
        Lihat
      </button>
    </div>
  );
};

export default CardLeader;
