const user = {
  name: 'Bob',
  age: 43,
  isAdmin: true
}
user.cityOfResidence = "New York City"

user.age = 45

delete user.cityOfResidence

let info = prompt("Какую информацию хотите узнать о пользователе?")

alert(`${user[info]}`)