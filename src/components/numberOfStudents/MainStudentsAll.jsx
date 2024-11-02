import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const MainStudentsAll = () => {
  const options = {
    chart: {
      type: "column",
      height: "520px"
    },
    title: {
      text: "TA'LIM DARAJASI BO'YICHA TAQSIMOTI",
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
        text: "Talabalar soni",
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
          color: (Highcharts.theme && Highcharts.theme.textColor) || "#666",
        },
      },
    },
    legend: {
      align: "left",
      verticalAlign: "bottom",
      floating: false,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "white",
      // borderColor: "#CCC",
      // borderWidth: 1,
      shadow: false,
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
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
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
        pointPadding: 0,
        borderWidth: 0,
        series: {
          borderRadius: 10,
        },
      },
    },

    series: [
      {
        name: "Kunduzgi ta'lim",
        data: [2226, 2311, 1527, 1539, 0],
        color: "#85C1E9",
        showInLegend: true,
      },
      {
        name: "Sirtqi",
        data: [1019, 1596, 984, 807, 626],
        color: "#F7DC6F",
        showInLegend: true,
      },
      {
        name: "Masofaviy ta'lim",
        data: [654, 358, 321, 0, 0],
        color: "#82E0AA",
        showInLegend: true,
      },
      {
        name: "Magistratura",
        data: [209, 172, 0, 0, 0],
        color: "#D7BDE2",
        showInLegend: true,
      },
      {
        name: "Ikkinchi mutaxassislik",
        data: [0, 0, 158, 102, 67],
        color: "#FF6B6BFF",
        showInLegend: true,
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default MainStudentsAll;
