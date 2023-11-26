//1
console.log("Ex1");
let numbers = [1, 5, 4, 10, 0, 3];
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] == 10) break;
  console.log(numbers[index]);
}

//2
console.log("Ex2");
let numbersSecond = [1, 5, 4, 10, 0, 3];
console.log(numbersSecond.indexOf(4));

//3
console.log("Ex3");
let numbersThird = [1, 3, 5, 10, 20];
console.log(numbersThird.join(" "));

//4
console.log("Ex4");
let doubleArr = [[], [], []];
for (let i = 0; i < doubleArr.length; i++) {
  for (let j = 0; j < doubleArr.length; j++) {
    doubleArr[i][j] = 1;
  }
}

console.log(doubleArr);
// for (const arrIn of doubleArr) {
//   for (const element of arrIn) {
//     console.log(element);
//   }
// }

//5
console.log("Ex5");
let arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);
// arr.forEach((el) => {
//   console.log(arr[el]);
// });

//6
console.log("Ex6");
let arr2 = [9, 8, 7, "a", 6, 5];
arr2.sort();
arr2.pop();
console.log(arr2);

//7
console.log("Ex7");
let arr3 = [9, 8, 7, 6, 5];
let answerUser = Number(prompt("Угадай число"));
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] == answerUser) {
    console.log("Угадал");
    break;
  } else console.log("Не угадал");
}

//8
console.log("Ex8");
let string = "abcdef";
let chartArr = string.split("");
console.log(chartArr.reverse().join(""));

//9
console.log("Ex9");
let arr9 = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(arr9.join());

//10
console.log("Ex10");
let arr10 = [5, 2, 8, 3, 6, 1, 7, 4, 9, 10];

for (let i = 0; i < arr10.length - 1; i++) {
  let currentElement = arr10[i];
  let nextElement = arr10[i + 1];
  let sum = currentElement + nextElement;
  console.log(`Сумма элементов: ${currentElement} и ${nextElement} = ${sum}`);
}

//11
console.log("Ex11");
const squaresArr = (string) => {
  let arr11 = stringArr.split(" ");
  console.log(arr11.map((el) => el ** 2));
};
//let stringArr = prompt("Введите массив целых чисел через пробелы");
//squaresArr(stringArr);

//12
console.log("Ex12");
const getLengthWords = (arr) => {
  console.log(arr.map((el) => el.length));
};
let arr12 = ["слово", "", "слог", "длинное предложение", "буква"];
getLengthWords(arr12);

//13
console.log("Ex13");
function filterPositive(array) {
  console.log(array.filter((el) => el < 0));
}

filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]


