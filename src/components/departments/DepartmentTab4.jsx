import DepartCard4 from "./DepartCard4";
import { Table } from "antd";
import TeacherPotensialDepart4 from "./TeacherPotensialDepart4";
import TeacherGenterDepart4 from "./TeacherGenterDepart4";
import TeacherColumnDepart4 from "./TeacherColumnDepart4";
const columns = [
  {
    title: "№",
    dataIndex: "key",
    key: "key",
    align: "center",
  },
  {
    title: "ILMIY O’QUV LABARATORIYALAR",
    dataIndex: "name",
    key: "name",
  },
];

const dataSource = [
  {
    key: "1",
    name: "Ochiq ta’lim resurslari",
  },
  {
    key: "2",
    name: "VR laboratoriya",
  },
  
];
const data = [
  {
    id: 1,
    bgColor: "rgba(183, 209, 234, 0.2)",
    textColor: "rgba(32, 149, 212, 1)",
    number: 35,
    text: "O'RTACHA YOSH",
  },
  {
    id: 2,
    bgColor: "rgba(0, 186, 52, 0.2)",
    textColor: "rgba(0, 186, 52, 1)",
    number: 8,
    text: "ILMIY DARAJALILAR",
  },
  {
    id: 3,
    bgColor: "rgba(139, 92, 246, 0.2)",
    textColor: "#8B5CF6FF",
    number: 3,
    text: "ILMIY UNVONLILAR",
  },
  {
    id: 4,
    bgColor: "rgba(243, 94, 84, 0.2)",
    textColor: "rgba(243, 94, 84, 1)",
    number: 10,
    text: "DOKTARANTLAR VA MUSTAQIL IZLANUVCHILAR",
  },
];

const DepartmentTab4 = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 my-12">
        <TeacherPotensialDepart4 />
        <TeacherGenterDepart4 />
      </div>
      <div className="grid grid-cols-4 gap-6 mb-10">
        {data.map((item) => {
          return <DepartCard4 key={item.id} item={item} />;
        })}
      </div>
      <div id="department-tab" className="grid grid-cols-3 gap-6 my-12">
        <div className="col-span-1">
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false} // Agar pagination kerak bo'lsa, true qiling
            bordered
          />
        </div>
        <div className="col-span-2">
          <TeacherColumnDepart4 />
        </div>
      </div>
    </>
  );
};

export default DepartmentTab4;
