import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BusyStudentsInCompany = () => {

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "ISH BILAN BAND BO'LGAN TALABALAR",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: [
        "IT Kompaniyalarda",
        "Freelancer",
        "Akt O'qituvchisi",
        "O'quv Markazlarda",
        "Davlat Tashkilotlarida",
      ],
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
        '<td style="padding:0"><b>{point.y} ta</b></td></tr>',
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
        name: "Ish joylari",
        data: [15, 21, 10, 26, 18],
        colorByPoint: true, // Enable different colors for each column
        colors: ["#85C1E9", "#F7DC6F", "#82E0AA", "#D7BDE2", "#F5B7B1"],
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

export default BusyStudentsInCompany;
