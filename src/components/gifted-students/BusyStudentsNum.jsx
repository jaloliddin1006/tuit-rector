
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BusyStudentsNum = () => {
  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'ISH BILAN BAND TALABALAR',
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    // subtitle: {
    //   text: '314', // The number "314"
    //   align: 'left',
    //   verticalAlign: 'top',
    //   style: {
    //     fontSize: '40px',
    //     fontWeight: 'bold',
    //   },
    //   x: 0,
    //   y: 30,
    // },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b></br>Soni: <b>{point.y} ta</b>',
    },
    plotOptions: {
      pie: {
        innerSize: '60%', // Makes it a donut chart
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.0f}%',
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
          },
          distance: -30,
        },
        showInLegend: true, // Show the legend
      },
    },
    series: [
      {
        name: 'Talabalar',
        colorByPoint: true,
        data: [
          {
            name: 'Ish bilan band talabalar',
            y: 92, // 78% for employed students
            color: '#007bff', // Blue color for employed
          },
          {
            name: 'Ish bilan band bo\'lmagan talabalar',
            y: 1753, // 22% for unemployed students
            color: '#e9ecef', // Light grey color for unemployed
          },
        ],
      },
    ],
    legend: {
      align: "left",
      layout: "vertical",
      labelFormatter: function () {
        return this.name + " - " + this.y;
      },
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

export default BusyStudentsNum;
