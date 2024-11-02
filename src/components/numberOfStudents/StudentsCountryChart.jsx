import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const StudentsCountryChart = () => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "XORIJIY TALABALAR",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    plotOptions: {
      pie: {
        innerSize: "60%", 
        dataLabels: {
          enabled: true,
          distance: -30, 
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Talabalar soni",
        data: [
          {
            name: "Xorijiy talabalar",
            y: 408, // Replace with actual value
            color: "#007bff", // Blue color for foreign students
          },
          {
            name: "Mahalliy talabalar",
            y: 7195, // Replace with actual value
            color: "#ffca28", // Yellow color for Uzbekistan students
          },
        ],
      },
    ],
    legend: {
      align: "left",
      verticalAlign: "bottom",
      layout: "vertical",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
      },
      labelFormatter: function () {
        return this.name + " " + this.y; // Custom legend format
      },
    },
    tooltip: {
      pointFormat: "Talabalar foizi: <b>{point.percentage:.1f}%</b>", //{series.name}
    },
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default StudentsCountryChart;
