/*Task 14-1: Spot the Error Type
Below are three small broken snippets. For each, identify the error type (Syntax / Runtime / Logic), then fix it.
*/
//==> Snippet A

function sayHi(name) {
  console.log('Hi, ' + name) // find the bug
}

sayHi('Mira')

// Snippet B|  Expected Output:HELLO
let word = 'hello'
console.log(word.toUpperCase()) // find the bug

// Snippet C | Expected Output:16
function square(num) {
  return num * num // find the bug
}

console.log(square(4)) // should be 16
