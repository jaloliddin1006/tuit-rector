import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const AllStudentsOfFaculties = () => {
  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "FAKULTETLAR KESIMIDA UMUMIY TALABALAR",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: [
        "Kompyuter injinering fakulteti",
        "Dasturiy injinering fakulteti",
        "Kiberxavfsizlik fakulteti",
        "AKT sohasida kasib ta'lim fakulteti",
        "Radio va mobil aloqa fakulteti",
        "Telekommunikatsiya texnologiyalari fakulteti",
        "Televizon texnologiyalar fakulteti",
        "AKT sohasida iqtisodiyot va boshqaruv fakulteti",
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
        dataLabels: {
          enabled: true,
        },
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
        data: [1537, 920,  886, 280, 550, 630, 412, 500],
        color: "#007bff", 
      },
      {
        name: "Ayollar",
        data: [216, 87,  195, 195, 150, 347, 208, 300], 
        color: "#ffca28",
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default AllStudentsOfFaculties;
