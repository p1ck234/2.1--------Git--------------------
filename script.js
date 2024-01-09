// Времена года!
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
// Запомни слова
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

const playEnigma = () => {
  let enigmaText =
    "Что можно увидеть с закрытыми глазами, но нельзя увидеть с открытыми?";
  let correctAnswer = "Сон";
  let attempts = 3;
  let hints = 2;

  alert(
    `Давайте начнем игру! У вас есть ${attempts} попытки и ${hints} подсказки.`
  );

  while (attempts > 0) {
    let answer = prompt(enigmaText);

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      alert("Правильно! Вы угадали загадку.");
      break;
    } else {
      attempts--;
      if (attempts > 0) {
        if (attempts === 2) {
          hints--;
          alert(
            `Неправильно. У вас осталось ${attempts} попытки. Вот подсказка: это бывает ночью. У вас осталась ${hints} подсказка.`
          );
        } else {
          hints--;
          alert(
            `Неправильно. У вас осталось ${attempts} попытки. Вот еще одна подсказка: это происходит, когда вы спите.`
          );
        }
      } else {
        alert(
          `К сожалению, у вас закончились попытки. Правильный ответ: ${correctAnswer}`
        );
      }
    }
  }
};
