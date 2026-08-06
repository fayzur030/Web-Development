/*Problem: Nested response extractor
Extractor specific field from a nested API-Like response object using destructuring with renaming + default value
Example: {user:{nam: 'Fayzur , age : 22}} => extract name as userName , default age = 18 is missing*/

const responseExtractor = (obj) => {
  const {
    user: { name: userName, age = 18 },
  } = obj
  return {
    userName,
    age,
  }
}
console.log(responseExtractor({ user: { name: 'Fayzur', age: 22 } }))
console.log(responseExtractor({ user: { name: 'Fayzur' } }))

let numbers = [12, 34, 25, 20, 29, 54]
let [first, ...restNumbers] = numbers
console.log(first, restNumbers)
