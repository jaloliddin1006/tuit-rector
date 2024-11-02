import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const SocialStatusBar = () => {
  const options = {
    chart: {
      type: "bar",
      height: 650,
    },
    title: {
      text: "NUKUS FILIALI IJTIMOIY HOLATI BO’YICHA",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: [
        "TEMIR DAFTAR",
        "IJTIMOIY HIMOYA REESTRI",
        "AYOLLAR DAFTARI",
        "YOSHLAR DAFTARI",
        "CHIN YETIM /MEHRIBONLIK UYI",
        "EHTIYOJI BOR"
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
        pointWidth: 24, 
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
        name: "O'g'il bolalar",
        data: [120, 100, 90, 85, 50, 15],
        color: "#088BDAFF",
      },
      {
        name: "Qizlar",
        data: [80, 75, 60, 45, 50, 4], 
        color: "#50D3FFFF", 
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default SocialStatusBar;
