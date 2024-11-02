import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const CertificateOfTeachers = () => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "PROFESSOR O’QITUVCHILARNING SERTIFIKATLARI",
      align: "left",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: [
        "INFORMATIKA ASOSLARI",
        "RAQAMLI TEXNOLOGIYALAR KONVERGENSIYASI",
        "KOMPYUTER TIZIMLARI",
        "MULTIMEDIA TEXNOLOGIYALARI",
        "SUN’IY INTELEKT",
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
    },
    tooltip: {
      headerFormat:
        '<span style="font-size:14px;margin-bottom:5px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>&nbsp; {point.y} ta</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Xorijiy til sertifikatlari",
        data: [75, 65, 70, 85, 12],
        color: "#A105C44D",
      },
      {
        name: "IT sertifikatlari",
        data: [65, 85, 60, 75, 45],
        color: "#A105C4",
      },
    ],
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
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default CertificateOfTeachers;
