// Destructuring for array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [one, two, , , , , , , nine] = numbers // skip korar jonno , , use kora hoyase
console.log(one, two, nine)

// Destructuring for object

const student = {
  name: 'Fayzur Rahmnan',
  age: 22,
  roll: 10,
}
// const studentName = student.name
// const studentRoll = student.roll

const { name, roll } = student

console.log(name, roll)

// Array er jonno position ta important but object er jonno position important na

//nested object Destructuring

const studentData = {
  name: 'Fayzur Rahmnan',
  age: 22,
  roll: 10,
  mark: {
    science: 84,
    english: 86,
    math: 95,
  },
}

const {
  mark: { science, english },
} = studentData
console.log(science, english)
