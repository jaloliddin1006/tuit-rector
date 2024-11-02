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
  { "hc-key": "uz-fa", value: 10, color: "#FF5733" }, // Farg'ona viloyati uchun rang
  { "hc-key": "uz-tk", value: 11, color: "#33FF57" }, // Toshkent shahri uchun rang
  { "hc-key": "uz-an", value: 12, color: "#3357FF" }, // Andijon viloyati uchun rang
  { "hc-key": "uz-ng", value: 13, color: "#FF33A5" }, // Namangan viloyati uchun rang
  { "hc-key": "uz-ji", value: 14, color: "#FF8C33" }, // Jizzax viloyati uchun rang
  { "hc-key": "uz-si", value: 15, color: "#FFC300" }, // Sirdaryo viloyati uchun rang
  { "hc-key": "uz-ta", value: 16, color: "#DAF7A6" }, // Toshkent viloyati uchun rang
  { "hc-key": "uz-bu", value: 17, color: "#900C3F" }, // Buxoro viloyati uchun rang
  { "hc-key": "uz-kh", value: 18, color: "#581845" }, // Xorazm viloyati uchun rang
  { "hc-key": "uz-qr", value: 19, color: "#C70039" }, // Qoraqalpog‘iston Respublikasi uchun rang
  { "hc-key": "uz-nw", value: 20, color: "#FFC300" }, // Navoiy viloyati uchun rang
  { "hc-key": "uz-sa", value: 21, color: "#FF5733" }, // Samarqand viloyati uchun rang
  { "hc-key": "uz-qa", value: 22, color: "#C70039" }, // Qashqadaryo viloyati uchun rang
  { "hc-key": "uz-su", value: 23, color: "#581845" }, // Surxondaryo viloyati uchun rang
];

const UzbekistanMap = () => {
  const [options, setOptions] = useState({
    chart: {
      map: "countries/uz/uz-all",
      // width: 1200,
      // height: 800,
    },
    title: {
      text: "O'zbekiston Xaritasini Ko'rsatish",
    },
    mapNavigation: {
      enabled: true,
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
    <>
      <div className="w-[90vw] mx-auto flex justify-center items-center">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"mapChart"}
          options={options}
        />
      </div>
      <div className="text-red-500 text-center text-[2rem] font-semibold">
        UZBEKISTAN
      </div>
    </>
  );
};

export default UzbekistanMap;
