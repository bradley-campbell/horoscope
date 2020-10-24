// What is your star sign?

let days = 0;
let month = +prompt("What is your birth month?");
let date = +prompt("What is your birth date?");
let sunSign;

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

console.log(months);

switch (month) {
  case 1:
    days = 0;
    break;
  case 2:
    days = 31;
    console.log("hi");
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
    sign = "Capricorn";
    break;
  case days < 50:
    sign = "Aquarius";
    break;
  case days < 80:
    sign = "Pisces";
    break;
  case days < 110:
    sign = "Aries";
    break;
  case days < 141:
    sign = "Taurus";
    break;
  case days < 172:
    sign = "Gemini";
    break;
  case days < 204:
    sign = "Cancer";
    break;
  case days < 235:
    sign = "Leo";
    break;
  case days < 266:
    sign = "Virgo";
    break;
  case days < 296:
    sign = "Libra";
    break;
  case days < 326:
    sign = "Scorpio";
    break;
  case days < 356:
    sign = "Sagittarius";
    break;
}

alert(sign);

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
