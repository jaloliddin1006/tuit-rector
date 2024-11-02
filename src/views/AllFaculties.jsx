import { Breadcrumb, Tabs } from "antd";
import { Link, useNavigate } from "react-router-dom";
import StudentsRating from "./StudentsRating";
import GiftedStudents from "./GiftedStudents";
import FacultyTeachers from "./FacultyTeachers";
import StudentsRatingList from "./StudentsRatingList";
import Departments from "./Departments";
const { TabPane } = Tabs;
const AllFaculties = () => {
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
      title: "TALABALAR HAQIDA MA'LUMOT",
      content: <StudentsRating />,
    },

    {
      key: "2",
      title: "Iqtidorli talabalar",
      content: <GiftedStudents />,
    },
    {
      key: "4",
      title: "Talabalar reytingi",
      content: <StudentsRatingList />,
    },
    {
      key: "3",
      title: "O'qituvchilar",
      content: <FacultyTeachers />,
    },
    {
      key: "5",
      title: "Kafedralar",
      content: <Departments />,
    },
  ];
  return (
    <div className="pt-10">
      <div className="mb-5 ml-2 flex items-center gap-4">
        <Breadcrumb
          style={{
            fontSize: "17px",
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
              title: "Kompyuter injiniringi",
            },
          ]}
        />
      </div>
      <Tabs
        type="line"
        tabBarGutter={230}
        tabBarStyle={{
          // display: "flex",
          // justifyContent: "space-around",
          // width: "100%",
          // flex: "1",
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

export default AllFaculties;
