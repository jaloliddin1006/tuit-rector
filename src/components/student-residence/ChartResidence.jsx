import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartResidence = () => {
  const options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'TALABALAR TURAR JOYLARI BO’YICHA',
      align: "start",
      // style: {
      //   fontSize: '24px',  
      //   fontWeight: 'bold'
      // }
    },
    xAxis: {
      categories: ['TTJ', 'Ijarada', 'Yaqin qarindoshinikida', 'Shaxsiy uyida'],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Students',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      enabled: false
  },
    credits: {
      enabled: false
    },
    series: [
      {
        name: '2024',
        data: [530, 915, 785, 345],
        colorByPoint: true, // Colors each bar individually
        colors: ['#9b59b6', '#f1c40f', '#3498db', '#2ecc71'] // Custom colors for bars
      }
    ]
  };

  return (
    <div className='border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ChartResidence;
