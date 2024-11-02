import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const TeacherColumnDepart4 = () => {
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: "PROFESSOR O’QITUVCHILARNING LAVOZIMI BO'YICHA",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: [
        "Professor",
        "Dotsent",
        "Katta o’qituvchilar",
        "Asistent o’qituvchilar",
        "Stajyor o’qituvchilar"
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
      },
    },
    tooltip: {
      headerFormat:
        '<span style="font-size:14px;margin-bottom:5px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>&nbsp; {point.y} ta</b></td></tr>',
      footerFormat: '</table>',
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
        name: "Erkaklar",
        data: [1, 5, 1, 1, 1], 
        color: '#A105C44D', 
      },
      {
        name: "Ayollar",
        data: [1, 1, 1, 1, 0], 
        color: '#A105C4', 
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
    <div className='border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TeacherColumnDepart4;
