import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";

// highcharts-more modulini yuklash
HighchartsMore(Highcharts);

const ManagementStaff = () => {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    title: {
      text: "RAHBAR XODIMLAR",
      align: 'start', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
      },
      symbolRadius: 0,
    },
    tooltip: {
      pointFormat: "Soni: <b>{point.y} ta</b>",
    },

    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "75%"],
        size: "110%",
      },
    },
    series: [
      {
        type: "pie",
        colorByPoint: true,
        innerSize: "50%",
        data: [
          {
            name: "Kafedralar",
            y: 31,
            color: "#2CAFFEFF",
          },
          {
            name: "Boshqarmalar",
            y: 6,
            color: "#6B8ABCFF",
          },
          {
            name: "Bo'limlar",
            y: 38,
            color: "#6B8ABCFF",
          },
          {
            name: "Markazlar",
            y: 7,
            color: "#6B8ABCFF",
          },
          {
            name: "Fakultetlar",
            y: 8,
            color: "#D568FBFF",
          },
          {
            name: "Prorektor",
            y: 4,
            color: "#6B8ABCFF",
          },
        ],
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />


      
    </div>
  );
};

export default ManagementStaff;
