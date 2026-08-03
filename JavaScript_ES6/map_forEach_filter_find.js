const numbers = [2, 4, 6, 7, 9, 14, 45]

// map: to modify array and get new array
const double = numbers.map((item, idx) => item * 2)
// console.log(double) // get new array
// console.log(numbers) // actual array

//forEach:
const roll = [1, 2, 3, 4, 9, 20, 5]
roll.forEach((elm, idx, array) => {
  //   console.log(elm, idx, array)
  //logic hear
})

//filter: filter out element and create new array based on condition

const price = [400, 500, 450, 700, 680, 900, 1000]
const expensiveProducts = price.filter((product) => {
  //   if (product > 600) {
  //     return true
  //   } else {
  //     return false
  //   }

  return product >= 500
})
// console.log(expensiveProducts)

//find: find out first element based on condition

const phones = [
  {
    name: 'Samsung',
    price: 100000,
  },
  {
    name: 'Oppo',
    price: 80000,
  },
  {
    name: 'Realme',
    price: 40000,
  },
  {
    name: 'Radme',
    price: 50000,
  },
]

const expensivePhone = phones.filter((phone) => {
  return phone.price > 50000
})
// console.log(expensivePhone)

const students = [
  {
    name: 'Habib',
    roll: 26,
  },
  {
    name: 'Fayzur',
    roll: 20,
  },
  {
    name: 'Shakib',
    roll: 6,
  },
  {
    name: 'Rafiul',
    roll: 16,
  },
  {
    name: 'Alis',
    roll: 22,
  },
]
const findSpecificStudent = students.find((student) => {
  return student.name.toLocaleLowerCase() === 'fayzur'
})
console.log(findSpecificStudent)
