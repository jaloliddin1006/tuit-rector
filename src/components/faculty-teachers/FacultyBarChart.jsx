import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

const data = [
  { name: "Professor", y: 10, z: 150, color: "#ff6b6b" },
  { name: "Dotsent", y: 34, z: 150, color: "#ffe66d" },
  { name: "Katta o'qituvchi", y: 22, z: 150, color: "#4dabf5" },
  { name: "Asistent o‘qituvchilar", y: 22, z: 150, color: "#38c172" },
  { name: "Stajyor o‘qituvchilar", y: 11, z: 150, color: "#9b59b6" },
];

VariablePie(Highcharts);
const FacultyBarChart = () => {
  const options = {
    chart: {
      type: "variablepie",
    },
    title: {
      text: "PROFESSOR-O’QITUVCHILAR LAVOZIMI BO’YICHA",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "Soni: <b>{point.y}</b><br/>" +
        "Foizda: <b>{point.percentage:.1f}%</b><br/>",
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
        dataLabels: {
          enabled: true,
          format: "{y}",
          distance: 40,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        showInLegend: true,
      },
    },
    legend: {
      align: "right",
      layout: "vertical",
      labelFormatter: function () {
        return this.name + " " + this.y;
      },
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "500",
        fontSize: "16px",
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

export default FacultyBarChart;
