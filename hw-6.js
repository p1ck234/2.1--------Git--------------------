//1
console.log("#1");
//let words = prompt("Введите строку");
//console.log(words.toUpperCase());

//2
console.log("#2");
const searchStart = (arrStr = [], search) => {
  arrStr.forEach((word) => {
    if (word.toLowerCase().includes(search.toLowerCase())) {
      console.log(word);
    }
  });
};
searchStart(["Кошка", "Кит", "Комар", "Носорог"], "ко"); // ['кошка', 'комар']
searchStart(["яблоко", "груша", "гриб", "огурец"], "гру"); // ['груша']
searchStart(["Дом", "Банк", "Больница", "Театр"], "Кино"); // []

//3
console.log("#3");
let a = 32.58884;
console.log(`До меньшего целого: ${Math.floor(a)}
До большего целого: ${Math.ceil(a)}
До ближайшего целого: ${Math.round(a)}`);

//4
console.log("#4");
let arr = [52, 53, 49, 77, 21, 32];
console.log(`Наименьшее - ${Math.min(...arr)}
Наибольшее - ${Math.max(...arr)}`);

//5
console.log("#5");
const getRandom = () => {
  console.log(Math.floor(Math.random() * 10) + 1);
};
getRandom();

//6
console.log("#6");
const generateRandomArray = (maxNumber) => {
  let arrayLenght = maxNumber / 2;
  let arr = [];
  for (let i = 0; i < arrayLenght; i++) {
    arr.push(Math.floor(Math.random() * maxNumber + 1));
  }
  return arr;
};
console.log(generateRandomArray(10));

//7
console.log("#7");
const getRandomInteger = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};
console.log(getRandomInteger(1, 5));

//8
console.log("#8");
let today = new Date();
console.log(today);

//9
console.log("#9");
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//10
console.log("#10");
const formatDateTime = (date) => {
  let months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  let daysOfWeek = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];

  let day = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  let dayOfWeek = daysOfWeek[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let formattedDate = `Дата: ${day} ${month} ${year} - это ${dayOfWeek}.`;
  let formattedTime = `Время: ${hours}:${minutes}:${seconds}`;
  return `${formattedDate}\n${formattedTime}`;
};
let time = new Date();
let formattedDateTime = formatDateTime(time);
console.log(formattedDateTime);


