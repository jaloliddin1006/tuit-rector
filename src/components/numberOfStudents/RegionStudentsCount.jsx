import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const RegionStudentsCount = () => {
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
        data: [143, 128, 185, 134, 257, 136, 154, 109, 71, 129, 350, 164, 63, 343, 8],
        // color: '#00A651', 
      },
      {
        name: '2-kurs',
        data: [91, 72, 151, 75, 155, 96, 115, 58, 35, 101, 197, 120, 50, 247, 7],
        // color: '#F8BC35', 
      },
      {
        name: '3-kurs',
        data: [63, 63, 129, 59, 134, 87, 95, 78, 45, 92, 142, 102, 30, 221, 8], 
        // color: '#00A651', 
      },
      {
        name: '4-kurs',
        data: [44, 68, 146, 78, 164, 98, 117, 79, 48, 108, 156, 110, 32, 285, 6],
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

export default RegionStudentsCount;
