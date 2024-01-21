//Первое задание//
let num = [1, 5, 4, 10, 0, 3]

for (let item of num){
  if (item == 10) break
  console.log(item);
}

//Второе задание//
let nums = [1, 5, 4, 10, 0, 3]

console.log(nums.indexOf(4));

//Третье задание//
let numeric = [1, 3, 5, 10, 20]

numeric = numeric.join(' ');

console.log(numeric);

//Четвёртое задание//
const massivs = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
]
console.log(massivs);

//Пятое задание//
let massiv = [1, 1, 1] 

massiv.push (2, 2, 2)

console.log(massiv);

//Шестое задание/
let sorts = [9, 8, 7, 'a', 6, 5]

sorts = sorts.sort()
sorts.pop()

console.log(sorts);

//Седьмое задание//
const arr = [9, 8, 7, 6, 5];
let userNum = Number(prompt("Угадаешь число?"))
let True = 0

for (const item of arr) {
  if (isNaN(userNum) || userNum == ""){
    True -= 1
    break
  } else if (userNum == item){
    True += 1
  }                                               //                                                :):):):)
}                                                //Ну тут как-то странно, но работает нормикс      :):):):):)

if (True == 1) {
  alert("Угадал!!!")
} else if (True == 0){
  alert("Не угадал")
} else if (True == -1){
  alert("Вы не ввели число!!!")
}

//Восьмое задание//
let arrs = 'abcdef'
console.log(arrs);
let arrsSplit = arrs.split("");
console.log(arrsSplit);
let arrsRevers = arrsSplit.reverse()
console.log(arrsRevers);
let arrsJoin = arrsRevers.join("")
console.log(arrsJoin);

//Девятое задание//
let multidimensional = [[1, 2, 3,], [4, 5, 6]]

let multidimensionalJoin = multidimensional[0].concat(multidimensional[1])
console.log(multidimensionalJoin);

//Десятое задание//
let randomNum = [1,5,9,10,2,6,8,3,4,7]
let i = 0
for (const item of randomNum) {
  console.log(randomNum[i] + randomNum[i + 1])
  i += 1
  if (i == 9) {
    break
  }
}
//Одинадцатое задание//
let square = [3, 6, 8, 20, 50, 256]

let square2 = square.map(item => item * item)
console.log(square2);
//Двенадцатое задание//
let getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква']
let newArr = [] 

for (let i = 0; i < getLengthWords.length; i++) {
  newArr.push(getLengthWords[i].length);
}

console.log(newArr);

//Тринадцатое задание//
function filterPositive(array) {
  const negative = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) { 
      negative.push(array[i])
    }
  }
  return negative
}
console.log(filterPositive([-100, 30, 55, -23, 65]));