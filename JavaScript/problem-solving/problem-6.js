// Input: a string
// Output: the string without its first and last character
// Returns: a string

function removeFirstAndLast(str) {
  const removeLetter = str.slice(1, 4)
  return removeLetter
}

console.log(removeFirstAndLast('hello')) // Expected: "ell"
