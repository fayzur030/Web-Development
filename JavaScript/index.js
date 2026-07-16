// const name = 'Alex'
// const age = 29
// const favoriteFood = 'Pizza'
// const favoriteLanguage = 'JavaScript'
// const loveCoding = true

favorite // console.log(bioData)

// const n1 = 50
// const n2 = '5'
// const n3 = n1 + n2
// console.log(typeof n3)

const hour = new Date().getHours()
let greatting

if (hour < 18) {
  greatting = 'Good morning'
} else {
  greatting = 'good evening'
}

// console.log(greatting)

const age = 18
let fayzurAge

if (age < 18) {
  fayzurAge = 'Fayzur is not adult'
} else if (age == 18) {
  fayzurAge = 'Fayzur is totally adult'
} else {
  fayzurAge = 'Fayzur is old'
}

console.log(fayzurAge)

// task 1

const number1 = 15
let countNumber
if (number1 < 0) {
  countNumber = 'This is negative number'
} else if (number1 > 0) {
  countNumber = 'This is positive number'
} else {
  countNumber = 'This is decimal number'
}

console.log(countNumber)

// task 2

const number2 = 15
let evenOdd
if (number2 % 2 === 0) {
  evenOdd = 'This is even number '
} else if (number2 % 2 !== 0) {
  evenOdd = 'This is zero'
}

console.log(evenOdd)

// task 3
const mark = 25
let passFail
if (mark >= 33) {
  passFail = 'He will be passed'
} else {
  passFail = ' He will be fail'
}
console.log(passFail)

//
const user = 'admin'
const password = '123456'
let message
if (user === '' && password === '') {
  message = 'Please enter username and password'
} else if (user === '') {
  message = 'Please enter username'
} else if (password === '') {
  message = 'Please enter your password'
} else if (user === 'admin' && password === '123456') {
  message = ' User logged in successfully '
} else {
  message = 'Invalid credentials'
}
console.log(message)

let price = 500
const isLeaders = false

price = isLeaders
  ? `Price amount ${(price = 0)} `
  : `PRICE AMOUNT ${price + 400}`
console.log(price)
