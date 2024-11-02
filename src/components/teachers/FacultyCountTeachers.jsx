import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import VariablePie from "highcharts/modules/variable-pie";
const data = [
  { name: "Kompyuter injiniring", y: 86, z: 150, color: "#ff6b6b" },
  { name: "Dasturiy injiniring", y: 65, z: 150, color: "#ffe66d" },
  { name: "Kiberxavfsizlik", y: 34, z: 150, color: "#4dabf5" },
  { name: "Telekommunikatsiya texnologiyalari", y: 25, z: 150, color: "#38c172" },
  { name: "Televizion texnologiyalar", y: 45, z: 150, color: "#9b59b6" },
  { name: "Radio va mobil aloqa", y: 39, z: 150, color: "#92A8D1" },
  { name: "AKT sohasida iqtisodiyot va menejment", y: 64, z: 150, color: "#955251" },
  { name: "AKT sohasida kasb ta'limi", y: 46, z: 150, color: "#F7CAC9" },
];
// Variable-pie modulini Highcharts-ga yuklaymiz
// VariablePie(Highcharts);
const FacultyCountTeachers = () => {
  const options = {
    chart: {
      type: "pie",
      height: '500px'
    },
    title: {
      text: "FAKULTETLAR BO'YICHA PROFESSOR-O'QITUVCHILAR SONI",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    // tooltip: {
    //   headerFormat: "",
    //   pointFormat:
    //     '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
    //     "Soni: <b>{point.y}</b><br/>" +
    //     "Foizda: <b>{point.percentage:.1f}%</b><br/>",
    // },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.0f}%</b>",
    },
    // series: [
    //   {
    //     minPointSize: 10,
    //     innerSize: "40%",
    //     zMin: 0,
    //     name: "teachers",
    //     data: data,
    //   },
    // ],
    series: [
      {
        name: "Foizda",
        colorByPoint: true,
        innerSize: "55%",
        data: data
      },
    ],
    // plotOptions: {
    //   variablepie: {
    //     borderRadius: "15%",
    //     borderWidth: 10,
    //     dataLabels: {
    //       enabled: true,
    //       format: "{y}",
    //       distance: 20, 
    //       style: {
    //         fontWeight: "bold",
    //         color: "#333",
    //         fontSize: "16px",
    //       },
    //     },
    //     showInLegend: true,
    //   },
    // },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        borderRadius: 8,
        dataLabels: [
          {
            enabled: true,
            distance: 20,
            format: "{point.name}",
          },
          {
            enabled: true,
            distance: -30,
            format: "{point.percentage:.0f}%",
            style: {
              fontSize: "0.9em",
            },
          },
        ],
        showInLegend: true,
      },
    },
    legend: {
      // align: "right",
      // layout: "vertical",
      labelFormatter: function () {
        return this.name + " " + this.y; // Custom legend format
      },
      // verticalAlign: "bottom",
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "400",
        fontSize: "12px",
      },
      symbolHeight: 12, // Ikonkalarni moslashtirish
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default FacultyCountTeachers;
