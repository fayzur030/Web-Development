// Input: a number
// Output: the number with digits reversed
// Returns: a number

function reverseNumber(num) {
  let str = num.toString().split('').reverse().join('')
  return Number(str)
}

console.log(reverseNumber(1234)) // Expected: 4321
console.log(reverseNumber(7)) // Expected: 7
