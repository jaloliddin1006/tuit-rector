import FacultyTeachersCard from "../components/faculty-teachers/FacultyTeachersCard";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";
import FacultyPieChart from "../components/faculty-teachers/FacultyPieChart";
import FacultyBarChart from "../components/faculty-teachers/FacultyBarChart";
import FacultyColumnChart from "../components/faculty-teachers/FacultyColumnChart";
import AverageAgeTeachers from "../components/faculty-teachers/AverageAgeTeachers";
import FacultyTeacherPosition from "../components/faculty-teachers/FacultyTeacherPosition";
import CertificateOfTeachers from "../components/faculty-teachers/CertificateOfTeachers";
const data = [
  {
    id: 1,
    bgColor: "rgba(233, 246, 232, 1)",
    textColor: "rgba(0, 186, 52, 1)",
    number: "92+37=129",
    text: "Umumiy professor o'qituvchilar soni",
    img: i1,
  },
  {
    id: 2,
    bgColor: "rgba(1, 103, 187, 0.13)",
    textColor: "rgba(1, 103, 187, 1)",
    number: "47%/ 45%",
    text: "Ilmiy salohiyat",
    img: i2,
  },
  {
    id: 3,
    bgColor: "rgba(233, 246, 232, 1)",
    textColor: "rgba(0, 186, 52, 1)",
    number: "43",
    text: "O'rtacha yosh",
    img: i3,
  },
  {
    id: 4,
    bgColor: "rgba(1, 103, 187, 0.13)",
    textColor: "rgba(1, 103, 187, 1)",
    number: "61/31",
    text: "Erkak/Ayol o'qituvchilar",
    img: i4,
  },
];
const FacultyTeachers = () => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-4 gap-6 mb-12">
        {data.map((item) => {
          return <FacultyTeachersCard key={item.id} item={item} />;
        })}
      </div>
      <div className="grid grid-cols-7 gap-6 mb-12">
        <div className="col-span-3">
          <FacultyBarChart />
        </div>
        <div className="col-span-4">
          <FacultyTeacherPosition />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-6 mb-12">
        <div className="col-span-3">
        <FacultyPieChart />
        </div>
        <div className="col-span-4">
        <CertificateOfTeachers />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <FacultyColumnChart />
        <AverageAgeTeachers />
      </div>
    </div>
  );
};

export default FacultyTeachers;
