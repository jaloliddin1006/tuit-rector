import studentSrc from "public/icons/student-icon.png";
import teachersSrc from "public/icons/teachers-icon.png";
import residenceSrc from "public/icons/residence-icon.png";
import locationSrc from "public/icons/location-icon.png";
import StudentsResidenceCard from "../components/student-residence/StudentResidenceCard";
import StudentsColumn from "../components/student-residence/StudentsColumn";
import TTJStudents from "../components/student-residence/TTJStudents";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
const data = {
  stats: [
    {
      id: 1,
      iconSrc: studentSrc,
      info: "TTJ",
      numbers: "2421",
      colorBold: "rgba(100, 97, 225, 1)",
      colorLight: "rgba(236, 236, 255, 1)",
      link: "",
      local_link: "/students",
    },
    {
      id: 2,
      iconSrc: teachersSrc,
      info: "IJARADA",
      numbers: "1379",
      colorBold: "#E462CD",
      colorLight: "#F8E9FB",
      link: "",
      local_link: "/teachers",
    },
    {
      id: 3,
      iconSrc: residenceSrc,
      info: "YAQIN QARINDOSHINIKIDA",
      numbers: "2379",
      colorBold: "#D4BC20",
      colorLight: "#FBF8E9",
      link: "",
      local_link: "/students-residence",
    },
    {
      id: 4,
      iconSrc: locationSrc,
      info: "SHAXSIY XONADONIDA",
      numbers: "1279",
      colorBold: "#66C62B",
      colorLight: "#66C62B1F",
      link: "https://tuit.uz/",
      local_link: "",
    },
  ],
  ttj: [
    {
      id: 1,
      iconSrc: studentSrc,
      info: "TTJ 1",
      numbers: "1067/1000",
      colorBold: "rgba(100, 97, 225, 1)",
      colorLight: "rgba(236, 236, 255, 1)",
      link: "",
      local_link: "/students",
    },
    {
      id: 2,
      iconSrc: teachersSrc,
      info: "TTJ 2",
      numbers: "493/500",
      colorBold: "#E462CD",
      colorLight: "#F8E9FB",
      link: "",
      local_link: "/teachers",
    },
    {
      id: 3,
      iconSrc: residenceSrc,
      info: "TTJ 3",
      numbers: "537/600",
      colorBold: "#D4BC20",
      colorLight: "#FBF8E9",
      link: "",
      local_link: "/students-residence",
    },
    {
      id: 4,
      iconSrc: locationSrc,
      info: "TTJ 4",
      numbers: "324/400",
      colorBold: "#66C62B",
      colorLight: "#66C62B1F",
      link: "https://tuit.uz/",
      local_link: "",
    },
  ],
};
const StudentsResidence = () => {
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
      <div className="flex items-center gap-6 mb-12">
        {data.stats.map((stat) => (
          <StudentsResidenceCard key={stat.id} {...stat} />
        ))}
      </div>

      <StudentsColumn />
      <div className="flex items-center gap-6 my-12">
        {data.ttj.map((stat) => (
          <StudentsResidenceCard key={stat.id} {...stat} />
        ))}
      </div>
      <TTJStudents />
    </div>
  );
};

export default StudentsResidence;
