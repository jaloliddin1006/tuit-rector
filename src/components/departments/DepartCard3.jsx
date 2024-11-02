const DepartCard3 = ({item}) => {
  const { textColor, bgColor, text, number } = item;
  return (
    <div style={{ backgroundColor: bgColor, color: textColor }} className="rounded-[20px] p-[30px_35px] flex flex-col justify-between text-center">
      <h2 style={{ color: textColor }}  className="text-xl font-semibold mb-1 text-wrap uppercase">
        {text}
      </h2>
      <div>
        <p style={{ color: textColor }}  className="text-[64px] leading-[78px] font-semibold">{number}</p>
      </div>
    </div>
  );
};

export default DepartCard3;
