import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Gpa1 = ({info}) => {
  console.log(info);
  
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: info?.title,
      align: "left",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: info?.groups,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Talabalar Soni",
      },
      labels: {
        overflow: "justify",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        cursor: "pointer",
        borderRadius: "15%",
        pointPadding: 0.2,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
          style: {
            fontSize: "16px",
            // fontWeight: "bold",
          },
          distance: 60,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "GPA",
        data: info?.data,
        colorByPoint: true, // Enable different colors for each column
        colors: info?.colors,
        showInLegend: false,
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

export default Gpa1;
