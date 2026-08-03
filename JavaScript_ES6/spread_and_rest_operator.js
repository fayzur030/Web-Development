//Spread and rest operator

let numbers = [15, 20, 45, 56, 48, 86]

// console.log(numbers) //without spread

// console.log(...numbers) // with spread
let maxNumber = Math.max(...numbers)
// console.log(maxNumber)

let number2 = [...numbers, 4000, 5000, 66000]
// console.log(number2)

const student = {
  name: 'Fayzur',
  age: 22,
}
// console.log(student)

let student2 = { ...student }
// console.log(student2)
student.class = 'Honours 2nd Year'

// Rest Operator

function sum(a, b, c, ...restNumber) {
  //   console.log(restNumber, '<=')

  let sum = 0
  for (let number of restNumber) {
    sum += number
  }

  return a + b + c + sum
}
console.log(sum(2, 45, 3, 4, 6, 7, 8, 1))
