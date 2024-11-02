import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const FacultyPieChart = () => {
  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'PROFESSOR-O’QITUVCHILARINING ILMIY SALOHIYATI',
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    tooltip: {
      pointFormat: 'Foizda: <b>{point.percentage:.1f}%</b></br>Soni: <b>{point.y} ta</b>',
    },
    plotOptions: {
      pie: {
        innerSize: '60%', 
        borderWidth: 5,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.0f}%',
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
          },
          distance: -30,
        },
        showInLegend: true, 
      },
    },
    series: [
      {
        name: "O'qituvchilar",
        colorByPoint: true,
        data: [
          {
            name: 'ILMIY SALOHIYATGA EGA BO’LGAN',
            y: 30, 
            color: 'rgba(24, 213, 77, 1)',
          },
          {
            name: 'ILMIY SALOHIYATGA EGA BO’LMAGAN',
            y: 12, 
            color: 'rgba(255, 79, 68, 1)', 
          },
        ],
      },
    ],
    legend: {
      align: 'right',
      verticalAlign: 'bottom',
      layout: 'vertical',
      itemStyle: {
        fontWeight: "500",
        fontSize: "15px",
      },
    },
  };

  return (
    <div className='border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default FacultyPieChart;
