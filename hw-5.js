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