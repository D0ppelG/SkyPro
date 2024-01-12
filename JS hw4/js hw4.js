// Первое задание //
for (let i = 1; i <= 2; i++) {
  console.log("Привет");
}

// Второе задание //
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//Третье задание//
for (let i = 7; i <= 22; i++) {
  console.log(i);
}

//Четвёртое задание//
const obj = {
  Коля: 200,
  Вася: 300,
  Петя: 400,
}  

for (let item in obj){
  console.log(`${item} - зарплата ${obj[item]} долларов.`);
}

//Пятое задание//
let n = 1000
let num = 0

while (n >= 50) {
  n /= 2
  num ++ 
}

console.log(n);
console.log(num);

//Шестое задание//
let firstFriday = 3

for (let i = firstFriday; i <= 31; i += 7) {
  console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`); 
}

