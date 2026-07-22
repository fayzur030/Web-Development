// Task 1.1 — Spot the Difference
// let str = "hello";
// let arr = ["h", "e", "l", "l", "o"];
// Log str.length and arr.length. What do you notice?
// Try str[0] and arr[0]. Do both work the same way?
// Try str.push("!") — what happens? Why does this fail for strings but not arrays?

let str = 'hello'
let arr = str.split('')
// console.log(arr)

console.log(str.length)
console.log(arr.length)
str[0] = '!'
console.log(str)
arr[0] = '!'
console.log(arr)

//  I will try this now I notice that string is immutable but arr is mutable. Thats means string can't be change but arr can be change.

// -------------------------------------*----------------------------------

/*Task 1.2 — Convert Between Them
Convert the string "JavaScript" into an array of characters.
Convert the array ["c", "a", "t"] back into a single string "cat".*/

const language = 'JavaScript'
console.log(language.split(''))

const petAnimal = ['c', 'a', 't']
console.log(petAnimal.join(''))

// -------------------------------------*----------------------------------

/*Task 2.1 — Case Conversion
let name = "JavaScript";
Print the uppercase version.
Print the lowercase version.
Print the string with whitespace trimmed: "   hi there   " → "hi there"
*/

let languageName = 'JavaScript'
console.log(languageName.toUpperCase())
console.log(languageName.toLocaleLowerCase())
let trimmed = '   hi there   '
console.log(trimmed.trim())

// -------------------------------------*----------------------------------
/*Task 3.1 — Slicing Strings
let sentence = "Learning JavaScript is fun!";
Get just the word "Learning" using .slice().
Get the last 4 characters ("fun!") using .slice() with a negative index.
*/
let sentence = 'Learning JavaScript is fun!'
const wordLearning = sentence.slice(0, 8)
console.log(wordLearning)
const funWord = sentence.slice(-4)
console.log(funWord)

// -------------------------------------*----------------------------------

/*Task 3.2 — Combine Strings
Use .concat() to join "Hello" and "World" into "Hello World".
Use + and template literals to do the same thing. Compare all three approaches.
*/

const firstSentence = 'Hello'
const secondSentence = 'World'
let finalSentence = firstSentence.concat(' ', secondSentence) //1st way
const result = `Hello ${secondSentence}` //2nd way
console.log(result)
console.log(finalSentence)

/*Task 4.1 — Three Reversal Methods
Write a function reverseString(str) three different ways:
Using .split(""), .reverse(), and .join("")
Using a for loop that builds the reversed string character by character


Test all three with "JavaScript" → should return "tpircSavaJ".
Bonus: Which method do you think is fastest? Why?
*/
const programLanguage = 'JavaScript'
const splits = programLanguage.split('')
const reversed = splits.reverse()
const afterReversed = reversed.join('')
console.log(afterReversed)

//another:
console.log('Alternative Way')

const prLanguage = 'JavaScript'
let reverseLanguage = ''
for (const language of prLanguage) {
  reverseLanguage = language + reverseLanguage
  console.log(reverseLanguage)
}

//I think const..of method is faster than Using .split(""), .reverse(), and .join("") method because this method is very short code and modern way of javaScript

// ------------------------------------------

console.log('--------------------Object--------------------')

/*Task 6.1 — Dot vs Bracket Notation
let car = { brand: "Toyota", model: "Corolla", year: 2022 };
Add a new property color: "blue" using bracket notation.
Update year to 2023 using dot notation.
*/

let car = { brand: 'Toyota', model: 'Corolla', year: 2022 }
car.color = 'blue'
car.year = '2024'
console.log(car)

// ------------------------------------------
console.log('--------------------Key--------------------')
/*Task 7.1 — Keys and Values
let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
Get an array of all keys 
Get an array of all 
Delete the pages property using delete.
*/

let book = { title: 'The Hobbit', author: 'Tolkien', pages: 310 }
const allKeys = Object.keys(book)
console.log(allKeys)
console.log(book)
const deleteItem = delete book.pages
console.log(deleteItem)

// -------------------------------------
console.log('------------- Nested Objects-------------')
/*Task 7.2 — Nested Objects
let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701"
  }
}
Log the city using dot notation chaining.
Add a country property inside the address.
Delete the zip property from the nested object.

*/

let user = {
  username: 'coder123',
  address: {
    city: 'Austin',
    zip: '78701',
  },
}
console.log(user.address.city)
user.address.country = 'UK'
console.log(user)
const deleteProperty = delete user.address.zip
console.log(deleteProperty)
console.log(user)

/*Task 8.1 — Loop Through Properties
let scores = { math: 90, science: 85, art: 95 };
Use a for...in loop to log each key and value like: math: 90.
Calculate the average of all values in the loop.
*/

let scores = { math: 90, science: 85, art: 95 }

for (const key in scores) {
  let keys = key
  let value = scores[key]
  console.log(key, ':', value)
}

let average = 0

console.log('-------------Marks Average-----------------')

for (const value in scores) {
  average += scores[value]
}
console.log(average)

// -------------------------------------------------------
console.log('------------------*---------------')
/*Task 9.1 — Contact Book
Build a small "contact" system:
let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};
1.Convert the email to lowercase and update the object.
2.Loop through the contact object and print each key-value pair.
3.Add a new property favoriteWords: [] (an array) — push 3 words to it.
4.Reverse the name string just for fun using one of your three reverse functions from Task 4.1.
5.Check if the email includes "@email.com" (case-insensitive) and log a confirmation message

*/

let contact = {
  name: 'Alex Johnson',
  email: 'ALEX@EMAIL.COM',
  phone: '555-1234',
}

// let updateEmailLowercase = contact.email.toLowerCase()
// contact.email = updateEmailLowercase

contact.email = contact.email.toLowerCase()

console.log(contact)

for (const key in contact) {
  let keys = key
  let value = contact[key]
  console.log(keys, ':', value)
}

// -----------------

contact.favoriteWords = ['JavaScript', 'React Js', 'Coding']
console.log(contact)

// ----------------------------------

const emailUserProvided = contact.email
if (emailUserProvided.toLowerCase().includes('@email.com')) {
  console.log('Valid email domain!')
} else {
  console.log('Invalid email domain!')
}
