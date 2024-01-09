const seasons = () => {
  let month = Number(prompt("Введите цифру месяца"));
  switch (month) {
    case 12:
    case 1:
    case 2:
      alert("Зима");
      break;
    case 3:
    case 4:
    case 5:
      alert("Весна");
      break;
    case 6:
    case 7:
    case 8:
      alert("Лето");
      break;
    case 9:
    case 10:
    case 11:
      alert("Осень");
      break;
    default:
      alert("Неверный ввод");
      break;
  }
};

const playRemember = () => {
  let arr = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];
  arr.sort(() => Math.random() - 0.5);
  alert(arr);

  let firstAnswer = prompt("Чему равнялся первый элемент массива?");
  let secondAnswer = prompt("Чему равнялся последний элемент массива?");

  // //let correctAnswers = 0;

  // if (arr[0].toLowerCase() === firstAnswer.toLowerCase()) {
  //   correctAnswers++;
  // }

  // if (arr[arr.length - 1].toLowerCase() === secondAnswer.toLowerCase()) {
  //   correctAnswers++;
  // }
  if (
    arr[0].toLowerCase() === firstAnswer.toLowerCase() &&
    arr[arr.length - 1].toLowerCase() === secondAnswer.toLowerCase()
  ) {
    console.log("Вы все угадали");
  } else if (
    arr[0].toLowerCase() === firstAnswer.toLowerCase() ||
    arr[arr.length - 1].toLowerCase() === secondAnswer.toLowerCase()
  ) {
    console.log("Вы угадали 1");
  } else console.log("Вы ничего не угадали");
};
