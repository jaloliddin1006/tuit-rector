import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const CourseOfStudents = () => {
  const options = {
    chart: {
      type: 'column',
      height: "60%"
    },
    title: {
      text: "KURSLAR BO’YICHA TALABALAR SONI",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: [
        '1-kurs',
        '2-kurs',
        '3-kurs',
        '4-kurs',
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
        cursor: "pointer",
        borderRadius: "15%",
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
          style: {
            fontSize: "16px",
            // fontWeight: "bold",
          },
          distance: 60,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "O'g'il bolalar soni",
        data: [529, 308, 308, 392], 
        color: 'rgba(0, 133, 255, 1)', 
      },
      {
        name: "Qiz bolalar soni",
        data: [65,63,42,46], 
        color: 'rgba(251, 191, 36, 1)', 
      },
    ],
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
  };

  return (
    <div className='border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default CourseOfStudents;
