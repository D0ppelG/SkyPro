function seasons() {
  let month = prompt ("Введите месяц года!") 
  if (month == 12 || month >= 1 && month <= 2) {
    alert ("Сейчас зима!")
  } else if (month >= 3 && month <= 5){
    alert ("Сейчас весна!")
  } else if (month >= 6 && month <= 8){
    alert ("Сейчас лето!!!")
  } else if (month >= 9 && month <= 11){
    alert ("Сейчас осень!")
  } else if (month.trim() === ''){
    alert ("Вы ничего не ввели(")
  } else{
    alert ("Такого месяца не существует!!!")
  }
}