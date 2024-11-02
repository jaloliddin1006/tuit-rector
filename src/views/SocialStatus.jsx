import { Link, useNavigate } from "react-router-dom";
import SocialStatusCard from "../components/social-status/SocialStatusCard";
import SocialStatusChart from "../components/social-status/SocialStatusChart";
import { Breadcrumb, Tabs } from "antd";
import SocialStatusBar from "../components/social-status/SocialStatusBar";
const { TabPane } = Tabs;
const data = {
  branches: [
    {
      id: 1,
      branchName: "“TEMIR DAFTAR”",
      branchFullName:
        "“TEMIR DAFTAR” DAGI TALABALAR TTJ LARGA NAVBATSIZ JOYLASHTIRILADI",
      studentsNumber: 6554,
      backgroundColor: "#FDEAEA",
      color: "#E9090C",
    },
    {
      id: 2,
      branchName: "“IJTIMOIY HIMOYA REESTRI”",
      branchFullName:
        "“TEMIR DAFTAR” DAGI TALABALAR TTJ LARGA NAVBATSIZ JOYLASHTIRILADI",
      studentsNumber: 2154,
      backgroundColor: "#F9EAFD",
      color: "#D609E9",
    },
    {
      id: 3,
      branchName: "“AYOLLAR DAFTARI”",
      branchFullName:
        "“TEMIR DAFTAR” DAGI TALABALAR TTJ LARGA NAVBATSIZ JOYLASHTIRILADI",
      studentsNumber: 2530,
      backgroundColor: "#EAFDF2",
      color: "#09E944",
    },
    {
      id: 4,
      branchName: "“YOSHLAR DAFTARI”",
      branchFullName:
        "“TEMIR DAFTAR” DAGI TALABALAR TTJ LARGA NAVBATSIZ JOYLASHTIRILADI",
      studentsNumber: 1512,
      backgroundColor: "#EAEFFD",
      color: "#0914E9",
    },
    {
      id: 5,
      branchName: "“CHIN YETIM VA MEHRIBONLIK UYI”",
      branchFullName:
        "MEHRIBONLIK UYI TARBIYALANUVCHILARIGA 9 OY DAVOMIDA 300 MLN SO'M TO'LAB BERILADI",
      studentsNumber: 5484,
      backgroundColor: "#FDFCEA",
      color: "#E9A209",
    },
    {
      id: 6,
      branchName: "“NOGIRONLIGI BOR”",
      branchFullName: "NOGIRONLIGI BOR TALABALARGA TTJ BEPUL QILIB BERILADI",
      studentsNumber: 2459,
      backgroundColor: "#09DAE91A",
      color: "#09DAE9",
    },
  ],
};
const SocialStatus = () => {
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
        <div className="pt-10">
          <div className="grid grid-cols-6 gap-6 mb-12">
            {data.branches.map((branchItem) => (
              <SocialStatusCard key={branchItem.id} {...branchItem} />
            ))}
          </div>
          <SocialStatusBar />
        </div>
      ),
    },

    {
      key: "2",
      title: "Urganch filiali",
      content: (
        <div className="pt-10">
          <div className="grid grid-cols-6 gap-6 mb-12">
            {data.branches.map((branchItem) => (
              <SocialStatusCard key={branchItem.id} {...branchItem} />
            ))}
          </div>
          <SocialStatusBar />
        </div>
      ),
    },
    {
      key: "3",
      title: "Samarqand filiali",
      content: (
        <div className="pt-10">
          <div className="grid grid-cols-6 gap-6 mb-12">
            {data.branches.map((branchItem) => (
              <SocialStatusCard key={branchItem.id} {...branchItem} />
            ))}
          </div>
          <SocialStatusBar />
        </div>
      ),
    },
    {
      key: "4",
      title: "Farg'ona filiali",
      content: (
        <div className="pt-10">
          <div className="grid grid-cols-6 gap-6 mb-12">
            {data.branches.map((branchItem) => (
              <SocialStatusCard key={branchItem.id} {...branchItem} />
            ))}
          </div>
          <SocialStatusBar />
        </div>
      ),
    },
    {
      key: "5",
      title: "Qarshi filiali",
      content: (
        <div className="pt-10">
          <div className="grid grid-cols-6 gap-6 mb-12">
            {data.branches.map((branchItem) => (
              <SocialStatusCard key={branchItem.id} {...branchItem} />
            ))}
          </div>
          <SocialStatusBar />
        </div>
      ),
    },
    {
      key: "6",
      title: "Nurafshon filiali",
      content: (
        <div className="pt-10">
          <div className="grid grid-cols-6 gap-6 mb-12">
            {data.branches.map((branchItem) => (
              <SocialStatusCard key={branchItem.id} {...branchItem} />
            ))}
          </div>
          <SocialStatusBar />
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
              title: "Talabalarning ijtimoiy holati",
            },
          ]}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 items-stretch mb-12">
        <div className="grid grid-cols-2 gap-6">
          {data.branches.map((branchItem) => (
            <SocialStatusCard key={branchItem.id} {...branchItem} />
          ))}
        </div>
        <SocialStatusChart />
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

export default SocialStatus;
