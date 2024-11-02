import { Breadcrumb } from "antd";
import TuitBranchCard from "../components/tuitBranches/TuitBranchCard";
import TuitBranchChart from "../components/tuitBranches/TuitBranchChart";
import TuitBranchDiagram from "../components/tuitBranches/TuitBranchDiagram";
import { Link } from "react-router-dom";
const data = {
  branches: [
    {
      id: 1,
      branchName: "TATUNF",
      branchFullName:
        "TOSHKENT AXBOROT TEXNOLOGIYALARI UNIVERSITETI NUKUS FILIALI",
      studentsNumber: 6554,
      backgroundColor: "#FDEAEA",
      color: "#E9090C",
    },
    {
      id: 2,
      branchName: "TATUUF",
      branchFullName:
        "TOSHKENT AXBOROT TEXNOLOGIYALARI UNIVERSITETI URGANCH FILIALI",
      studentsNumber: 2154,
      backgroundColor: "#F9EAFD",
      color: "#D609E9",
    },
    {
      id: 3,
      branchName: "TATUSF",
      branchFullName:
        "TOSHKENT AXBOROT TEXNOLOGIYALARI UNIVERSITETI SAMARQAND FILIALI",
      studentsNumber: 2530,
      backgroundColor: "#EAFDF2",
      color: "#09E944",
    },
    {
      id: 4,
      branchName: "TATUNuF",
      branchFullName:
        "TOSHKENT AXBOROT TEXNOLOGIYALARI UNIVERSITETI URGANCH FILIALI",
      studentsNumber: 1512,
      backgroundColor: "#EAEFFD",
      color: "#0914E9",
    },
    {
      id: 5,
      branchName: "TATUFF",
      branchFullName:
        "TOSHKENT AXBOROT TEXNOLOGIYALARI UNIVERSITETI FARG'ONA FILIALI",
      studentsNumber: 5484,
      backgroundColor: "#FDFCEA",
      color: "#E9A209",
    },
    {
      id: 6,
      branchName: "TATUQF",
      branchFullName:
        "TOSHKENT AXBOROT TEXNOLOGIYALARI UNIVERSITETI URGANCH FILIALI",
      studentsNumber: 2459,
      backgroundColor: "#09DAE91A",
      color: "#09DAE9",
    },
  ],
};

const TuitBranches = () => {
  return (
    <div className="py-16">
      <div className="mb-5 ml-2 flex items-center gap-4">
        <Breadcrumb
          style={{
            fontSize: "20px",
            textTransform: "uppercase",
            fontWeight: "500",
          }}
          separator={<i className="fa-solid fa-arrow-right-long"></i>}
          items={[
            {
              title: (
                <Link to="/">
                  <i className="fa-solid fa-house text-xl inline-block mr-2"></i>
                  Asosiy
                </Link>
              ),
            },
            {
              title: "Talabalar turar joylari",
            },
          ]}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 items-stretch mb-12">
        <div className="grid grid-cols-2 gap-6">
          {data.branches.map((branchItem) => (
            <TuitBranchCard key={branchItem.id} {...branchItem} />
          ))}
        </div>
        <TuitBranchDiagram />
      </div>
      {/* <div className="flex items-center justify-between gap-6">
        {data.branches.map((branchItem) => (
          <TuitBranchCard key={branchItem.id} {...branchItem} />
        ))}
      </div> */}
      <TuitBranchChart />
    </div>
  );
};

export default TuitBranches;
