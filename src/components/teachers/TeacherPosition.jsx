import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import VariablePie from "highcharts/modules/variable-pie";

const data = [
  { name: "Professor", y: 42, z: 150, color: "#ff6b6b" },
  { name: "Dotsent", y: 138, z: 150, color: "#ffe66d" },
  { name: "Katta o‘qituvchilar", y: 126, z: 150, color: "#4dabf5" },
  { name: "Assistent o'qituvchilar", y: 109, z: 150, color: "#38c172" },
  { name: "Stajyor o‘qituvchilar", y: 26, z: 150, color: "#9b59b6" },
];
// Variable-pie modulini Highcharts-ga yuklaymiz
// VariablePie(Highcharts);
const TeacherPosition = () => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "PROFESSOR-O’QITUVCHILARNING LAVOZIMI BO’YICHA: 441",
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
      align: "right",
      layout: "vertical",
      labelFormatter: function () {
        return this.name + " " + this.y; // Custom legend format
      },
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "600",
        fontSize: "15px",
      },
      symbolHeight: 12, // Ikonkalarni moslashtirish
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      {/* <div className="flex items-center justify-between"> */}
      <HighchartsReact highcharts={Highcharts} options={options} />
      {/* <div className="info flex flex-col items-start justify-start gap-3">
          {data.map((item) => (
            <div key={item.name} className="info__row flex items-center">
              <span
                style={{ backgroundColor: item.color }}
                className="block rounded-full w-[0.75rem] h-[0.75rem]"
              ></span>
              <span className="min-w-[12rem] text-[1rem] font-[400] pl-[0.6rem] pr-[1rem]">
                {item.name}
              </span>
              <span className="block rounded-[8px] border-[1px] border-solid border-[#FEEBD6] bg-[#FFF6EB] py-1 px-1.5  text-[#F98600]">
                {item.y}
              </span>
            </div>
          ))}
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default TeacherPosition;
