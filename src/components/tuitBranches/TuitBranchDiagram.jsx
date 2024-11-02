import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

const data = [
  { name: "Temir daftar", y: 2459, z: 150, color: "#ff6b6b" },
  { name: "Ayollar daftari", y: 1485, z: 150, color: "#ffe66d" },
  { name: "Yoshlar daftari", y: 1254, z: 150, color: "#4dabf5" },
  { name: "Ijtimoiy himoya reestri", y: 2559, z: 150, color: "#38c172" },
  { name: "Nogitonligi bor", y: 1654, z: 150, color: "#9b59b6" },
  {
    name: "Chin yetim va mexribonlik uyi",
    y: 2459,
    z: 150,
    color: "#A29FB2FF",
  },
];

VariablePie(Highcharts);
const TuitBranchDiagram = () => {
  const options = {
    chart: {
      type: "variablepie",
      height: "80%"
    },
    title: {
      text: "TALABALARNING IJTIMOIY HOLATI",
      align: "start",
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
        innerSize: "40%",
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
          distance: 50,
        },
        showInLegend: true,
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
      },
      symbolHeight: 15,
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

export default TuitBranchDiagram;
