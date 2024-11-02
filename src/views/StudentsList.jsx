import StudentsListCard from "../components/students-list/StudentsListCard";
import st from "../assets/st.png";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
const data = [
  {
    id: 1,
    name: "Davlatboyeva Munisa",
    lang: "Al-Xorazmiy stipendiyasi sovrindori",
    pr: "C++, Javascript",
    img: st,
  },
  {
    id: 2,
    name: "Davlatboyeva Munisa",
    lang: "Al-Xorazmiy stipendiyasi sovrindori",
    pr: "C++, Javascript",
    img: st,
  },
  {
    id: 3,
    name: "Davlatboyeva Munisa",
    lang: "Al-Xorazmiy stipendiyasi sovrindori",
    pr: "C++, Javascript",
    img: st,
  },
  {
    id: 4,
    name: "Shomamatova Diyora",
    lang: "Al-Xorazmiy stipendiyasi sovrindori",
    pr: "C++, Javascript",
    img: st,
  },
  {
    id: 5,
    name: "Davlatboyeva Munisa",
    lang: "Al-Xorazmiy stipendiyasi sovrindori",
    pr: "C++, Javascript",
    img: st,
  },
  {
    id: 6,
    name: "Davlatboyeva Munisa",
    lang: "Al-Xorazmiy stipendiyasi sovrindori",
    pr: "C++, Javascript",
    img: st,
  },
  {
    id: 7,
    name: "Shomamatova Diyora",
    lang: "Al-Xorazmiy stipendiyasi sovrindori",
    pr: "C++, Javascript",
    img: st,
  },
  {
    id: 8,
    name: "Davlatboyeva Munisa",
    lang: "Al-Xorazmiy stipendiyasi sovrindori",
    pr: "C++, Javascript",
    img: st,
  },
  {
    id: 9,
    name: "Davlatboyeva Munisa",
    lang: "Al-Xorazmiy stipendiyasi sovrindori",
    pr: "C++, Javascript",
    img: st,
  },
  {
    id: 10,
    name: "Shomamatova Diyora",
    lang: "Al-Xorazmiy stipendiyasi sovrindori",
    pr: "C++, Javascript",
    img: st,
  },
  {
    id: 11,
    name: "Davlatboyeva Munisa",
    lang: "Al-Xorazmiy stipendiyasi sovrindori",
    pr: "C++, Javascript",
    img: st,
  },
  {
    id: 12,
    name: "Davlatboyeva Munisa",
    lang: "Al-Xorazmiy stipendiyasi sovrindori",
    pr: "C++, Javascript",
    img: st,
  },
];
const StudentsList = () => {
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
              title: (
                <Link to="/all-faculties?activeTab=2">
                  Iqtidorli talabalar
                </Link>
              ),
            },
            {
              title: "AL-XORAZMIY STIPENDIYASI SOVRINDORLARI",
            },
          ]}
        />
      </div>
      {/* <h2 className="text-3xl uppercase font-semibold mb-8 text-[#1E1E1E]">
        AL-XORAZMIY STIPENDIYASI SOVRINDORLARI
      </h2> */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        {data.map((item) => {
          return <StudentsListCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default StudentsList;
