import departmentIcon from "public/icons/department-icon.svg";
import teachersIcon from "public/icons/teachers-icon.svg";
import studentsIcon from "public/icons/students-icon.svg";
import { useNavigate } from "react-router-dom";

const FacultyCard = ({
  img,
  backgroundColor,
  logoSrc,
  title,
  departments,
  teachers,
  students,
  link
}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(link)} className="faculty-card cursor-pointer rounded-[20px] bg-white z-0 shadow-[4px_4px_8px_0px_#1E1E1E14] inter pb-10">
      {/* Faculty card header */}
      <div
        className={`faculty-card__header group relative rounded-[20px] min-h-[10rem] p-[1.5rem] flex items-center justify-center !opacity-1/2 z-2`}
        style={{ backgroundColor: backgroundColor || "white" }}
      >
        {/* Faculty card background color and image */}
        <div
          className={
            "faculty-card__header-background rounded-[20px] absolute top-0 left-0 w-full h-full bg-white !z-[-2] flex items-center justify-center overflow-hidden"
          }
        >
          <img
            src={img}
            alt={`${title} image`}
            className="block w-full h-full object-center transform transition-transform duration-800 group-hover:scale-150"
          />
        </div>
        <p className="text-white text-[1.5rem] font-[600] uppercase">{title}</p>
        <div className="faculty-card__logo absolute bottom-0 translate-y-1/2 right-[1.5rem] rounded-full bg-white">
          <img
            src={logoSrc}
            alt={`${title} logo`}
            className="h-[6.75rem] w-[6.75rem] object-fit object-cover"
          />
        </div>
      </div>
      <div className="faculty-card__main mt-[5rem] p-[0_1.5rem]">
        <div className="flex items-center justify-between gap-4 pb-4">
          <div className="col flex items-center gap-2">
            <img src={departmentIcon} alt="Department icon" />
            <span>Kafedralar</span>
          </div>
          <div className="col">
            <div className="info-btn rounded-[0.375rem] border-[1px] border-solid border-[#1E1E1E] min-w-[4.875rem] py-[0.001rem] bg-[#1E1E1E0D] text-[0.875rem] font-[600] text-center">
              {departments} ta
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 pb-4">
          <div className="col flex items-center gap-2">
            <img src={teachersIcon} alt="Department icon" />
            <span>O&apos;qituvchilar</span>
          </div>
          <div className="col">
            <div className="info-btn rounded-[0.375rem] border-[1px] border-solid border-[#1E1E1E] min-w-[4.875rem] py-[0.001rem] bg-[#1E1E1E0D] text-[0.875rem] font-[600] text-center">
              {teachers} ta
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="col flex items-center gap-2">
            <img src={studentsIcon} alt="Department icon" />
            <span>Talabalar</span>
          </div>
          <div className="col">
            <div className="info-btn rounded-[0.375rem] border-[1px] border-solid border-[#1E1E1E] min-w-[4.875rem] py-[0.001rem] bg-[#1E1E1E0D] text-[0.875rem] font-[600] text-center">
              {students} ta
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
