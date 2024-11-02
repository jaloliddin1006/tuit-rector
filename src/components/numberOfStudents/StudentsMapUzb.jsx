import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataUzbekistan from "@highcharts/map-collection/countries/uz/uz-all.geo.json";
import HC_map from "highcharts/modules/map";
import axios from "axios";

HC_map(Highcharts);

// const data = [
//   ['uz-fa', 10], ['uz-tk', 11], ['uz-an', 12], ['uz-ng', 13],
//   ['uz-ji', 14], ['uz-si', 15], ['uz-ta', 16], ['uz-bu', 17],
//   ['uz-kh', 18], ['uz-qr', 19], ['uz-nw', 20], ['uz-sa', 21],
//   ['uz-qa', 22], ['uz-su', 23]
// ];

const data = [
  { "hc-key": "uz-fa", value1: 10, value2: 5, color: "#FF5733" }, // Farg'ona
  { "hc-key": "uz-tk", value1: 11, value2: 7, color: "#33FF57" }, // Toshkent
  { "hc-key": "uz-an", value1: 12, value2: 6, color: "#3357FF" }, // Andijon
  { "hc-key": "uz-ng", value1: 13, value2: 8, color: "#FF33A5" }, // Namangan
  { "hc-key": "uz-ji", value1: 14, value2: 9, color: "#FF8C33" }, // Jizzax
  { "hc-key": "uz-si", value1: 15, value2: 12, color: "#FFC300" }, // Sirdaryo
  { "hc-key": "uz-ta", value1: 16, value2: 10, color: "#DAF7A6" }, // Toshkent vil.
  { "hc-key": "uz-bu", value1: 17, value2: 14, color: "#900C3F" }, // Buxoro
  { "hc-key": "uz-kh", value1: 18, value2: 13, color: "#581845" }, // Xorazm
  { "hc-key": "uz-qr", value1: 19, value2: 15, color: "#C70039" }, // Qoraqalpog'iston
  { "hc-key": "uz-nw", value1: 20, value2: 11, color: "#FFC300" }, // Navoiy
  { "hc-key": "uz-sa", value1: 21, value2: 17, color: "#FF5733" }, // Samarqand
  { "hc-key": "uz-qa", value1: 22, value2: 19, color: "#C70039" }, // Qashqadaryo
  { "hc-key": "uz-su", value1: 23, value2: 16, color: "#581845" }, // Surxondaryo
];
const StudentsMapUzb = () => {
  const [options, setOptions] = useState({
    chart: {
      map: "countries/uz/uz-all",
      width: 1200,
      height: 800,
    },
    title: {
      text: "TALABALARNING VILOYATLAR KESIMIDA SONI",
      align: 'center', 
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    tooltip: {
      formatter: function () {
        return `
      <b style="color: #000; font-size: 14px;padding-bottom: 10px">${this.point.name}</b><br/>
      <span style="color: #3357FF;">O'g'il bolalar: </span> 
      <span style="color: #3357FF;  ">${this.point.value1}</span><br/>
      <span style="color: #f00;">Qiz bolalar: </span> 
      <span style="color: #f00;">${this.point.value2}</span>`;;
      },
    },
    mapNavigation: {
      enabled: false,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },
    credits: {
      enabled: false, // Bu joyda pastdagi "Highcharts.com" va "Natural Earth" kreditlarini o'chiramiz
    },
    legend: {
      enabled: false, // Bu joyda legendni butunlay o'chirib qo'yamiz
    },
    colorAxis: {
      min: 0,
    },
    series: [
      {
        data: data,
        mapData: mapDataUzbekistan,
        joinBy: "hc-key",
        name: "O'zbekiston",
        states: {
          hover: {
            // color: "#BADA55",
            // opacity: 0.5,
            enabled: false,
            // transform: "scale(1.5)"
          },
        },
        // point: {
        //   events: {
        //     mouseOver: function () {
        //       this?.update({ opacity: 0.5 }); // Faqat ushbu viloyat uchun opacity o'zgaradi
        //     },
        //     mouseOut: function () {
        //       this?.update({ opacity: 1 }); // Hoverdan chiqishda opacity qayta tiklanadi
        //     }
        //   }
        // },
        point: {
          events: {
            mouseOver: function () {
              this.graphic.attr({
                transform: "scale(1.01)", // Hover qilinganda scale xossasi
                opacity: 0.5, // Viloyatni qisman shaffof qilish
              });
            },
            mouseOut: function () {
              this.graphic.attr({
                transform: "scale(1)", // Hoverdan chiqilganda scale qayta tiklanadi
                opacity: 1, // Opacity ni qayta tiklash
              });
            },
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
    ],
  });

  useEffect(() => {
    axios
      .get("https://code.highcharts.com/mapdata/countries/uz/uz-all.topo.json")
      .then((res) => {
        setOptions(res.data);
      })
      .catch((err) => {
        console.log(err);

        throw new Error("Something error");
      });
  }, []);

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <div className="flex justify-center items-center">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"mapChart"}
          options={options}
        />
      </div>
    </div>
  );
};

export default StudentsMapUzb;
