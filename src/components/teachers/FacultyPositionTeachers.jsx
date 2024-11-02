import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const FacultyPositionTeachers = () => {
  const options = {
    chart: {
      type: "column",
      height: "500px",
    },
    title: {
      text: "FAKULTET PROFESSOR-O'QITUVCHILARNING ILMIY SALOHIYATI",
      align: "left",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: [
        "Kompyuter injiniring",
        "Dasturiy injiniring",
        "Kiberxavfsizlik",
        "Telekommunikatsiya texnologiyalari",
        "Radio va mobil aloqa",
        "Televizion texnologiyalar",
        "AKT sohasida kasb ta'limi",
        "AKT sohasida iqtisodiyot va menejment",
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Ilmiy salohiyati (foizlarda)",
      },
      labels: {
        format: "{value}%",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding: 3px"><b>{point.y:.1f}%</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        borderRadius: "20%",
        pointPadding: 0.1,
        borderWidth: 0,
        dataLabels: {
          format: "{point.y:.1f}%",
          enabled: true,
          style: {
            fontSize: "16px",
            fontWeight: "bold",
          },
          distance: 60,
        },
      },
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
      },
      symbolHeight: 12,
    },
    series: [
      {
        name: "Salohiyati",
        data: [45.87, 50, 34, 53, 40, 42, 47, 27],
        colorByPoint: true, // Enable different colors for each column
        colors: [
          "#FF6F61 ",
          "#F7DC6F",
          "#88B04B",
          "#F7CAC9",
          "#92A8D1",
          "#955251",
          "#B565A7",
          "#009B77",
        ],
        showInLegend: false,
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default FacultyPositionTeachers;
