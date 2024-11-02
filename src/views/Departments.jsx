import { Tabs } from "antd";
import ColumnDepart from "../components/departments/ColumnDepart";
import ForegnTeacherDepart from "../components/departments/ForegnTeacherDepart";
import TeacherCountDepart from "../components/departments/TeacherCountDepart";
import { useNavigate } from "react-router-dom";
import DepartmentTab from "../components/departments/DepartmentTab";
import DepartNameCard from "../components/departments/DepartNameCard";
import DepartmentTab2 from "../components/departments/DepartmentTab2";
import DepartmentTab3 from "../components/departments/DepartmentTab3";
import DepartmentTab4 from "../components/departments/DepartmentTab4";
import DepartmentTab5 from "../components/departments/DepartmentTab5";
const { TabPane } = Tabs;
const data = [
  {
    id: 1,
    name: "INFORMATIKA ASOSLARI KAFEDRASI",
    number: 40,
    bg: "#27CD021A",
    color: "#27CD02"
  },
  {
    id: 2,
    name: "RAQAMLI TEXNLOGIYALAR KONVERGENSIYASI",
    number: 35,
    bg: "#f3cafd",
    color: "#A105C4"
  },
  {
    id: 3,
    name: "KOMPYUTER TIZIMLARI KAFEDRASI",
    number: 58,
    bg: "#FFA1341A",
    color: "#FFA134"
  },
  {
    id: 4,
    name: "MULTIMEDIA TEXNOLOGIYALARI KAFEDRASI",
    number: 23,
    bg: "#2469FF1A",
    color: "#2469FF"
  },
  {
    id: 5,
    name: "SUN'IY INTELLEKT",
    number: 31,
    bg: "#FF34DB1A",
    color: "#FF34DB"
  },
]
const Departments = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const activeTab = params.get("department") || "1";

  const onTabChange = (key) => {
    params.set("department", key);
    navigate({ search: params.toString() });
  };

  const tabData = [
    {
      key: "1",
      title: "INFORMATIKA ASOSLARI KAFEDRASI",
      content: <DepartmentTab />,
    },
    {
      key: "2",
      title: "RAQAMLI TEXNLOGIYALAR KONVERGENSIYASI",
      content: <DepartmentTab2 />,
    },
    {
      key: "3",
      title: "KOMPYUTER TIZIMLARI KAFEDRASI",
      content: <DepartmentTab3 />,
    },
    {
      key: "4",
      title: "MULTIMEDIA TEXNOLOGIYALARI KAFEDRASI",
      content: <DepartmentTab4 />,
    },
    {
      key: "5",
      title: "SUN'IY INTELLEKT",
      content: <DepartmentTab5 />,
    },
  ];
  return (
    <div className="py-16">
      <ColumnDepart />
      <div className="grid grid-cols-2 gap-6 my-12">
        <TeacherCountDepart />
        <ForegnTeacherDepart />
      </div>
      <div className="grid grid-cols-5 gap-6 mb-12">
        {data.map((item) => {
          return <DepartNameCard key={item.id} item={item} />;
        })}
      </div>
      <Tabs
        type="line"
        tabBarGutter={90}
        tabBarStyle={{
          display: "flex",
          justifyContent: "space-around",
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

export default Departments;
