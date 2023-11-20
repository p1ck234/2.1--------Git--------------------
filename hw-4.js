//1
const less = (a, b) => {
  if (a < b) {
    return a;
  } else return b;
};

console.log(less(8, 6));

//2
const evenOrOdd = (a) => {
  if (a % 2 == 0) {
    return "Число четное";
  } else return "Число нечетное";
};

console.log(evenOrOdd(3));

//3
const clgSquared = (a) => {
  console.log(a ** 2);
};
clgSquared(2);

const retSquared = (a) => {
  return a ** 2;
};

let result = retSquared(3);
console.log(result);

//4
const HelloFriend = () => {
  let age = Number(prompt("Сколько вам лет?"));
  if (age < 0) {
    console.log("Вы ввели неправильное значение");
  } else if (age >= 0 && age <= 12) {
    console.log("Привет, друг!");
  } else if (age >= 13) {
    console.log("Добро пожаловать!");
  }
};

//HelloFriend();

//5
const isNum = () => {
  let a = Number(prompt("Введите первое число"));
  let b = Number(prompt("Введите второе число"));
  if (isNaN(a) != true && isNaN(b) != true) {
    console.log(a * b);
  } else console.log("Одно или оба значения не являются числом");
};

//isNum();

//6

const cubeization = (n = Number(prompt("Введите число"))) => {
  let result = 0;
  if (isNaN(n) != true) {
    result = n * n * n;
    console.log(`n в кубе равняется ${result}`);
  } else console.log("Переданный параметр не является числом");
};
//cubeization(10);

//7
function getArea() {
  console.log(`S = ${3.14 * this.radius ** 2}`);
}
function getPerimeter() {
  console.log(`C = ${2 * 3.14 * this.radius}`);
}

const circle1 = {
  radius: 10,
  getArea: getArea,
  getPerimeter: getPerimeter,
};
const circle2 = {
  radius: 15,
  getArea: getArea,
  getPerimeter: getPerimeter,
};

circle1.getArea();
circle1.getPerimeter();
circle2.getArea();
circle2.getPerimeter();
