const numbers = [2, 5, 9, 6, 24, 56, 45, 49, 43, 12, 74, 89, 41]
function getEvenNumbers(array) {
  const evens = []
  for (const num of array) {
    if (num % 2 === 0) {
      evens.push(num)
    }
  }
  return evens
}
const result = getEvenNumbers(numbers)
// console.log('Result:', result)

function area(land, height) {
  const areaResult = (1 / 2) * land * height
  return areaResult
}

const resultArea = area(14, 76)
console.log(resultArea)
