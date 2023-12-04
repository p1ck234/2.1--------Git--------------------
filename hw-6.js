//1
console.log("#1");
//let words = prompt("Введите строку");
//console.log(words.toUpperCase());

//2
console.log("#2");
const searchStart = (arrStr = [], search) => {
  arrStr.forEach((word) => {
    if (word.toLowerCase().includes(search.toLowerCase())) {
      console.log(word);
    }
  });
};
searchStart(["Кошка", "Кит", "Комар", "Носорог"], "ко"); // ['кошка', 'комар']
searchStart(["яблоко", "груша", "гриб", "огурец"], "гру"); // ['груша']
searchStart(["Дом", "Банк", "Больница", "Театр"], "Кино"); // []

//3
console.log("#3");
let a = 32.58884;
console.log(`До меньшего целого: ${Math.floor(a)}
До большего целого: ${Math.ceil(a)}
До ближайшего целого: ${Math.round(a)}`);

//4
console.log("#4");
let arr = [52, 53, 49, 77, 21, 32];
console.log(`Наименьшее - ${Math.min(...arr)}
Наибольшее - ${Math.max(...arr)}`);

//5
console.log("#5");
const getRandom = () => {
  console.log(Math.floor(Math.random() * 10) + 1);
};
getRandom();

//6 
console.log('#6');