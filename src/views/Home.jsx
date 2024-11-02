import backgroundTUIT from "public/img/background-tuit.png";
import studentSrc from "public/icons/student-icon.png";
import teachersSrc from "public/icons/teachers-icon.png";
import residenceSrc from "public/icons/residence-icon.png";
import locationSrc from "public/icons/location-icon.png";
import departmentIcon1 from "public/icons/branch1.svg";
import departmentIcon2 from "public/icons/branch2.svg";
import departmentIcon3 from "public/icons/branch3.svg";
import backgroundTemporary from "public/img/facultyBackgroundTemporary.jfif";
import economyBackground from "public/img/economy_background.webp";
import difBackground from "public/img/dif_background.jpg";
import cyberBackground from "public/img/cyber_background.jfif";
import kifBackground from "public/img/kif_background.jfif";
import aktBackground from "public/img/akt_background.jpg";
import telekomBackground from "public/img/telekom_background.jpg";
import radioBackground from "public/img/radio_background.jfif";
import televisionBackground from "public/img/television_background.jfif";
import economyLogo from "public/img/economy_logo.svg";
import difLogo from "public/img/dif.svg";
import cyberLogo from "public/img/cyber_logo.svg";
import kifLogo from "public/img/kif_logo.svg";
import aktLogo from "public/img/akt_logo.svg";
import radioLogo from "public/img/radio_logo.svg";
import telekomLogo from "public/img/telekom_logo.svg";
import DashboardBranch from "../components/home/DashboardBranch";
import FacultyCard from "../components/home/FacultyCard";
import DashboardStatsCard from "../components/home/DashboardStatCard";

const data = {
  stats: [
    {
      id: 1,
      iconSrc: studentSrc,
      info: "Talabalar",
      numbers: "14676",
      colorBold: "#6461E1",
      colorLight: "#ECECFF",
      link: "",
      local_link: "/students",
    },
    {
      id: 2,
      iconSrc: teachersSrc,
      info: "Professor o'qituvchilar",
      numbers: "441",
      colorBold: "#E462CD",
      colorLight: "#F8E9FB",
      link: "",
      local_link: "/teachers",
    },
    {
      id: 3,
      iconSrc: residenceSrc,
      info: "Talabalar yashash joyi",
      numbers: "2421",
      colorBold: "#D4BC20",
      colorLight: "#FBF8E9",
      link: "",
      local_link: "/students-residence",
    },
    {
      id: 4,
      iconSrc: locationSrc,
      info: "Umumiy maydoni",
      numbers: "60.000 m<sup>2</sup>",
      colorBold: "#66C62B",
      colorLight: "#66C62B1F",
      link: "http://360.tuit.uz/",
      local_link: "",
    },
  ],
  faculties: [
    {
      id: 1,
      // img: backgroundTemporary,
      img: kifBackground,
      backgroundColor: "#325EA9DB",
      logoSrc: kifLogo,
      title: "KOMPYUTER INJINIRING FAKULTETI",
      departments: 5,
      teachers: 92,
      students: 1753,
      link: "/all-faculties",
    },
    {
      id: 4,
      // img: backgroundTemporary,
      img: economyBackground,
      backgroundColor: "#BAA548DB",
      logoSrc: economyLogo,
      title: "AKT SOHASIDA IQTISODIY VA MENEJMENT FAKULTETI",
      departments: 2,
      teachers: 100,
      students: 742,
      link: "/all-faculties",
    },
    {
      id: 2,
      // img: backgroundTemporary,
      img: difBackground,
      backgroundColor: "#1B6F79DB",
      logoSrc: difLogo,
      title: "DASTURIY INJINIRING FAKULTETI",
      departments: 4,
      teachers: 83,
      students: 1057,
      link: "/all-faculties",
    },
    {
      id: 3,
      // img: backgroundTemporary,
      img: cyberBackground,
      backgroundColor: "#6680B3DB",
      logoSrc: cyberLogo,
      title: "KIBERXAVFSIZLIK FAKULTETI",
      departments: 2,
      teachers: 100,
      students: 1095,
      link: "/all-faculties",
    },

    {
      id: 5,
      // img: backgroundTemporary,
      img: aktBackground,
      backgroundColor: "#F5AE32DB",
      logoSrc: aktLogo,
      title: "AKT SOHASIDAGI KASB TA'LIM FAKULTETI",
      departments: 2,
      teachers: 100,
      students: 416,
      link: "/all-faculties",
    },
    {
      id: 6,
      // img: backgroundTemporary,
      img: radioBackground,
      backgroundColor: "#007C7CDB",
      logoSrc: radioLogo,
      title: "RADIO VA MOBIL ALOQA FAKULTETI",
      departments: 2,
      teachers: 100,
      students: 719,
      link: "/all-faculties",
    },
    {
      id: 7,
      // img: backgroundTemporary,
      img: telekomBackground,
      backgroundColor: "#67AFC7DB",
      logoSrc: telekomLogo,
      title: "TELEKOMMUNIKATSIYA TEXNOLOGIYALAR FAKULTETI",
      departments: 2,
      teachers: 100,
      students: 971,
      link: "/all-faculties",
    },
    {
      id: 8,
      // img: backgroundTemporary,
      img: televisionBackground,
      backgroundColor: "#BBCA63DB",
      logoSrc: economyLogo,
      title: "TELEVIZION TEXNOLOGIYALAR FAKULTETI",
      departments: 2,
      teachers: 100,
      students: 652,
      link: "/all-faculties",
    },
    {
      id: 9,
      img: backgroundTemporary,
      backgroundColor: "#A562E4DB",
      logoSrc: economyLogo,
      title: "TATU-BGUIR QO'SHMA AXBOROT TEXNOLOGIYALARI FAKULTETI",
      departments: 2,
      teachers: 100,
      students: 42,
      link: "/all-faculties",
    },
  ],
  branches: [
    {
      id: 1,
      icon: departmentIcon1,
      title: "ILMIY ISHLAR VA INNOVATSIYALAR BO'LIMI",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque sed tincidunt iaculis egestas pulvinar donec.",
      link: "#",
    },
    {
      id: 2,
      icon: departmentIcon2,
      title: "HUDUDIY O'QUV MUASSASALAR BO'LIMI",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque sed tincidunt iaculis egestas pulvinar donec.",
      link: "/tuit-branches",
    },
    {
      id: 3,
      icon: departmentIcon3,
      title: "TALABALARNING IJTIMOIY HOLATI",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque sed tincidunt iaculis egestas pulvinar donec.",
      link: "/social-status",
    },
  ],
};

const Home = () => {
  return (
    <div className="!z-4 py-14">
      <p className="inter text-5xl font-[600] mb-3"></p>
      <p className="inter text-[1.8rem] font-[500] leading-[1.95rem] mb-5">
        BUILD THE FUTURE WITH DIGITAL EDUCATION
      </p>
      <div className="relative">
        <div className="absolute mx-auto w-[60%] h-auto !z-[-2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]">
          <img
            src={backgroundTUIT}
            alt="TUIT"
            className="w-full h-full object-fit object-center"
          />
        </div>
        <div className="py-8 flex items-center gap-6">
          {data.stats.map((stat) => (
            <DashboardStatsCard key={stat.id} {...stat} />
          ))}
        </div>
        <p className="mt-4 text-[2rem] font-[700]">Fakultetlar</p>
        <div className="py-8 grid grid-cols-3 justify-between gap-6">
          {data.faculties.map((faculty) => (
            <FacultyCard key={faculty.id} {...faculty} />
          ))}
        </div>
      </div>
      <p className="mt-4 text-[2rem] font-[700]">Bo&apos;limlar</p>
      <div className="py-8 grid grid-cols-3 justify-between gap-6">
        {data.branches.map((branch) => (
          <DashboardBranch key={branch.id} {...branch} />
        ))}
      </div>
    </div>
  );
};

export default Home;
