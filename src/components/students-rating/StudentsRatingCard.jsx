const StudentsRatingCard = ({item}) => {
  return (
    <div className="border rounded-[20px] p-6 flex flex-col gap-9">
      <h2 className="uppercase text-xl text-[rgba(0, 0, 0, 1)]">{item.name}</h2>
      <p style={{color: item.color}} className="uppercase text-sm flex flex-col items-center gap-4 font-medium">
        <span className="text-6xl font-bold">{item.count}</span>
        Grant/Shartnoma
      </p>
    </div>
  );
};

export default StudentsRatingCard;
