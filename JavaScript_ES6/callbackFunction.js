//A callback is a function passed as a argument to another function
// I will call back later
function registerStudent(cb) {
  console.log('user is resister. need more data')
  cb() //  callback function call here
}

function userBasicInfo() {
  let student = {
    name: 'Fayzur',
    age: 22,
    roll: 15,
  }
  console.log(student)
}

function passedAcademicInfo() {
  let academicInfo = {
    ssc: 'GPA-5',
    hsc: 'GPA- 4.64',
  }
  console.log(academicInfo)
}

// console.log(registerStudent(userBasicInfo)) // basic info passed
// console.log(registerStudent(passedAcademicInfo))

function calculator(a, b, cb) {
  let sum = a + b
  cb(sum)
}
// console.log(calculator(5, 10))
function displayResult(result) {
  //   console.log(result)
}

calculator(5, 10, displayResult)

function calculator2(a, b, cb) {
  let sum = a + b
  let average = sum / 2
  cb(average)
}

function displayAverage(result) {
  console.log(result)
}
calculator2(40, 50, displayAverage)
