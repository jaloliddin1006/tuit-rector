import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DonutCharts = () => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "FAKULTET PROFESSOR-O’QITUVCHILARINING ILMIY SALOHIYATI",
      align: "left", // Align the title to the left
      // style: {
      //   fontSize: '16px',
      //   fontWeight: 'bold',
      // },
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
  },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        borderRadius: 8,
        dataLabels: [
          {
            enabled: true,
            distance: 20,
            format: "{point.name}",
          },
          {
            enabled: true,
            distance: -15,
            format: "{point.percentage:.0f}%",
            style: {
              fontSize: "0.9em",
            },
          },
        ],
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Registrations",
        colorByPoint: true,
        innerSize: "75%",
        data: [
          {
            name: "EV",
            y: 23.9,
          },
          {
            name: "Hybrids",
            y: 12.6,
          },
          {
            name: "Diesel",
            y: 37.0,
          },
          {
            name: "Petrol",
            y: 26.4,
          },
        ],
      },
    ],
    legend: {
      enabled: false
  },
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default DonutCharts;
