
// Destructuring for array
const numbers = [10, 20, 30, 40, 50]
// const ten = numbers[0]
// const twenty = numbers[1]
const  [ten, twenty, , , fifty] = numbers

// console.log(ten, twenty, fifty);


// Destructuring for object

const student = {
    name: "Utsho",
    roll: 29,
    age: 26, 
    marks: {
        physics: 95,
        philosophy: 91,
        math: 44
    }
}
// const name = student.name
// const roll = student.roll
// const math = student.marks.math
const { age , name:fullName, marks: { philosophy, physics:myPhysics } } = student

console.log(age, fullName,  philosophy, myPhysics);