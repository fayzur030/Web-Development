// Input: a string
// Output: true or false
// Returns: a boolean

function isPalindrome(str) {
  let reversePalindrome = ''
  for (const palindrome of str) {
    reversePalindrome = palindrome + reversePalindrome
  }
  if (str === reversePalindrome) {
    return true
  } else {
    return false
  }
  return reversePalindrome
}

console.log(isPalindrome('level')) // Expected: true
console.log(isPalindrome('hello')) // Expected: false
