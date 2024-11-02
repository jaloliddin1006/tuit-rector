import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BusyStudentsInfo = () => {
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: "TALABALARNING SERTIFIKATLARI HAQIDA  MA’LUMOT",
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
        pointPadding: 0,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Erkaklar",
        data: [55, 45, 79, 85], 
        color: '#A105C44D', 
      },
      {
        name: "Ayollar",
        data: [35, 25, 30, 35], 
        color: '#A105C4', 
      },
    ],
    legend: {
      align: "left",
      // layout: "vertical",
      // labelFormatter: function () {
      //   return this.name + " " + this.y;
      // },
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

export default BusyStudentsInfo;