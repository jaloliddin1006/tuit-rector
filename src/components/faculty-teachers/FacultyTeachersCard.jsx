const FacultyTeachersCard = ({ item }) => {
  const { textColor, bgColor, text, number, img } = item;
  return (
    <div
      className={`rounded-[1.25rem] p-[2rem] shadow-[2px_4px_8px_0px_#1E1E1E14] hover:translate-y-[-0.5rem] transition-transform hover:ease-out hover:shadow-[0_5px_5px_rgba(0,0,0,0.15)] duration-100`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center flex-col justify-center gap-4">
        <img width={96} height={96} src={img} alt="" />
        <div className="flex flex-col justify-center items-center gap-2">
          <p
            style={{ color: textColor }}
            className="inter font-semibold text-3xl"
          >
            {number}
          </p>
          <p style={{ color: textColor }} className="inter font-normal text-xl">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacultyTeachersCard;
