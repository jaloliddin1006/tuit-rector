import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const StudentsResidenceRating = () => {
  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "TALABALAR TURAR JOYLARI BO’YICHA",
      align: "start"
    },
    xAxis: {
      categories: [
        "TTJ da",
        "Ijarada",
        "Yaqin qarindoshinikida",
        "Shaxsiy uyida",
      ],
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Students",
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: " ",
        data: [530, 915, 785, 345],
        colorByPoint: true, // Colors each bar individually
        colors: ["#9b59b6", "#f1c40f", "#3498db", "#2ecc71"], // Custom colors for bars
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg flex">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default StudentsResidenceRating;
