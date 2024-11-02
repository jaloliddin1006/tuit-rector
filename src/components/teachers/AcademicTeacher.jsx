import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const AcademicTeacher = () => {
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: "PROFESSOR-O'QITUVCHILARNING LAVOZIMI BO'YICHA",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: [
        'Professor',
        'Dotsent',
        "Katta o‘qituvchilar",
        "Assistent o‘qituvchilar",
        "Stajyor o‘qituvchilar",
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Ilmiy unvonlar soni',
      },
    },
    tooltip: {
      headerFormat:
        '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        borderRadius: "20%",
        pointPadding: 0.1,
        borderWidth: 0,
        dataLabels: {
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
        name: 'Ayol',
        data: [75, 65, 70, 85, 60], // Example data for women in each category
        color: '#00A651', // Green color
      },
      {
        name: 'Erkak',
        data: [65, 85, 60, 75, 90], // Example data for men in each category
        color: '#F8BC35', // Yellow/Orange color
      },
    ],
  };

  return (
    <div className='border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default AcademicTeacher;
