// Input: a number
// Output: true or false
// Returns: a boolean

function isPerfectSquare(num) {
  const root = Math.sqrt(num)
  if (Number.isInteger(root)) {
    return true
  } else {
    return false
  }
}

console.log(isPerfectSquare(16)) // Expected: true
console.log(isPerfectSquare(20)) // Expected: false

// Input: an array of numbers
// Output: array with duplicates removed
// Returns: an array

function removeDuplicates(numbers) {
  let unique = []
  for (const num of numbers) {
    if (!unique.includes(num)) {
      unique.push(num)
    }
  }
  return unique
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])) // Expected: [1, 2, 3, 4, 5]
