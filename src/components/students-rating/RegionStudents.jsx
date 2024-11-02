import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const RegionStudents = () => {
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: "VILOYATLAR KESIMIDA TALABALAR SONi",
      align: 'left', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
        textTransform: "uppercase",
      },
    },
    xAxis: {
      categories: [
        "Qoraqalpog'iston Respublikasi",
        "Andijon viloyati",
        "Buxoro viloyati",
        "Jizzax viloyati",
        "Qashqadaryo viloyati",
        "Navoiy viloyati",
        "Namangan viloyati",
        "Samarqand viloyati",
        "Sirdaryo viloyati",
        "Surxondaryo viloyati",
        'Toshkent viloyati',
        "Farg'ona viloyati",
        "Xorazm viloyati",
        'Toshkent shahar',
        "Xorijiy davlatlardan",
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Talabalar soni',
      },
    },
    tooltip: {
      headerFormat:
        '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} nafar</b></td></tr>',
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
        name: '1-kurs',
        data: [39, 24, 45, 41, 65, 36, 39, 24, 17, 34, 92, 49, 15, 74, 0], // Example data for women in each category
        // color: '#00A651', 
      },
      {
        name: '2-kurs',
        data: [28, 16, 34, 20, 31, 21, 21, 12, 9, 19, 51, 35, 13, 58, 3], // Example data for men in each category
        // color: '#F8BC35', 
      },
      {
        name: '3-kurs',
        data: [18, 15, 27, 10, 19, 20, 25, 31, 8, 31, 48, 33, 8, 52, 5], // Example data for women in each category
        // color: '#00A651', 
      },
      {
        name: '4-kurs',
        data: [13, 21, 47, 22, 50, 29, 31, 24, 7, 32, 47, 42, 8, 65, 0], // Example data for men in each category
        // color: '#F8BC35', 
      },
    ],
  };

  return (
    <div className='border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default RegionStudents;
