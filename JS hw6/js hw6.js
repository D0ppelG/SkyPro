//Первое задание//
let num = [1, 5, 4, 10, 0, 3]

for (let item of num){
  console.log(item);
  if (item == 10) break
}

//Второе задание//
let nums = [1, 5, 4, 10, 0, 3]

console.log(nums.indexOf(4));

//Третье задание//
let numeric = [1, 3, 5, 10, 20]

numeric = numeric.join(' ');

console.log(numeric);

//Четвёртое задание//
 const arr = [];
 for (j = 0; j < 3; j++ ) {
   const nestArr = [];
   for (k = 0; k < 3; k++) {
     nestArr.push(1);
   }
   arr.push(nestArr);
 }
 console.log(arr);

//Пятое задание//
let massiv = [1, 1, 1] 

massiv.push (2, 2, 2)

console.log(massiv);

//Шестое задание/
let sorts = [9, 8, 7, 'a', 6, 5]

sorts.sort()
sorts.pop()

console.log(sorts);

//Седьмое задание//

const sec = [9, 8, 7, 6, 5];
let userAnswer = Number(prompt('Угадайте число'));

if (isNaN(userAnswer)) {
  alert('Это не число!')
} else if (sec.includes(userAnswer)) {
  alert('Угадал');
} else {
  alert('Не угадал');
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
let arr10 = [9, 8, 7, 6, 5];

for (let i = 0; i < arr10.length - 1; i++) {
  let sumArr10 = arr10[i] + arr10[i + 1];
  console.log(`Сумма текущего элемента равна ${arr10[i]} и следуещего эелемента ${arr10[i + 1]} = ${sumArr10}`);
}

//Одинадцатое задание//

 function getSquare(arr) {
 	const result = [];
 	for (let i = 0; i < arr.length; i++) {
 		result.push(arr[i] ** 2);
 	}
 	return result;
 }

 console.log(getSquare([9, 14, 21]));

//Двенадцатое задание//
 function stringLength(arr) {
 	const result = [];
 	for (let i = 0; i < arr.length; i++) {
 		result.push(arr[i].length);
 	}
 	console.log(result);
 }

stringLength(['слово', '', 'слог', 'длинное предложение', 'буква']);

//Тринадцатое задание//
function filterPositive(array) {
  const result = [];
  result.push(array.filter(num => num < 0));
  console.log(result);
}

filterPositive([-25, 25, 0, -1000, -2])