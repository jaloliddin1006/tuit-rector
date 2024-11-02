import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const TuitBranchChart = () => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "FILLIALLARI BO’YICHA",
      align: "start",
    },
    xAxis: {
      categories: ["TATUUF", "TATUFF", "TATUNF", "TATUSF", "TATUNuF", "TATUQF"],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        stacking: "normal",
        borderRadius: '8%',
        dataLabels: {
          enabled: true,
        },
        pointPadding: 0,
        borderWidth: 0,
      },
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      floating: false,
      backgroundColor: "#FFFFFF",
      shadow: false,
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
      },
    },
    series: [
      {
        name: "O'g'il bolalar",
        data: [3800, 2050, 3200, 3700, 2400, 2000], // Example data for women in each category
        color: "#0085FF", // Green color
        showInLegend: true,
      },
      {
        name: "Qizlar",
        data: [5000, 3500, 4100, 4600, 3400, 3500], // Example data for men in each category
        color: "#D6EBFF", // Yellow/Orange color
        showInLegend: true,
      },
    ],
  };

  return (
    <div className="mt-16 border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TuitBranchChart;
