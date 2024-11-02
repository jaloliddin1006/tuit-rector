
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const MaleAndFemale = () => {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
    title: {
      text: 'PROFESSOR-O’QTUVCHILARNING ILMIY DARAJASI BO’YICHA',
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
        innerSize: '55%', 
        borderWidth: 5,
        cursor: 'pointer',
        borderRadius: "30%",
        dataLabels: {
          enabled: true,
          format: '{point.y}',
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
          },
          distance: -30,
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
            name: 'PhD',
            y: 138, 
            // color: 'rgba(24, 213, 77, 1)',
          },
          {
            name: 'DSc',
            y: 37, 
            // color: 'rgba(255, 79, 68, 1)', 
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

export default MaleAndFemale;
