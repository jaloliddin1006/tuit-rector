import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BusyStudentsChart = () => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "TALABALARNING BANDLIGI HAQIDA  MA’LUMOT",
      align: 'left',
    },
    xAxis: {
      categories: ["1-KURS", "2-KURS", "3-KURS", "4-KURS"],
      title: {
        text: "Kurslar",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Talabalar soni",
      },
    },
    series: [
      {
        name: "Talabalar",
        data: [13, 43, 97, 119],
        color: "#A569FF",
        showInLegend: false,
      },
    ],
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BusyStudentsChart;
