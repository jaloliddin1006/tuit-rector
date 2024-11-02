import { Table, Avatar } from "antd";
import avatar from "../assets/avatar.png";
import Gpa1 from "../components/students-rating-list/Gpa1";
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
    title: "Kursi",
    dataIndex: "course",
    key: "course",
    align: "center",
  },
  {
    title: "GPA",
    dataIndex: "gpa",
    key: "gpa",
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
    course: "1-KURS",
    gpa: "4.55",
    image: avatar,
  },
  {
    key: "2",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI KOMPYUTER INJINIRINGI",
    group: "215-21",
    course: "2-KURS",
    gpa: "4.55",
    image: avatar,
  },
  {
    key: "3",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI MULTIMEDIA",
    group: "215-21",
    course: "2-KURS",
    gpa: "4.55",
    image: avatar,
  },
  {
    key: "4",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI KOMPYUTER INJINIRINGI",
    group: "215-21",
    course: "2-KURS",
    gpa: "4.55",
    image: avatar,
  },
  {
    key: "5",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI MULTIMEDIA",
    group: "215-21",
    course: "2-KURS",
    gpa: "4.55",
    image: avatar,
  },
  {
    key: "6",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI KOMPYUTER INJINIRINGI",
    group: "215-21",
    course: "2-KURS",
    gpa: "4.55",
    image: avatar,
  },
  {
    key: "7",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI MULTIMEDIA",
    group: "215-21",
    course: "2-KURS",
    gpa: "4.55",
    image: avatar,
  },
  {
    key: "8",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI KOMPYUTER INJINIRINGI",
    group: "215-21",
    course: "2-KURS",
    gpa: "4.55",
    image: avatar,
  },
  {
    key: "9",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI MULTIMEDIA",
    group: "215-21",
    course: "2-KURS",
    gpa: "4.55",
    image: avatar,
  },
  {
    key: "10",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI KOMPYUTER INJINIRINGI",
    group: "215-21",
    course: "2-KURS",
    gpa: "4.55",
    image: avatar,
  },
  {
    key: "11",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI MULTIMEDIA",
    group: "215-21",
    course: "2-KURS",
    gpa: "4.55",
    image: avatar,
  },
  {
    key: "12",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI KOMPYUTER INJINIRINGI",
    group: "215-21",
    course: "2-KURS",
    gpa: "4.55",
    image: avatar,
  },
  {
    key: "13",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI MULTIMEDIA",
    group: "215-21",
    course: "2-KURS",
    gpa: "4.55",
    image: avatar,
  },
  {
    key: "14",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI KOMPYUTER INJINIRINGI",
    group: "215-21",
    course: "2-KURS",
    gpa: "4.55",
    image: avatar,
  },
  {
    key: "14",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI MULTIMEDIA",
    group: "215-21",
    course: "2-KURS",
    gpa: "4.55",
    image: avatar,
  },
  {
    key: "16",
    fullName: "ABDURASHIDOVA MUHLISA MUHAMMAD QIZI",
    faculty: "KOMPYUTER INJINIRINGI KOMPYUTER INJINIRINGI",
    group: "215-21",
    course: "2-KURS",
    gpa: "4.55",
    image: avatar,
  },
];
const info = {
  title: "1-kurslar bo’yicha reyting (o’rtacha GPA bali)",
  groups: [
    "210-guruh",
    "211-guruh",
    "212-guruh",
    "213-guruh",
    "214-guruh",
    "215-guruh",
    "216-guruh",
    "217-guruh",
    "218-guruh",
    "219-guruh",
    "220-guruh",
    "221-guruh",
    "222-guruh",
    "223-guruh",
    "224-guruh",
    "225-guruh",
    "226-guruh",
    "227-guruh",
    "228-guruh",
    "229-guruh",
  ],
  data: [3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9],
  colors: ["#eff6ff", "#e0f2fe", "#dbeafe", "#bae6fd", "#bfdbfe", "#93c5fd", "#7dd3fc", "#60a5fa", "#38bdf8", "#3b82f6", "#0ea5e9", "#2563eb", "#0284c7", "#0369a1", "#1d4ed8", "#075985", "#1e40af", "#1e3a8a", "#0c4a6e", "#1e3a8a"]
}
const info2 = {
  title: "2-kurslar bo’yicha reyting (o’rtacha GPA bali)",
  groups: [
    "210-guruh",
    "211-guruh",
    "212-guruh",
    "213-guruh",
    "214-guruh",
    "215-guruh",
    "216-guruh",
    "217-guruh",
    "218-guruh",
    "219-guruh",
    "220-guruh",
    "221-guruh",
    "222-guruh",
    "223-guruh",
    "224-guruh",
    "225-guruh",
    "226-guruh",
    "227-guruh",
    "228-guruh",
    "229-guruh",
  ],
  data: [3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9],
  colors: [
    "#f0fdf4", // Och yashil
    "#dcfce7",
    "#bbf7d0",
    "#86efac",
    "#4ade80",
    "#22c55e",
    "#16a34a",
    "#15803d",
    "#166534",
    "#14532d",
    "#10b981",
    "#0f9f69",
    "#0d8557",
    "#0b6b45",
    "#095334",
    "#073b23",
    "#052515",
    "#041a10",
    "#03120c",
    "#020a07"  // To'q yashil
  ]
}
const info3 = {
  title: "3-kurslar bo’yicha reyting (o’rtacha GPA bali)",
  groups: [
    "210-guruh",
    "211-guruh",
    "212-guruh",
    "213-guruh",
    "214-guruh",
    "215-guruh",
    "216-guruh",
    "217-guruh",
    "218-guruh",
    "219-guruh",
    "220-guruh",
    "221-guruh",
    "222-guruh",
    "223-guruh",
    "224-guruh",
    "225-guruh",
    "226-guruh",
    "227-guruh",
    "228-guruh",
    "229-guruh",
  ],
  data: [3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9],
  colors: [
    "#fef2f2", // Och qizil
    "#fee2e2",
    "#fecaca",
    "#fca5a5",
    "#f87171",
    "#ef4444",
    "#dc2626",
    "#b91c1c",
    "#991b1b",
    "#7f1d1d",
    "#fca5a5",
    "#f87171",
    "#ef4444",
    "#dc2626",
    "#b91c1c",
    "#991b1b",
    "#7f1d1d",
    "#6b1515",
    "#550f0f",
    "#3f0808"  // To'q qizil
  ]
}
const info4 = {
  title: "4-kurslar bo’yicha reyting (o’rtacha GPA bali)",
  groups: [
    "210-guruh",
    "211-guruh",
    "212-guruh",
    "213-guruh",
    "214-guruh",
    "215-guruh",
    "216-guruh",
    "217-guruh",
    "218-guruh",
    "219-guruh",
    "220-guruh",
    "221-guruh",
    "222-guruh",
    "223-guruh",
    "224-guruh",
    "225-guruh",
    "226-guruh",
    "227-guruh",
    "228-guruh",
    "229-guruh",
  ],
  data: [3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9],
  colors: [
    "#fefce8", // Och sariq
    "#fef9c3",
    "#fef08a",
    "#fde047",
    "#facc15",
    "#eab308",
    "#ca8a04",
    "#a16207",
    "#854d0e",
    "#713f12",
    "#fde68a",
    "#fcd34d",
    "#fbbf24",
    "#f59e0b",
    "#d97706",
    "#b45309",
    "#92400e",
    "#78350f",
    "#633112",
    "#4d250e"  // To'q sariq
  ]
}
const StudentsRatingList = () => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-2 gap-6 mb-12">
        <Gpa1 info={info} />
        <Gpa1 info={info2} />
      </div>
      <div className="grid grid-cols-2 gap-6 mb-12">
        <Gpa1 info={info3} />
        <Gpa1 info={info4} />
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false} // Agar pagination kerak bo'lsa, true qiling
        bordered
      />
    </div>
  );
};

export default StudentsRatingList;
