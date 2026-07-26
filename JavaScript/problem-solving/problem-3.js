// Input: a number
// Output: product of its digits
// Returns: a number

function productOfDigits(num) {
  let str = num.toString().split('')
  let total = 1
  for (const num of str) {
    total = total * num
  }
  return Number(total)
}

console.log(productOfDigits(123)) // Expected: 6
console.log(productOfDigits(4040)) // Expected: 0
