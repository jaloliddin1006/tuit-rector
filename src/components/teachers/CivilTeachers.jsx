
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const CivilTeachers = () => {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
    title: {
      text: 'PROFESSOR-O’QTUVCHILARNING JINSI BO’YICHA',
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    tooltip: {
      pointFormat: 'Foizda: <b>{point.percentage:.1f}%</b></br>Soni: <b>{point.y} ta</b>',
    },
    accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
    plotOptions: {
      pie: {
        innerSize: '50%', 
        borderWidth: 10,
        borderRadius: "30%",
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '{point.y}',
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
          },
          distance: -35,
        },
        showInLegend: true, 
        allowPointSelect: true,
        // dataLabels: {
        //     enabled: true,
        //     format: '<span style="font-size: 1.2em"><b>{point.name}</b>' +
        //         '</span><br>' +
        //         '<span style="opacity: 0.6">{point.percentage:.1f} ' +
        //         '%</span>',
        //     connectorColor: 'rgba(128,128,128,0.5)'
        // }
      },
    },
   
    series: [
      {
        name: "O'qituvchilar",
        colorByPoint: true,
        data: [
          {
            name: 'Erkak',
            y: 318, 
            color: "#2DD9DBFF",
          },
          {
            name: 'Ayol',
            y: 123, 
            color: '#23E274FF', 
          },
        ],
      },
    ],
    legend: {
      align: 'left',
      verticalAlign: 'bottom',
      layout: 'horizontal',
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

export default CivilTeachers;
