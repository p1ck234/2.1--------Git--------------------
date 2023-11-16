//1
for (let index = 0; index < 2; index++) {
  console.log("Привет");
}

//2
for (let index = 1; index < 6; index++) {
  console.log(index);
}

//3
for (let index = 7; index < 23; index++) {
  console.log(index);
}

//4
let obj = {
  Коля: "200",
  Вася: "300",
  Петя: "400",
};

for (let key in obj) {
  console.log(key + " — зарплата " + obj[key] + " долларов.");
}

//5
let n = 1000;
let i = 0;

while (n >= 50) {
  n /= 2;
  i++;
}
console.log("Итоговое число: " + n);
console.log("Количество итераций: " + i);

//6
let firstFriday = Number(prompt("Введите номер первой пятницы"));
for (let day = firstFriday; day <= 31; day += 7) {
  console.log(
    "Сегодня пятница, " + day + "-е число. Необходимо подготовить отчет."
  );
}
