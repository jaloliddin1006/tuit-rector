import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const MainStudentsGrand = () => {
  const options = {
    chart: {
      type: "column",
      height: "520px"
    },
    title: {
      text: "TO’LOV SHAKLI TAQSIMOTI",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: ["1-kurs", "2-kurs", "3-kurs", "4-kurs", "5-kurs"],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
    },
    tooltip: {
      headerFormat:
        '<span style="font-size:14px;margin-bottom:5px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>&nbsp; {point.y} ta</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Grant",
        data: [1043, 998, 665, 585, 18],
        color: "#FF6B6BFF",
      },
      {
        name: "Kontrakt",
        data: [3065, 3439, 2325, 1863, 675],
        color: "rgba(139, 92, 246, 1)",
      },
      
    ],
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
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default MainStudentsGrand;
