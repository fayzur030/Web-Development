const commitment = 'I will work hard and never give up'
// const part = commitment.split('')
// // console.log(part)
// const reversed = part.reverse()
// console.log(reversed)
// console.log(reversed.join(''))

const student = {
  firstName: 'Fayzur',
  lastName: 'Rahman',
  age: 22,
  height: '5.5',
  weight: 55,
}
delete student.weight

console.log(Object.keys(student))
