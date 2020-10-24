// What is your star sign?
import React from "react";

let days = 0;
let month = +prompt("What is your birth month?");
let date = +prompt("What is your birth date?");
let sign;

let monthsOfYear = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
let monthsAbbr = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sept",
  "oct",
  "nov",
  "dec",
];

let months = [];
monthsOfYear.forEach((month, i) => {
  months.push({ id: i + 1, month: month, abbr: monthsAbbr[i] });
});

// months.forEach((monthObj) => {
//   if (monthObj.month === month || month.abbr === month) {
//     month = monthObj.id;
//   }
// });

switch (month) {
  case 1:
    days = 0;
    break;
  case 2:
    days = 31;
    break;
  case 3:
    days = 59;
    break;
  case 4:
    days = 90;
    break;
  case 5:
    days = 120;
    break;
  case 6:
    days = 151;
    break;
  case 7:
    days = 181;
    break;
  case 8:
    days = 212;
    break;
  case 9:
    days = 243;
    break;
  case 10:
    days = 273;
    break;
  case 11:
    days = 304;
    break;
  case 12:
    days = 334;
    break;
}

days = days + date;

switch (true) {
  case days < 20 || days > 355:
    sign = "capricorn";
    break;
  case days < 50:
    sign = "aquarius";
    break;
  case days < 80:
    sign = "pisces";
    break;
  case days < 110:
    sign = "aries";
    break;
  case days < 141:
    sign = "taurus";
    break;
  case days < 172:
    sign = "gemini";
    break;
  case days < 204:
    sign = "cancer";
    break;
  case days < 235:
    sign = "leo";
    break;
  case days < 266:
    sign = "virgo";
    break;
  case days < 296:
    sign = "libra";
    break;
  case days < 326:
    sign = "scorpio";
    break;
  case days < 356:
    sign = "sagittarius";
    break;
}

const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
fetch(URL, {
  method: "POST",
})
  .then((response) => response.json())
  .then((json) => {
    const date = json.current_date;
    console.log(date);
    sign = `Sign: ${sign} Horoscope for ${date}: ${json.description}`;
    alert(sign);
  });

console.log(sign);

// // Aquarius 20-49
// Pisces 50-79
// Aries 80-109
// Taurus 110-140
// Gemini 141-171
// Cancer 172-203
// Leo 204-234
// Virgo 235-265
// Libra 266-295
// Scorpio 296-325
// Sagittarius 326-355
// Capricorn 356-365 && 0-19
