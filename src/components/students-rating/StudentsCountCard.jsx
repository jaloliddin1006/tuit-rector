const StudentsCountCard = ({item}) => {
  return (
    <div style={{backgroundColor: item.bg}} className="border rounded-[20px] p-6 flex flex-col justify-between gap-9">
      <h2 className="uppercase text-2xl text-[#1E1E1E] text-center font-semibold px-4">{item.name}</h2>
      <p style={{color: item.color}} className="uppercase text-sm flex flex-col items-center gap-4 font-medium">
        <span className="text-5xl font-semibold">{item.count}</span>
      </p>
    </div>
  );
};

export default StudentsCountCard;
