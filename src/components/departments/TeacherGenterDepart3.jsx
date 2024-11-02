import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

const data = [
  { name: "ERKAK", y: 16, z: 300, color: "#079ED6FF" },
  { name: "AYOL", y: 9, z: 300, color: "#BCE215FF" },
];

VariablePie(Highcharts);
const TeacherGenterDepart3 = () => {
  const options = {
    chart: {
      type: "variablepie",
      height: "40%"
    },
    title: {
      text: "PROFESSOR O’QITUVCHILARNING JINSI BO'YICHA",
      align: "left",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "Soni: <b>{point.y}</b><br/>" +
        "Foizi: <b>{point.percentage:.1f}%</b><br/>",
    },
    series: [
      {
        minPointSize: 10,
        innerSize: "20%",
        zMin: 0,
        name: "teachers",
        data: data,
      },
    ],
    plotOptions: {
      variablepie: {
        cursor: "pointer",
        borderRadius: "8%",
        borderWidth: 8,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
          style: {
            fontSize: "18px",
            fontWeight: "bold",
          },
          distance: 20,
        },
        showInLegend: true,
      },
    },
    legend: {
      layout: "vertical",
      align: "left",
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
      },
      symbolHeight: 12,
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
      {/* <div className="grid items-center justify-center grid-cols-3 gap-1">
        {data.map((item) => (
          <div key={item.name} className="flex items-center">
            <span
              style={{ backgroundColor: item.color }}
              className="block rounded-full w-[0.75rem] h-[0.75rem]"
            ></span>
            <span className="text-[1rem] font-[400] pl-[0.6rem] pr-[1rem]">
              {item.name}
            </span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default TeacherGenterDepart3;
