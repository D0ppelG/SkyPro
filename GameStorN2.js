function fruits() {
  let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  let fruit = fruits.sort(() => Math.random() - 0.5);
  alert(fruit.join(' '));

  let firstFruit = prompt ("Чему равнялся первый элемент массива?")
  if (firstFruit === null){
    alert ("Вы отменили ввод!");
    return;
  }

  let secondFruit = prompt("Чему равнялся последний элемент массива?")
  if (secondFruit === null) {
    alert("Вы отменили ввод!");
    return;
  }

  if (!firstFruit.trim() || !secondFruit.trim()) {
    alert ("Строка пустая");
    return;
  }

  if (firstFruit === fruit[0] && secondFruit === fruit[fruit.length - 1]) {
    alert("Поздровляю, вы угадали оба слова!!!");
  } else if (firstFruit === fruit[0] || secondFruit === fruit[fruit.length - 1]) {
    alert("Вы были близки к победе!");
  } else {
    alert("Вы не угадали ни одного слова :(");
  }
}