import { Breadcrumb } from "antd";
import AcademicTeacher from "../components/teachers/AcademicTeacher";
import CivilTeachers from "../components/teachers/CivilTeachers";
import FacultyCountTeachers from "../components/teachers/FacultyCountTeachers";
import FacultyPositionTeachers from "../components/teachers/FacultyPositionTeachers";
import MaleAndFemale from "../components/teachers/MaleAndFemale";
import ManagementStaff from "../components/teachers/ManagementStaff";
import TeacherPosition from "../components/teachers/TeacherPosition";
import { Link } from "react-router-dom";

const Teachers = () => {
  return (
    <>
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
                title: "O'qituvchilar",
              },
            ]}
          />
        </div>
        <div className="grid grid-cols-7 gap-6 mb-12">
          <div className="col-span-3">
            <TeacherPosition />
          </div>
          <div className="col-span-4">
            <AcademicTeacher />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-12">
          <MaleAndFemale />
          <CivilTeachers />
          <ManagementStaff />
        </div>
        <div className="grid grid-cols-7 gap-6">
          <div className="col-span-3">
            <FacultyCountTeachers />
          </div>
          <div className="col-span-4">
            <FacultyPositionTeachers />
          </div>
        </div>

        {/* <DonutCharts /> */}
      </div>
    </>
  );
};

export default Teachers;
