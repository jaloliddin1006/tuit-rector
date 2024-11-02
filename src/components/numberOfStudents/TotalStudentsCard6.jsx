import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

// Initialize the module
VariablePie(Highcharts);

const TotalStudentsCard6 = () => {
  const options = {
    chart: {
      type: "variablepie",
      height: 350,
      width: 350,
    },
    title: {
      text: "",
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      variablepie: {
        dataLabels: {
          enabled: false,
        },
        borderWidth: 15,
        borderColor: "white",
      },
    },
    series: [
      {
        minPointSize: 5,
        innerSize: "45%",
        zMin: 0,
        data: [
          {
            name: "Slice 1",
            y: 10,
            z: 50,
            color: "#00BA34",
          },
          {
            name: "Slice 2",
            y: 3.5,
            z: 110,
            color: "#EF4444",
          },
          {
            name: "Slice 3",
            y: 5,
            z: 50,
            color: "#8B5CF6",
          },
          {
            name: "Slice 4",
            y: 10,
            z: 50,
            color: "#F98600",
          },
        ],
      },
    ],
  };

  return (
    <div className="students-card min-w-[38%] rounded-[8px] border-[1px] border-solid border-[#1E1E1E1A] p-[2.75rem_1.5rem_3.25rem_1.5rem] inter shadow-[2px_4px_10px_0px_#1E1E1E14]">
      <p className="text-lg font-bold uppercase">UMUMIY TALABALAR SONI</p>
      <div className="flex items-center justify-between">
        <HighchartsReact highcharts={Highcharts} options={options} />
        <div className="info flex flex-col items-center justify-center gap-3">
          <div className="info__row flex items-center">
            <span className="block rounded-full w-[0.75rem] h-[0.75rem] bg-[#F98600]"></span>
            <span className="min-w-[12rem] text-[1rem] font-[400] pl-[0.6rem] pr-[1rem]">
              Kunduzgi ta&apos;lim
            </span>
            <span className="block rounded-[8px] border-[1px] border-solid border-[#FEEBD6] bg-[#FFF6EB] py-1 px-1.5  text-[#F98600]">
              7603
            </span>
          </div>
          <div className="info__row flex items-center">
            <span className="block rounded-full w-[0.75rem] h-[0.75rem] bg-[#00BA34]"></span>
            <span className="min-w-[12rem] text-[1rem] font-[400] pl-[0.6rem] pr-[1rem]">
              Sirtqi ta&apos;lim
            </span>
            <span className="block rounded-[8px] border-[1px] border-solid border-[#D6F4DE] bg-[#EBFAEF] py-1 px-1.5  text-[#00BA34]">
              5032
            </span>
          </div>
          <div className="info__row flex items-center">
            <span className="block rounded-full w-[0.75rem] h-[0.75rem] bg-[#8B5CF6]"></span>
            <span className="min-w-[12rem] text-[1rem] font-[400] pl-[0.6rem] pr-[1rem]">
              Magistratura
            </span>
            <span className="block rounded-[8px] border-[1px] border-solid border-[#ECE5FD] bg-[#F6F2FF] py-1 px-1.5  text-[#8B5CF6]">
              381
            </span>
          </div>
          <div className="info__row flex items-center">
            <span className="block rounded-full w-[0.75rem] h-[0.75rem] bg-[#EF4444]"></span>
            <span className="min-w-[12rem] text-[1rem] font-[400] pl-[0.6rem] pr-[1rem]">
            Masofaviy ta'lim
            </span>
            <span className="block rounded-[8px] border-[1px] border-solid border-[#FCE1E1] bg-[#FEF0F0] py-1 px-1.5  text-[#EF4444]">
              327
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalStudentsCard6;
