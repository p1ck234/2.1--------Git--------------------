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

//5
let month = Number(prompt("Введите цифру месяца"));

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Лето");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осень");
    break;
  default:
    console.log("Неверный ввод");
    break;
}

//7
let userInput = prompt("Пожалуйста, введите любое число");
if (isNaN(userInput)) {
  alert("Вы ввели не число");
} else {
  if (userInput % 2 === 0) {
    alert("Число четное");
  } else {
    alert("Число нечетное");
  }
}

//8
let clientOS = Number(
  prompt(
    "Введите 0, если вы используете iOS, и 1, если вы используете Android:"
  )
);
let clientDeviceYear = Number(
  prompt("Введите год производства вашего телефона (например, 2015):")
);

if (clientDeviceYear >= 2015) {
  switch (clientOS) {
    case 0:
      console.log("Установите версию приложения для iOS по ссылке");
      break;
    case 1:
      console.log("Установите версию приложения для Android по ссылке");
      break;
    default:
      console.log("Некорректный ввод. Введите 0 для iOS или 1 для Android.");
      break;
  }
} else if (clientDeviceYear < 2015) {
  switch (clientOS) {
    case 0:
      console.log("Установите облегченную версию приложения для iOS по ссылке");
      break;
    case 1:
      console.log(
        "Установите облегченную версию приложения для Android по ссылке"
      );
      break;
    default:
      console.log("Некорректный ввод. Введите 0 для iOS или 1 для Android.");
      break;
  }
}

//9
