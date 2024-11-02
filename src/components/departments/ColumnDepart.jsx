import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ColumnDepart = () => {

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "PROFFESSOR O’QITUVCHILARNING ILMIY SALOHIYATI",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: [
        "INFORMATIKA ASOSLARI",
        "RAQAMLI TEXNOLOGIYALAR KONVERGENSIYASI",
        "KOMPYUTER TIZIMLARI",
        "MULTIMEDIA TEXNOLOGIYALARI",
        "SUN’IY INTELEKT"

      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "Foiz bo'yicha",
      },
      labels: {
        format: "{value}%", 
      },
      // labels: {
      //   overflow: "justify",
      // },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding: 3px"><b>{point.y:.1f}%</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        cursor: "pointer",
        borderRadius: "15%",
        pointPadding: 0.1,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          // format: "{point.y}",
          format: "{point.y:.1f}%",
          style: {
            fontSize: "16px",
            // fontWeight: "bold",
          },
          distance: 60,
        },
        // stacking: "percent",
        showInLegend: true,
      },
    },
    // series: [
    //   {
    //     name: "Foizi",
    //     data: [33, 37, 54, 56, 59],
    //     colorByPoint: true, // Enable different colors for each column
    //     colors: ["#85C1E9", "#F7DC6F", "#82E0AA", "#D7BDE2", "#F5B7B1"],
    //     showInLegend: false,
    //   },
    // ],
    series: [
      {
        name: "Asosiy",
        data: [33, 33, 40, 51, 53], 
        color: '#00E272FF', 
      },
      {
        name: "O'rindosh",
        data: [17, 30, 31, 60, 41], 
        color: '#BCE215FF', 
      },
    ],
     legend: {
      layout: "horizontal",
      align: "center",
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
    </div>
  );
};

export default ColumnDepart;
