// Первое задание //
let password = 'пароль';
let usePassword = String (prompt('Введите пароль'));

if (password === usePassword){
  alert("Пароль введен верно")
} else{
  alert("Пароль введен не верно")
}

// Второе задание //
let c = 10

if (c > 0 && c < 10){
  alert("Верно")
} else{
  alert("Не верно")
}

//Третье задание//
let a = 10
let b = -30

if (a > 100 || b > 100){
  alert ("Верно")
} else {
  alert ("Не верно")
}

//Четвёртое задание//
let d = '2'
let f = '3'

alert(Number(d) + Number(f));

//Пятое задание//
let monthNumber = Number (prompt("Введите порядковый номер текущий месяц года"))

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    alert("Сейчас зима!")  
    break;
  case 3:
  case 4:
  case 5:
    alert("Сейчас весна!")
    break
  case 6:
  case 7:
  case 8:
    alert("Сейчас лето!")
    break
  case 9:
  case 10:
  case 11:
    alert("Сейчас весна!")  
    break          
  default:
    alert("Такого месяца не существуе")
}