import { Table, Avatar, Breadcrumb } from "antd";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "№",
    dataIndex: "key",
    key: "key",
    align: "center",
  },
  {
    title: "TALABALANING ISM, FAMILIYA, OTASINING ISMI",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "FAKULTET NOMI",
    dataIndex: "faculty",
    key: "faculty",
  },
  {
    title: "GURUHI",
    dataIndex: "group",
    key: "group",
    align: "center",
  },
  {
    title: "SERTIFIKAT",
    dataIndex: "sertificate",
    key: "sertificate",
    align: "center",
  },
  {
    title: "RASMI",
    dataIndex: "image",
    key: "image",
    align: "center",
    render: (text, record) => <Avatar src={record.image} />,
  },
];

const dataSource = [
  {
    key: "1",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI MULTIMEDIA",
    group: "215-21",
    sertificate: "B1",
    image: avatar,
  },
  {
    key: "2",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI KOMPYUTER INJINIRINGI",
    group: "215-21",
    sertificate: "B1",
    image: avatar,
  },
  {
    key: "3",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI MULTIMEDIA",
    group: "215-21",
    sertificate: "B1",
    image: avatar,
  },
  {
    key: "4",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI KOMPYUTER INJINIRINGI",
    group: "215-21",
    sertificate: "B1",
    image: avatar,
  },
  {
    key: "5",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI MULTIMEDIA",
    group: "215-21",
    sertificate: "B1",
    image: avatar,
  },
  {
    key: "6",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI KOMPYUTER INJINIRINGI",
    group: "215-21",
    sertificate: "B1",
    image: avatar,
  },
  {
    key: "7",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI MULTIMEDIA",
    group: "215-21",
    sertificate: "B1",
    image: avatar,
  },
  {
    key: "8",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI KOMPYUTER INJINIRINGI",
    group: "215-21",
    sertificate: "B1",
    image: avatar,
  },
  {
    key: "9",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI MULTIMEDIA",
    group: "215-21",
    sertificate: "B1",
    image: avatar,
  },
  {
    key: "10",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI KOMPYUTER INJINIRINGI",
    group: "215-21",
    sertificate: "B1",
    image: avatar,
  },
  {
    key: "11",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI MULTIMEDIA",
    group: "215-21",
    sertificate: "B1",
    image: avatar,
  },
  {
    key: "12",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI KOMPYUTER INJINIRINGI",
    group: "215-21",
    sertificate: "B1",
    image: avatar,
  },
  {
    key: "13",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI MULTIMEDIA",
    group: "215-21",
    sertificate: "B1",
    image: avatar,
  },
  {
    key: "14",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI KOMPYUTER INJINIRINGI",
    group: "215-21",
    sertificate: "B1",
    image: avatar,
  },
  {
    key: "14",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI MULTIMEDIA",
    group: "215-21",
    sertificate: "B1",
    image: avatar,
  },
  {
    key: "16",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI KOMPYUTER INJINIRINGI",
    group: "215-21",
    sertificate: "B1",
    image: avatar,
  },
];
const StudentsTable = () => {
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
              title: "Xorijiy til bilish sertifikatini olgan talabalar",
            },
          ]}
        />
      </div>
      {/* <h2 className="text-3xl uppercase font-semibold mb-8 text-[#1E1E1E]">Xorijiy til bilish sertifikatni olgan talabalar soni</h2> */}
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false} // Agar pagination kerak bo'lsa, true qiling
        bordered
      />
    </div>
  );
};

export default StudentsTable;
