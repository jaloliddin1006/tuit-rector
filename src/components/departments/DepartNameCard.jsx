const DepartNameCard = ({item}) => {
  const {name, number, bg, color} = item;
  return (
    <div style={{backgroundColor: bg, color: color}} className="text-center rounded-[20px] p-[35px_35px] flex flex-col justify-between">
      <h2 style={{color: color}} className="text-base font-medium mb-4 text-wrap">
        {name}
      </h2>
      <div>
        <p style={{color: color}} className="text-[32px] leading-[42px] font-semibold">{number} TA</p>
        <p style={{color: color}} className="text-sm font-normal">O’QITUVCHILAR SONI</p>
      </div>
    </div>
  );
};

export default DepartNameCard;
