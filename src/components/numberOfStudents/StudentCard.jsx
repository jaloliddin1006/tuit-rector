import { NavLink } from "react-router-dom";

const StudentCard = ({
  link,
  title,
  studentsNumber,
  backgroundColor,
  borderColor,
  textColor,
  allStudents,
}) => {
  return (
    <div
      className="student-card rounded-[1.25rem] p-[1.75rem_1.5rem] min-h-[180px]"
      style={{ backgroundColor }}
    >
      <p className="student-card__info text-[#1E1E1E] text-[1.5rem] font-[600] min-h-[4rem]">
        {title}
      </p>
      <div className="student-card__desc flex items-center gap-2.5">
        <span
          className="text-[3rem] font-[600]"
          style={{ color: textColor }}
        >
          {studentsNumber}
        </span>
        <span className="text-[1.25rem] text-[#1E1E1E99] font-[500]">
          Jami talabalar soni  {allStudents} dan
        </span>
      </div>
      <NavLink to={link}>
        <div
          className="mt-2 rounded-[8px] border-[1px] border-solid w-fit flex items-center gap-2 p-[0.125rem_0.5rem]"
          style={{ borderColor, color: textColor }}
        >
          <span>Batafsil</span>
          <span>
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default StudentCard;
