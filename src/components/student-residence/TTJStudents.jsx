import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const TTJStudents = () => {
  const options = {
    chart: {
      type: "bar",
      // height: "600px",
    },
    title: {
      text: "TALABALARNING TURAR JOYI BO’YICHA",
      // align: "left",
      // style: {
      //   fontSize: "18px",
      //   fontWeight: "bold",
      // },
    },
    xAxis: {
      categories: ["TTJ 1", "TTJ 2", "TTJ 3", "TTJ 4"],
      // title: {
      //   text: null,
      // },
    },
    legend: {
      reversed: true
  },
    yAxis: {
      min: 0,
      title: {
        text: "Talabalar soni",
      },
    },
    plotOptions: {
      // bar: {
      //   borderRadius: "50%",
      //   dataLabels: {
      //     enabled: true,
      //     format: "{point.y}",
      //     style: {
      //       fontSize: "16px",
      //       fontWeight: "bold",
      //     },
      //   },
      //   cursor: "pointer",
      //   showInLegend: true,
      //   pointWidth: 20,
      //   pointPadding: 0.2,
      //   groupPadding: 0.05,
      // },
      series: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
      },
    },

    // legend: {
    //   layout: "horizontal",
    //   align: "center",
    //   verticalAlign: "bottom",
    //   backgroundColor: "#FFFFFF",
    //   itemStyle: {
    //     fontWeight: "bold",
    //     fontSize: "16px",
    //   },
    //   symbolHeight: 12,
    // },

    series: [
      {
        name: "Bo'sh joy",
        data: [33, 7, 63, 76],
        color: "#CECFD1FF",
      },
      {
        name: "Qizlar",
        data: [467, 0, 0, 0],
        color: "#F87171",
      },
      {
        name: "O'g'il bolalar",
        data: [600, 493, 537, 324],
        color: "#2CAFFEFF",
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TTJStudents;
