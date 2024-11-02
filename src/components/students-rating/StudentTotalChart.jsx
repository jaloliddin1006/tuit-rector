import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const data = [
  {
    name: "Grant",
    y: 641,
    color: "#cce6ff", // Light blue color
  },
  {
    name: "Shartnoma",
    y: 1112,
    color: "#007bff", // Darker blue color
  },
];
const StudentTotalChart = () => {
  const options = {
    chart: {
      type: "pie",
      height: "400px"
    },
    title: {
      text: "JAMI TALABALAR SONI: <b>1753</b>",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        innerSize: "60%",
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "{point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Foizi",
        colorByPoint: true,
        data: data,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="flex flex-col border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className="info flex flex-col text-justify gap-3 border-[1px] border-solid border-[rgba(232, 232, 232, 1)] rounded-[10.33px] p-[15px]">
        {data.map((item) => (
          <div
            key={item.name}
            className="info__row flex items-center justify-between"
          >
            <div className="flex items-center gap-1">
              <span
                style={{ backgroundColor: item.color }}
                className="block rounded-full w-[0.75rem] h-[0.75rem]"
              ></span>
              <span className="min-w-[12rem] text-base font-bold pl-[0.6rem] pr-[1rem]">
                {item.name}
              </span>
            </div>
            <span className="block text-base font-bold text-[rgba(115, 115, 115, 1)]">
              {item.y}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentTotalChart;
