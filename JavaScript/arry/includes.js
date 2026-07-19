//Includes

const numbers = [1, 2, 3, 4, 5, , 6, 7, 9, 10, 11, 12, 14, 15]
const hasItem = numbers.includes(20) // kno item kujar jonno
console.log(hasItem)

if (numbers.includes(20)) {
  console.log('Achey')
} else {
  console.log('Item nai')
}

const studentName = ['Farzana', 'Yaseen', 'Farhana', 'Hafizul']
const all = numbers.concat(studentName)
console.log(all) // sob arry aksatey korey

// join=> sob arrey k join korey

const numbers4 = [2, 2, 4, 2, 4, 1, 1, 7, 1, 114, 44, 54, 54, 6, 74]
const position = numbers4.indexOf(6)
console.log('Position 6 number of index:', position)
console.log(Array.isArray(numbers4))
