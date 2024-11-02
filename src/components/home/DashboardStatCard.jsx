import { useNavigate } from "react-router-dom";

const DashboardStatsCard = ({
  iconSrc,
  info,
  numbers,
  colorBold,
  colorLight,
  link,
  local_link
}) => {
  const navigate = useNavigate();
  return (
    <>
      {link ? (
        <div
          className={`dashboard__statistics-card w-[25%] rounded-[1.25rem] shadow-[2px_4px_8px_0px_#1E1E1E14] hover:translate-y-[-0.5rem] cursor-pointer transition-transform duration-800 hover:ease-out hover:shadow-[0_5px_5px_rgba(0,0,0,0.15)] duration-100`}
          style={{ backgroundColor: colorLight }}
        >
          <a
            target="_blank"
            href={link}
            className="inline-block w-full h-full p-[2rem]"
           
          >
            <div className="flex items-center gap-4">
              <div className="icon rounded-full h-[4.5rem] w-[4.5rem] bg-white flex items-center justify-center gap-4">
                <img src={iconSrc} alt="Statistic icon" />
              </div>
              <p className="inter font-[500] text-[1.5rem] leading-[2rem]">
                {info}
              </p>
            </div>
            <div
              className={`numbers mt-8 text-[3rem] font-[600]`}
              style={{ color: colorBold }}
              dangerouslySetInnerHTML={{ __html: numbers }}
            ></div>
          </a>
        </div>
      ) : (
        <div
        onClick={() => navigate(local_link)}
          className={`dashboard__statistics-card cursor-pointer w-[25%] rounded-[1.25rem] p-[2rem] shadow-[2px_4px_8px_0px_#1E1E1E14] hover:translate-y-[-0.5rem] transition-transform hover:ease-out hover:shadow-[0_5px_5px_rgba(0,0,0,0.15)] duration-100`}
          style={{ backgroundColor: colorLight }}
        >
          <div className="flex items-center gap-4">
            <div className="icon rounded-full h-[4.5rem] w-[4.5rem] bg-white flex items-center justify-center gap-4">
              <img src={iconSrc} alt="Statistic icon" />
            </div>
            <p className="inter font-[500] text-[1.5rem] leading-[2rem]">
              {info}
            </p>
          </div>
          <div
            className={`numbers mt-8 text-[3rem] font-[600]`}
            style={{ color: colorBold }}
            dangerouslySetInnerHTML={{ __html: numbers }}
          ></div>
        </div>
      )}
    </>
  );
};

export default DashboardStatsCard;
