import TotalStudentsCard from "../components/numberOfStudents/TotalStudentsCard";
import StudentCard from "../components/numberOfStudents/StudentCard";
import StudentsMapUzb from "../components/numberOfStudents/StudentsMapUzb";
import AllStudentsOfFaculties from "../components/numberOfStudents/AllStudentsOfFaculties";
import StudentsCountryChart from "../components/numberOfStudents/StudentsCountryChart";
import { Breadcrumb, Tabs } from "antd";
import { Link, useNavigate } from "react-router-dom";
import MainStudentsAll from "../components/numberOfStudents/MainStudentsAll";
import MainStudentsGrand from "../components/numberOfStudents/MainStudentsGrand";
import TotalStudentsCard2 from "../components/numberOfStudents/TotalStudentsCard2";
import TotalStudentsCard3 from "../components/numberOfStudents/TotalStudentsCard3";
import TotalStudentsCard4 from "../components/numberOfStudents/TotalStudentsCard4";
import TotalStudentsCard5 from "../components/numberOfStudents/TotalStudentsCard5";
import TotalStudentsCard6 from "../components/numberOfStudents/TotalStudentsCard6";
import RegionStudentsCount from "../components/numberOfStudents/RegionStudentsCount";
const { TabPane } = Tabs;
const data = {
  studentCards: [
    {
      id: "1",
      link: "",
      title: "KUNDUZGI TA'LIM TALABALAR SONI",
      studentsNumber: 7603,
      allStudents: 14676,
      backgroundColor: "#FFF6EB",
      textColor: "#F98600",
      borderColor: "#F9860033",
    },
    {
      id: "2",
      link: "",
      title: "MAGISTRATURA TALABALAR SONI",
      studentsNumber: 381,
      allStudents: 14676,
      backgroundColor: "#F6F2FF",
      textColor: "#8B5CF6",
      borderColor: "#8B5CF633",
    },
    {
      id: "3",
      link: "",
      title: "SIRTQI TALABALAR SONI",
      studentsNumber: 5332,
      allStudents: 14676,
      backgroundColor: "#EBFAEF",
      textColor: "#00BA34",
      borderColor: "#00BA3433",
    },
    {
      id: "4",
      link: "",
      title: "MASOFAVIY TA'LIM TALABALAR SONI",
      studentsNumber: 327,
      allStudents: 14676,
      backgroundColor: "#FEF0F0",
      textColor: "#F35E54",
      borderColor: "#F35E5433",
    },
  ],
  studentCards1: [
    {
      id: "1",
      link: "",
      title: "KUNDUZGI TA'LIM TALABALAR SONI",
      studentsNumber: 1829,
      allStudents: 3604,
      backgroundColor: "#FFF6EB",
      textColor: "#F98600",
      borderColor: "#F9860033",
    },
    {
      id: "2",
      link: "",
      title: "MAGISTRATURA TALABALAR SONI",
      studentsNumber: 54,
      allStudents: 3604,
      backgroundColor: "#F6F2FF",
      textColor: "#8B5CF6",
      borderColor: "#8B5CF633",
    },
    {
      id: "3",
      link: "",
      title: "SIRTQI TALABALAR SONI",
      studentsNumber: 1370,
      allStudents: 3604,
      backgroundColor: "#EBFAEF",
      textColor: "#00BA34",
      borderColor: "#00BA3433",
    },
    {
      id: "4",
      link: "",
      title: "MASOFAVIY TA'LIM TALABALAR SONI",
      studentsNumber: 59,
      allStudents: 3604,
      backgroundColor: "#FEF0F0",
      textColor: "#F35E54",
      borderColor: "#F35E5433",
    },
  ],
  studentCards2: [
    {
      id: "1",
      link: "",
      title: "KUNDUZGI TA'LIM TALABALAR SONI",
      studentsNumber: 1277,
      allStudents: 2870,
      backgroundColor: "#FFF6EB",
      textColor: "#F98600",
      borderColor: "#F9860033",
    },
    {
      id: "2",
      link: "",
      title: "MAGISTRATURA TALABALAR SONI",
      studentsNumber: 35,
      allStudents: 2870,
      backgroundColor: "#F6F2FF",
      textColor: "#8B5CF6",
      borderColor: "#8B5CF633",
    },
    {
      id: "3",
      link: "",
      title: "SIRTQI TALABALAR SONI",
      studentsNumber: 1005,
      allStudents: 2870,
      backgroundColor: "#EBFAEF",
      textColor: "#00BA34",
      borderColor: "#00BA3433",
    },
    {
      id: "4",
      link: "",
      title: "MASOFAVIY TA'LIM TALABALAR SONI",
      studentsNumber: 4,
      allStudents: 2870,
      backgroundColor: "#FEF0F0",
      textColor: "#F35E54",
      borderColor: "#F35E5433",
    },
  ],
  studentCards3: [
    {
      id: "1",
      link: "",
      title: "KUNDUZGI TA'LIM TALABALAR SONI",
      studentsNumber: 1792,
      allStudents: 3808,
      backgroundColor: "#FFF6EB",
      textColor: "#F98600",
      borderColor: "#F9860033",
    },
    {
      id: "2",
      link: "",
      title: "MAGISTRATURA TALABALAR SONI",
      studentsNumber: 41,
      allStudents: 3808,
      backgroundColor: "#F6F2FF",
      textColor: "#8B5CF6",
      borderColor: "#8B5CF633",
    },
    {
      id: "3",
      link: "",
      title: "SIRTQI TALABALAR SONI",
      studentsNumber: 1603,
      allStudents: 3808,
      backgroundColor: "#EBFAEF",
      textColor: "#00BA34",
      borderColor: "#00BA3433",
    },
    {
      id: "4",
      link: "",
      title: "MASOFAVIY TA'LIM TALABALAR SONI",
      studentsNumber: 76,
      allStudents: 3808,
      backgroundColor: "#FEF0F0",
      textColor: "#F35E54",
      borderColor: "#F35E5433",
    },
  ],
  studentCards4: [
    {
      id: "1",
      link: "",
      title: "KUNDUZGI TA'LIM TALABALAR SONI",
      studentsNumber: 2521,
      allStudents: 5022,
      backgroundColor: "#FFF6EB",
      textColor: "#F98600",
      borderColor: "#F9860033",
    },
    {
      id: "2",
      link: "",
      title: "MAGISTRATURA TALABALAR SONI",
      studentsNumber: 57,
      allStudents: 5022,
      backgroundColor: "#F6F2FF",
      textColor: "#8B5CF6",
      borderColor: "#8B5CF633",
    },
    {
      id: "3",
      link: "",
      title: "SIRTQI TALABALAR SONI",
      studentsNumber: 1785,
      allStudents: 5022,
      backgroundColor: "#EBFAEF",
      textColor: "#00BA34",
      borderColor: "#00BA3433",
    },
    {
      id: "4",
      link: "",
      title: "MASOFAVIY TA'LIM TALABALAR SONI",
      studentsNumber: 173,
      allStudents: 5022,
      backgroundColor: "#FEF0F0",
      textColor: "#F35E54",
      borderColor: "#F35E5433",
    },
  ],
  studentCards5: [
    {
      id: "1",
      link: "",
      title: "KUNDUZGI TA'LIM TALABALAR SONI",
      studentsNumber: 1212,
      allStudents: 2825,
      backgroundColor: "#FFF6EB",
      textColor: "#F98600",
      borderColor: "#F9860033",
    },
    {
      id: "2",
      link: "",
      title: "MAGISTRATURA TALABALAR SONI",
      studentsNumber: 34,
      allStudents: 2825,
      backgroundColor: "#F6F2FF",
      textColor: "#8B5CF6",
      borderColor: "#8B5CF633",
    },
    {
      id: "3",
      link: "",
      title: "SIRTQI TALABALAR SONI",
      studentsNumber: 1579,
      allStudents: 2825,
      backgroundColor: "#EBFAEF",
      textColor: "#00BA34",
      borderColor: "#00BA3433",
    },
    {
      id: "4",
      link: "",
      title: "MASOFAVIY TA'LIM TALABALAR SONI",
      studentsNumber: 0,
      allStudents: 2825,
      backgroundColor: "#FEF0F0",
      textColor: "#F35E54",
      borderColor: "#F35E5433",
    },
  ],
  studentCards6: [
    {
      id: "1",
      link: "",
      title: "KUNDUZGI TA'LIM TALABALAR SONI",
      studentsNumber: 387,
      allStudents: 608,
      backgroundColor: "#FFF6EB",
      textColor: "#F98600",
      borderColor: "#F9860033",
    },
    {
      id: "2",
      link: "",
      title: "MAGISTRATURA TALABALAR SONI",
      studentsNumber: 6,
      allStudents: 608,
      backgroundColor: "#F6F2FF",
      textColor: "#8B5CF6",
      borderColor: "#8B5CF633",
    },
    {
      id: "3",
      link: "",
      title: "SIRTQI TALABALAR SONI",
      studentsNumber: 215,
      allStudents: 608,
      backgroundColor: "#EBFAEF",
      textColor: "#00BA34",
      borderColor: "#00BA3433",
    },
    {
      id: "4",
      link: "",
      title: "MASOFAVIY TA'LIM TALABALAR SONI",
      studentsNumber: 0,
      allStudents: 608,
      backgroundColor: "#FEF0F0",
      textColor: "#F35E54",
      borderColor: "#F35E5433",
    },
  ],
};

const NumberOfStudents = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const activeTab = params.get("activeTab") || "1";

  const onTabChange = (key) => {
    params.set("activeTab", key);
    navigate({ search: params.toString() });
  };

  const tabData = [
    {
      key: "1",
      title: "Nukus filiali",
      content: (
        <div className="pt-10 flex gap-6 justify-between items-center w-full mx-auto">
          <div className="w-[62%] student-cards grid grid-cols-2 gap-6">
            {data.studentCards1.map((studentCardItem) => (
              <StudentCard key={studentCardItem.id} {...studentCardItem} />
            ))}
          </div>
          <TotalStudentsCard />
        </div>
      ),
    },

    {
      key: "2",
      title: "Urganch filiali",
      content: (
        <div className="pt-10 flex gap-6 justify-between items-center w-full mx-auto">
          <div className="w-[62%] student-cards grid grid-cols-2 gap-6">
            {data.studentCards2.map((studentCardItem) => (
              <StudentCard key={studentCardItem.id} {...studentCardItem} />
            ))}
          </div>
          <TotalStudentsCard2 />
        </div>
      ),
    },
    {
      key: "3",
      title: "Samarqand filiali",
      content: (
        <div className="pt-10 flex gap-6 justify-between items-center w-full mx-auto">
          <div className="w-[62%] student-cards grid grid-cols-2 gap-6">
            {data.studentCards3.map((studentCardItem) => (
              <StudentCard key={studentCardItem.id} {...studentCardItem} />
            ))}
          </div>
          <TotalStudentsCard3 />
        </div>
      ),
    },
    {
      key: "4",
      title: "Farg'ona filiali",
      content: (
        <div className="pt-10 flex gap-6 justify-between items-center w-full mx-auto">
          <div className="w-[62%] student-cards grid grid-cols-2 gap-6">
            {data.studentCards4.map((studentCardItem) => (
              <StudentCard key={studentCardItem.id} {...studentCardItem} />
            ))}
          </div>
          <TotalStudentsCard4 />
        </div>
      ),
    },
    {
      key: "5",
      title: "Qarshi filiali",
      content: (
        <div className="pt-10 flex gap-6 justify-between items-center w-full mx-auto">
          <div className="w-[62%] student-cards grid grid-cols-2 gap-6">
            {data.studentCards5.map((studentCardItem) => (
              <StudentCard key={studentCardItem.id} {...studentCardItem} />
            ))}
          </div>
          <TotalStudentsCard5 />
        </div>
      ),
    },
    {
      key: "6",
      title: "Nurafshon filiali",
      content: (
        <div className="pt-10 flex gap-6 justify-between items-center w-full mx-auto">
          <div className="w-[62%] student-cards grid grid-cols-2 gap-6">
            {data.studentCards6.map((studentCardItem) => (
              <StudentCard key={studentCardItem.id} {...studentCardItem} />
            ))}
          </div>
          <TotalStudentsCard6 />
        </div>
      ),
    },
  ];
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
              title: "Talabalar",
            },
          ]}
        />
      </div>

      <div className="flex gap-6 justify-between items-center w-full mx-auto">
        <div className="w-[62%] student-cards grid grid-cols-2 gap-6">
          {data.studentCards.map((studentCardItem) => (
            <StudentCard key={studentCardItem.id} {...studentCardItem} />
          ))}
        </div>
        <TotalStudentsCard />
      </div>
      <div className="grid grid-cols-2 gap-6 my-12">
        <MainStudentsAll />
        <MainStudentsGrand />
      </div>
      <div className="my-12">
        <StudentsMapUzb />
      </div>
      <RegionStudentsCount />
      <div className="grid grid-cols-2 gap-6 my-12">
        <AllStudentsOfFaculties />
        <StudentsCountryChart />
      </div>
      <Tabs
        type="line"
        tabBarGutter={190}
        tabBarStyle={{
          display: "flex",
          // justifyContent: "space-around",
          width: "100%",
          flex: "1",
        }}
        activeKey={activeTab}
        onChange={onTabChange}
      >
        {tabData.map((tab) => (
          <TabPane
            tab={
              <p
                style={{
                  textTransform: "uppercase",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                {tab.title}
              </p>
            }
            key={tab.key}
          >
            {tab.content}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default NumberOfStudents;
