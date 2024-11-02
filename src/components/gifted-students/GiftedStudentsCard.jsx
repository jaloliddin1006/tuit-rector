import { useNavigate } from "react-router-dom";

const GiftedStudentsCard = ({ item }) => {
  const { textColor, bgColor, text, number, type } = item;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => !type ? navigate("/students-list") : navigate("/students-table")}
      className={`rounded-[1.25rem] p-[2rem] shadow-[2px_4px_8px_0px_#1E1E1E14] hover:translate-y-[-0.5rem] transition-transform hover:ease-out hover:shadow-[0_5px_5px_rgba(0,0,0,0.15)] duration-100 cursor-pointer`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center flex-col justify-center gap-4">
        <p style={{ color: textColor }} className="inter font-bold text-6xl">
          {number}
        </p>
        <p style={{ color: textColor }} className="inter font-medium text-sm">
          {text}
        </p>
      </div>
    </div>
  );
};

export default GiftedStudentsCard;
