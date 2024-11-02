import AllCoursesStudents from "../components/students-rating/AllCoursesStudents";
import BoyAndGirlRating from "../components/students-rating/BoyAndGirlRating";
import CourseOfStudents from "../components/students-rating/CourseOfStudents";
import FormOfPaymentRating from "../components/students-rating/FormOfPaymentRating";
import MapRating from "../components/students-rating/MapRating";
import RatingSocialStatus from "../components/students-rating/RatingSocialStatus";
import RegionStudents from "../components/students-rating/RegionStudents";
import StudentsCountCard from "../components/students-rating/StudentsCountCard";
import StudentsCountry from "../components/students-rating/StudentsCountry";
import StudentsNation from "../components/students-rating/StudentsNation";
import StudentsRatingCard from "../components/students-rating/StudentsRatingCard";
import StudentsResidenceBar from "../components/students-rating/StudentsResidenceBar";
import StudentTotalChart from "../components/students-rating/StudentTotalChart";

const data = [
  {
    id: 1,
    name: "KURSDAN QOLGAN TALABALAR",
    count: "4/48",
    color: "rgba(32, 149, 212, 1)",
  },
  {
    id: 2,
    name: "AKADEMIK TA'TIL OLGANLAR",
    count: "1/1",
    color: "rgba(249, 134, 0, 1)",
  },
  {
    id: 3,
    name: "AKADEMIK MOBILLIK DAVRIDAGILAR",
    count: "0/1",
    color: "rgba(0, 186, 52, 1)",
  },
  {
    id: 4,
    name: "CHETLASHTIRILGAN TALABALAR",
    count: "13/21",
    color: "rgba(243, 94, 84, 1)",
  },
];
const data1 = [
  {
    id: 1,
    name: "KUNDUZGI TA’LIM TALABALARI",
    count: "1753",
    color: "#FFD25F",
    bg: "#FBF8E9",
  },
  {
    id: 3,
    name: "SIRTQI TA'LIM TALABALARI",
    count: "1016",
    color: "#27CD02",
    bg: "#EBFAEF",
  },
  {
    id: 5,
    name: "MASOFAVIY TA'LIM TALABALARI",
    count: "89",
    color: "#FF3E32",
    bg: "#FEF0F0",
  },
  {
    id: 2,
    name: "MAGISTRATURA TALABALARI",
    count: "60",
    color: "#FF34DB",
    bg: "#F8E9FB",
  },
  {
    id: 4,
    name: "IKKINCHI MUTAXASSISLIK TALABALARI",
    count: "89",
    color: "#FF3E32",
    bg: "#FEF0F0",
  },
];
const StudentsRating = () => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1 items-stretch">
          <StudentTotalChart />
        </div>
        <div className="col-span-2 items-stretch">
          <FormOfPaymentRating />
        </div>
        <div className="col-span-1 items-stretch">
          <BoyAndGirlRating />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-6 my-16">
        {data1.map((item) => {
          return <StudentsCountCard key={item.id} item={item} />;
        })}
      </div>
      <div className="grid grid-cols-2 gap-6 mb-12">
        <AllCoursesStudents />
        <CourseOfStudents />
      </div>
      <div className="grid grid-cols-4 gap-6 mb-12">
        {data.map((item) => {
          return <StudentsRatingCard key={item.id} item={item} />;
        })}
      </div>
      <div className="grid grid-cols-2 gap-6 mb-12">
        <StudentsResidenceBar />
        <RatingSocialStatus />
      </div>
      <MapRating />
      <div className="mt-12">
        <RegionStudents />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-12">
        <StudentsNation />
        <StudentsCountry />
      </div>
    </div>
  );
};

export default StudentsRating;
