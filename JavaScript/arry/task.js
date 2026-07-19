// Task 1 — Find the Largest Number
const numbers = [12, 45, 7, 89, 23, 56]
let largest = numbers[0]
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i]
  }
}
console.log(largest)

// Task 2 — Find the Second Largest Number
const allNumbers = [10, 45, 67, 23, 89, 67, 12]
let largeNumber = allNumbers[0]
let secondLargeNumber = allNumbers[0]

for (let i = 1; i < allNumbers.length; i++) {
  if (allNumbers[i] > largeNumber) {
    secondLargeNumber = largeNumber
    largeNumber = allNumbers[i]
  } else if (allNumbers[i] > secondLargeNumber) {
    secondLargeNumber[i]
  }
}
console.log(secondLargeNumber)

// Task 4 — Reverse an Array Without reverse()
const fruits = ['Apple', 'Banana', 'Orange', 'Mango']
let afterReverse = []

for (const fruit of fruits) {
  afterReverse.unshift(fruit)
}
console.log(afterReverse)

//Task 5 — Count Even and Odd Numbers

const totalNumbers = [12, 5, 8, 13, 20, 9, 4]
let count = 0

for (let i = 0; i < totalNumbers.length; i++) {
  if (totalNumbers[i] % 2 === 0) {
    count++
  }
}
console.log(count)

// optional:

const oddNumbercheckArry = [12, 5, 8, 13, 20, 9, 4]
let oddNumber = 0
for (let i = 0; i < oddNumbercheckArry.length; i++) {
  if (oddNumbercheckArry[i] % 2 !== 0) {
    oddNumber++
  }
}
console.log(oddNumber)

// console.log('Missing number')

// Task 6 — Find Missing Number:
const numbers4 = [1, 2, 3, 4, 6, 7, 8]
for (let i = 1; i < numbers4.length; i++) {
  if (!numbers4.includes(i)) {
    console.log('Missing Number:', i)
  }
}

//---------------------------------------------------------------------------------------------------

console.log('Rotate number')

// Task 7 — Rotate Array Left by One
const numbers7 = [10, 20, 30, 40, 50]
const firstElement = numbers7.shift()
const rotateNumber = numbers7.push(firstElement)

console.log(numbers7)

//---------------------------------------------------------------------------------------------------
console.log('--------------------')
// Task 8 — Rotate Array Right by One
const numbers8 = [10, 20, 30, 40, 50]
const lastElement = numbers8.pop()
const rotateRight = numbers8.unshift(lastElement)

console.log(numbers8)

//---------------------------------------------------------------------------------------------------
console.log('--------------------')

// Task 9 — Find All Duplicate Values
const numbers9 = [2, 4, 5, 2, 7, 8, 4, 10, 8]
const seen = []
const duplicateNumbers = []
for (let i = 0; i < numbers9.length; i++) {
  if (seen.includes(numbers9[i])) {
    if (!duplicateNumbers.includes(numbers9[i])) {
      duplicateNumbers.push(numbers9[i])
    }
  } else {
    seen.push(numbers9[i])
  }
}
console.log('seen:', seen)
console.log('Duplicate', duplicateNumbers)
