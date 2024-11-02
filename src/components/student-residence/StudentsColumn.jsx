import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const StudentsColumn = () => {
  const options = {
    chart: {
      type: 'column',
      height: "500px"
    },
    title: {
      text: "TALABALARNING TURAR JOYI BO’YICHA",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: [
        'TTJ',
        'Ijara',
        'Qarindoshinikida',
        'Yaqin qarindoshinikida',
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
    plotOptions: {
      column: {
        borderRadius: '20%',
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "16px",
            fontWeight: "bold",
          },
          distance: 60,
        },
        pointPadding: 0.14,
        borderWidth: 10,
      },
    },
    series: [
      {
        name: "O'g'il bolalar soni",
        data: [1954, 956, 1600, 1034], 
        color: '#A105C4', 
        
      },
      {
        name: "Qiz bolalar soni",
        data: [467, 423, 779, 245], 
        color: '#FFD25F', 
      },
    ],
  };

  return (
    <div className='border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default StudentsColumn;
