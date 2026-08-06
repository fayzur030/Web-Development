const numbers = [14, 25, 14, 25, 24, 26, 47, 50]
const sum = numbers.reduce((accumulator, num) => {
  console.log(accumulator)
  return accumulator + num
}, 0)
console.log(sum)
