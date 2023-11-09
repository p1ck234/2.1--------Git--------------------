// 1
let a = 10;
alert(a);
a = 20;
alert(a);

//2
let ageIphone = 2017;
alert(ageIphone);

//3
let nameJs = "Brendan Eich";
alert(nameJs);

//4
let b = 10;
let c = 20;
alert(
  `Сумма = ${b + c}\nРазность = ${b - c}\nПроизведение = ${b * c}\nЧастное = ${
    b - c
  }`
);

//5
let result = 2 ** 5;
alert(result);

//6
let first = 9;
let second = 2;
alert(first % second);

//7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//8
let age = Number(prompt("Сколько вам лет?"));
alert(age);

//9

const user = {
  name: "Daniil",
  year: 2003,
  isAdmin: true,
  //"city of residence": "saratov",
};

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

//10
let name = prompt("Как вас зовут?");
alert(`Привет, ${name}!`);
