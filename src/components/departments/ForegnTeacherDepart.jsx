import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

const data = [
  { name: "INFORMATIKA ASOSLARI KAFEDRASI", y: 1, z: 300, color: "#FF33A5FF" },
  { name: "RAQAMLI TEXNLOGIYALAR KONVERGENSIYASI", y: 1, z: 300, color: "#BCE215FF" },
  { name: "KOMPYUTER TIZIMLARI KAFEDRASI", y: 2, z: 300, color: "#079ED6FF" },
  {
    name: "MULTIMEDIA TEXNOLOGIYALARI KAFEDRASI",
    y: 1,
    z: 300,
    color: "#8DA399FF",
  },
  { name: "SUN'IY INTELLEKT", y: 2, z: 300, color: "#FF8C33FF" },
];

VariablePie(Highcharts);
const ForegnTeacherDepart = () => {
  const options = {
    chart: {
      type: "variablepie",
      height: "45%"
    },
    title: {
      text: "KAFEDRALAR BO’YICHA XORIJIY PROFESSOR O’QITUVCHILAR SONI",
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
      align: "right",
      verticalAlign: "middle",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "14px",
      },
      symbolHeight: 12,
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ForegnTeacherDepart;
