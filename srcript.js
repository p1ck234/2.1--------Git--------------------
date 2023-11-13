// 1
let a = 10;
console.log(a);
a = 20;
console.log(a);

//2
let ageIphone = 2017;
console.log(ageIphone);

//3
let nameJs = "Brendan Eich";
console.log(nameJs);

//4
let b = 10;
let c = 20;
console.log(
  `Сумма = ${b + c}\nРазность = ${b - c}\nПроизведение = ${b * c}\nЧастное = ${
    b - c
  }`
);

//5
let result = 2 ** 5;
console.log(result);

//6
let first = 9;
let second = 2;
console.log(first % second);

//7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
console.log(num);

//8
let age = Number(prompt("Сколько вам лет?"));
console.log(age);

//9

const user = {
  name: "Daniil",
  year: 2003,
  isAdmin: true,
  //"city of residence": "saratov",
};

let info = prompt("Какую информацию хотите узнать о пользователе?");
console.log(user[info]);

//10
let name = prompt("Как вас зовут?");
console.log(`Привет, ${name}!`);
