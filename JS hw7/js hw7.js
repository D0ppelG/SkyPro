//Первое задание//
let text = 'Преобразуйте строку js в верхний регистр JS.'
textUpper = text.toUpperCase()

console.log(textUpper);


//Второе задание//
function searchStart(arr, str) {
  const result = arr.filter((el) => el.toLowerCase().includes(str.toLowerCase()))
  return result
}
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));


//Третье задание//
console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));


//Четвёртое задание//
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));


//Пятое задание//
arr = Math.random() * 10
console.log(Math.round(arr))


//Шестое задание/
function getRandomArrNumbers(n) {
  const arr = []
  let i = n / 2
  i = Math.floor(i)
  for (let index = 0; index < i; index++) {
    arr.push(Math.round(Math.random() * n));
  }
  console.log(arr)
}
getRandomArrNumbers(20)


//Седьмое задание//
//function getRandomArrNumbers(j, k) {
//  console.log(Math.round(Math.random() * (j - k)) + k);
//}
//
//getRandomArrNumbers(10, 40);
//Восьмое задание//
console.log(new Date());


//Девятое задание//
let newDate = 73
let myDate = new Date()
let laterDay73mil = newDate * 24 * 60 * 60 * 1000
let searchDate = +myDate + laterDay73mil
let laterDay73 = new Date(searchDate);

console.log(laterDay73);


//Десятое задание//
function formatedDateAndTime(inputDate) {
const daysOfWeeks = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']; 
const dayOfTheWeek = daysOfWeeks[inputDate.getDay()];
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const month = months[inputDate.getMonth()];
const year = inputDate.getFullYear();
const day = inputDate.getDay() + 21;
const hours = inputDate.getHours();
const minutes = inputDate.getMinutes();
const seconds = inputDate.getSeconds();
const formatedDate = `Дата: ${day} ${month} ${year}, ${dayOfTheWeek}`;
const formatedTime = `Время: ${hours}:${minutes}:${seconds}`;
return `${formatedDate}\n${formatedTime}`;}
console.log(formatedDateAndTime(new Date()));
