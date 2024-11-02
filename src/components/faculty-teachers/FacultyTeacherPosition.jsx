import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const FacultyTeacherPosition = () => {
  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "PROFESSOR O’QITUVCHILARNING LAVOZIMI BO’YICHA",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: [
        "Professor",
        "Dotsent",
        "Katta o’qituvchilar",
        "Asistent o’qituvchilar",
        "Stajyor o’qituvchilar"
      ],
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Professor o'qituvchilar soni",
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
        pointWidth: 12, 
        pointPadding: 0.1,
        groupPadding: 0.2
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
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Erkaklar",
        data: [120, 100, 90, 85, 65],
        color: "#2CAFFEFF", 
      },
      {
        name: "Ayollar",
        data: [80, 75, 60, 45, 40], 
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

export default FacultyTeacherPosition;
