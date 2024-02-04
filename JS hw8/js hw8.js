//Первое задание//
const people1 = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

console.log(people1.sort((a, b) => a.age - b.age));

//Второе задание
function isPositive(num) {
  return num > 0
}

function isMale(human) {
  return human.gender === "male";
}

  function filter(arr, ruleFunction) {
  const output = [];
 
  for (i = 0; i < arr.length; i++) {
    if (ruleFunction && ruleFunction(arr[i])) {
       output.push(arr[i]);
    }
  } 
  return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
  { name: 'Глеб', gender: 'male' },
  { name: 'Анна', gender: 'female' },
  { name: 'Олег', gender: 'male' },
  { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

//Третье задание
const timer = (deadline) => {
  const interval = setInterval(() => {
    console.log(new Date());
  }, 3000);

  setTimeout(() => {
    clearInterval(interval);
    console.log(`${deadline} секунд прошло!`)
  }, deadline * 1000)
};

timer(9);

//Четвёртое задание
function delayForSecond(callback) {
  setTimeout(callback, 1000)
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//Пятая задача
function delayForSecond2(cb) {
  setTimeout(() => {
    console.log('Прошла одна секунда');
    if (cb) { cb(); }

  }, 1000)
}

function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

delayForSecond2(() => sayHi('Глеб'));