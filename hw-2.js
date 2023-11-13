//1
let password = "пароль";
let currentPassword = prompt("Введите пароль");
if (password === currentPassword) {
  console.log("Пароль введен верно");
} else {
  console.log("Пароль введен неверно");
}

//2
let c = 0;
if (c > 0 && c < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//3
let d = 56;
let e = 156;

if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//4
let a = "2";
let b = "3";
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));
