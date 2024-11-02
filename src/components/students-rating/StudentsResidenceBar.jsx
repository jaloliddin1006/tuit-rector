import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const StudentsResidenceBar = () => {
  const options = {
    chart: {
      type: "bar",
      height: "65%"
    },
    title: {
      text: "TALABALARNING TURAR JOYI BO’YICHA",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: [
        "TTJ",
        "Ijara",
        "Qarindoshinikida",
        "O'z uyida"
      ],
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Talabalar soni",
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    plotOptions: {
      bar: {
        borderRadius: '50%',
        dataLabels: {
          enabled: true,
        },
        pointWidth: 20, 
        pointPadding: 0.3,
        groupPadding: 0.1
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
      symbolHeight: 12,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "O'g'il bolalar",
        data: [620, 363, 40, 370],
        color: "#2CAFFEFF", 
      },
      {
        name: "Qizlar",
        data: [113, 25, 45, 53], 
        color: "#00E272FF",
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default StudentsResidenceBar;
