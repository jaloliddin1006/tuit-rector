import { Button } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import "./students-list.css";
const StudentsListCard = ({ item }) => {
  const { name, lang, img } = item;
  return (
    <div className="py-6 px-8 border-[rgba(30, 30, 30, 0.1)] border-[1px] rounded-[11px] text-center">
      <img className="mx-auto w-[183px] h-[183px] rounded-full object-cover mb-[20px]" src={img} />
      <h3 className="text-[rgba(30, 30, 30, 0.8)] text-2xl font-semibold mb-[10px] leading-[29.05px]">{name}</h3>
      <p className="mb-[30px] text-2xl font-medium text-[#2469FF]">
        {lang}
      </p>
      <Button type="primary" icon={<PhoneOutlined />} size={"large"}>
        +998 123 45 67
      </Button>
    </div>
  );
};

export default StudentsListCard;
