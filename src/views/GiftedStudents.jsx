import BusyStudentsInCompany from "../components/gifted-students/BusyStudentsInCompany";
import BusyStudentsInfo from "../components/gifted-students/BusyStudentsInfo";
import BusyStudentsInfo2 from "../components/gifted-students/BusyStudentsInfo2";
import BusyStudentsNum from "../components/gifted-students/BusyStudentsNum";
import GiftedStudentsCard from "../components/gifted-students/GiftedStudentsCard";
import GiftedStudentsPie from "../components/gifted-students/GiftedStudentsPie";
const data = [
  {
    id: 1,
    bgColor: "rgba(183, 209, 234, 0.2)",
    textColor: "rgba(32, 149, 212, 1)",
    number: 1,
    text: "O’zbekiston Respublikasi Prezidenti stipendiyasi",
    type: false
  },
  {
    id: 2,
    bgColor: "rgba(0, 186, 52, 0.2)",
    textColor: "rgba(0, 186, 52, 1)",
    number: 3,
    text: "Islom Karimov nomli davlat stipendiyasi",
    type: false
  },
  {
    id: 3,
    bgColor: "rgba(139, 92, 246, 0.2)",
    textColor: "#8B5CF6FF",
    number: 5,
    text: "Muhammad al-Xorazmiy nomli stipendiyasi",
    type: false
  },
  {
    id: 4,
    bgColor: "rgba(243, 94, 84, 0.2)",
    textColor: "rgba(243, 94, 84, 1)",
    number: 4,
    text: "Raqamli Texnologiyalar vazirligi stipendiyasi",
    type: false
  },
  {
    id: 5,
    bgColor: "rgba(183, 209, 234, 0.2)",
    textColor: "rgba(32, 149, 212, 1)",
    number: 4,
    text: "Beruniy nomli davlat stipendiyasi",
    type: false
  },
  {
    id: 6,
    bgColor: "rgba(183, 209, 234, 0.2)",
    textColor: "rgba(32, 149, 212, 1)",
    number: 35,
    text: "Hakatonlar",
    type: false
  },
  {
    id: 7,
    bgColor: "rgba(183, 209, 234, 0.2)",
    textColor: "rgba(32, 149, 212, 1)",
    number: 327,
    text: "IT sertifikatiga ega talabalar",
    type: true
  },
  {
    id: 8,
    bgColor: "rgba(183, 209, 234, 0.2)",
    textColor: "rgba(32, 149, 212, 1)",
    number: 56,
    text: "Xorijiy til bilish sertifikatni olgan talabalar",
    type: true
  },
];
const GiftedStudents = () => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-4 gap-6 mb-10">
        {data.map((item) => {
          return <GiftedStudentsCard key={item.id} item={item} />;
        })}
      </div>
      <div className="grid grid-cols-2 gap-6 mb-12">
        <GiftedStudentsPie />
        <BusyStudentsInfo />
      </div>
      <div className="grid grid-cols-2 gap-6 mb-12">
        {/* <BusyStudentsChart /> */}
        <BusyStudentsInfo2 />
        <BusyStudentsNum />
      </div>
      <BusyStudentsInCompany />
    </div>
  );
};

export default GiftedStudents;
