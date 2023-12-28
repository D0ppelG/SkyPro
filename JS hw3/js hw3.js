// Первое задание //
let password = 'пароль';
let usePassword = String (prompt('Введите пароль'));

if (password === usePassword){
  alert("Пароль введен верно")
} else{
  alert("Пароль введен не верно")
}

// Второе задание //
let c = Number (10)

if (c > 0 && c < 10){
  alert("Верно")
} else{
  alert("Не верно")
}

//Третье задание//
let a = Number (10)
let b = Number (-30)

if (a > 100 || b > 100){
  alert ("Верно")
} else {
  alert ("Не верно")
}

//Четвёртое задание//
let d = 2
let f = 3

alert(d + f);

//Пятое задание//
let monthNumber = Number (prompt("Введите порядковый номер текущий месяц года"))

if (monthNumber == (1, 2, 12)){
  alert ("Сейчас зима!")
} else if (monthNumber == (3, 4, 5)){
  alert ("Сейчас весна!")
} else if (monthNumber == (6, 7, 8)){
  alert ("Сейчас лето!")
} else if (monthNumber == (9, 10, 11)) {
  alert ("Сейчас осень!")
} else if (monthNumber < 1 || monthNumber > 12){
  alert ("Такого месяца не существует!!!")
} else {
  alert ("Вы ввели не номер!!!")
}