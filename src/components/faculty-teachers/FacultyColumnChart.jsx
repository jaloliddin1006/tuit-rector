import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const FacultyColumnChart = () => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "PROFESSOR O'QITUVCHILAR KONTENGENTI",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: ["INFORMATIKA ASOSLARI", "RAQAMLI TEXNOLOGIYALAR KONVERGENSIYASI", "KOMPYUTER TIZIMLARI", "MULTIMEDIA TEXNOLOGIYALARI", "SUN’IY INTELEKT"],
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
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
      },
      shadow: false,
    },
    tooltip: {
      headerFormat: "<b>{point.x}</b><br/>",
      pointFormat: "{series.name}: {point.y}<br/>Umumiy: {point.stackTotal}",
    },
    plotOptions: {
      column: {
        stacking: "normal",
        // dataLabels: {
        //   enabled: true,
        // },
        series: {
          borderRadius: 10,
        },
      },
    },
    series: [
      {
        name: "Asosiy",
        data: [21, 19, 24, 9, 17],
        color: "#2469FF",
        zIndex: 1
      },
      {
        name: "O'rindosh",
        data: [5, 11, 14, 21, 9],
        color: "#27CD02",
        zIndex: 0
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default FacultyColumnChart;
