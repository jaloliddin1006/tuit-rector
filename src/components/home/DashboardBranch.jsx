import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const DashboardBranch = ({ icon, title, desc, link }) => {
  const navigate = useNavigate();
  return (
    <div  className="branches-card rounded-[20px] bg-[#F4FAFD] z-0 shadow-[2px_4px_2px_0px_#1E1E1E10] inter hover:translate-y-[-0.5rem] transition-transform ease-out duration-100 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.15)]">
      <div className="p-[1.5rem]">
        <div className="w-16 h-16 mb-4">
          <img
            className="w-full h-full rounded-full object-cover"
            src={icon}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-2xl text-text_color font-semibold mb-4 uppercase">
            {title}
          </h3>
          <p className="text-[#1e1e1ea9] font-normal mb-6">{desc}</p>
          <Button
            onClick={() => navigate(link)}
            type="primary"
            style={{
              background: "#2095D4",
              padding: "18px 24px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "Inter",
            }}
          >
            Batafsil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardBranch;
