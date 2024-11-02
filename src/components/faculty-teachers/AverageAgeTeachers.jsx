import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const AverageAgeTeachers = () => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "KAFEDRALAR BO'YICHA TAQSIMOTI",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: ["INFORMATIKA ASOSLARI", "RAQAMLI TEXNOLOGIYALAR KONVERGENSIYASI", "KOMPYUTER TIZIMLARI", "MULTIMEDIA TEXNOLOGIYALARI", "SUN’IY INTELEKT"],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Soni bo'yicha",
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
        name: "Erkaklar",
        data: [5, 12, 10, 8, 9],
        // colorByPoint: true,
        // colors: ["#85C1E9", "#F7DC6F", "#82E0AA", "#D7BDE2"],
        color: "#85C1E9",
        showInLegend: true,
      },
      {
        name: "Ayollar",
        data: [10, 15, 20, 18, 14],
        color: "#F7DC6F",
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

export default AverageAgeTeachers;
