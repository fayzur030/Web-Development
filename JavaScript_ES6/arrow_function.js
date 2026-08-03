function sayHello(name) {
  return `Hello ${name}, Good morning`
}
console.log(sayHello('Fayzur'))

//Arrow function syntax:

// const greeting = () => {
//   return 'Something'
// }

//Implicit return
const greeting = (name) => `Hello ${name}, Good morning` // arrow function a single statement a return dewa lagey na
console.log(greeting('Fayzur Rahman'))

// for empty and multiple parameter => first bracket is required
// for single parameter => first bracket is optional

const student = {
  name: 'Fayzur Rahman',
  age: 22,
  showName: function showName() {
    // return `My name is ${student.name}`
    return `My name is ${this.name}`
  },
  showAge: () => {
    // return `I am ${student.age} years old` // arrow function a this keyword er nijossho kno value nai
    return `I am ${this.age} years old`
  },
}
console.log(student.showName())
console.log(student.showAge())
