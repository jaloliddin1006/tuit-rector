import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

const data = [
  { name: "O'g'il bolalar", y: 1537, z: 150, color: "rgba(248, 113, 113, 1)" },
  { name: "Qiz bolalar", y: 216, z: 150, color: "rgba(255, 207, 84, 1)" },
];
// Variable-pie modulini Highcharts-ga yuklaymiz
VariablePie(Highcharts);
const BoyAndGirlRating = () => {
  const options = {
    chart: {
      type: "variablepie",
      height: "400px"
    },
    title: {
      text: "TALABALAR JINSI BO’YICHA",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "Soni: <b>{point.y} ta</b><br/>",
    },
    series: [
      {
        minPointSize: 10,
        innerSize: "40%",
        zMin: 0,
        name: "teachers",
        data: data,
      },
    ],
    plotOptions: {
      variablepie: {
        dataLabels: {
          enabled: true,
          format: "{y}",
        },
        borderWidth: 10,
        cursor: 'pointer',
        innerSize: '60%',
        borderColor: '#ffffff'
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
      },
      symbolHeight: 12, // Ikonkalarni moslashtirish
    },
  };

  return (
    <div className="flex flex-col border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
      {/* <div className="info flex items-center justify-between gap-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center">
            <div className="flex items-center gap-1">
            <span
              style={{ backgroundColor: item.color }}
              className="block rounded-full w-[0.75rem] h-[0.75rem]"
            ></span>
            <span className="min-w-[12rem] text-base font-bold pl-[0.6rem] pr-[1rem]">
              {item.name}
            </span>
            </div>
            <span className="block text-base font-bold text-[rgba(10, 10, 10, 1)]">
              {item.y}
            </span>
          </div>
        ))}
      </div> */}
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

export default BoyAndGirlRating;
