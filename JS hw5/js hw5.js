//Первое задание//
function numbers(a, b) {
  if (a <= b) {
    return a
  } else {
    return b
  }
}

console.log(numbers(1, 6));
//Второе задание//
function even(a) {
  if (a % 2 == 0) {
    console.log(`Число чётное!`);
  } else {
    console.log(`Число не чётное!`);
  }
}

even(4)
//Третье задание//
function num(a) {
  let square = a ** 2 
  return square
}  

console.log(num(5));
//Четвёртое задание//
let age = prompt("Сколько Вам лет?");

if (age < 0) {
  printMessage = function () {
    console.log("Вы ввели неправильное значение!");
  }
} else if (age >= 0 && age < 12) {
  printMessage = function () {
    console.log("Привет, друг!");
  }
} else {
  printMessage = function (){
    console.log("Добро пожаловать!");
  }
}

printMessage()
//Пятое задание//
console.log(mult(4, `fdfd`));

function mult(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return "Одно или оба значения не являются числом"
  } else{
    return num1 * num2
  }
}
//Шестое задание/
function number(n) {
  if (isNaN(n)) {
    return "Переданный параметр не является числом"
  }else{
    return n ** 3
  }
}

console.log(number(10));
//Седьмое задание//
function getCircleArea () {             
  return this.radius ** 2 * 3.14
}
function getCirclePerimeter ()  {
  return this.radius * 3.14
}

let circle1 = {
  radius: 10,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter
}
let circle2 = {
  radius: 5,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());