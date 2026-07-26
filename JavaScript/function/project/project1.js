//Project 1 — Student Result Management System ⭐
//addStudent
function addStudent(name, marks) {
  return {
    name: name,
    marks: marks,
  }
}
const studentData = addStudent('Fayzur', [80, 75, 90])
console.log(studentData)

// calculateAverage(marks)
function calculateAverage(marks) {
  let average = 0
  for (const mark of marks) {
    average += mark / 3
  }
  return {
    Average: average.toFixed(2),
  }
}
const studentAverageMarks = calculateAverage([80, 75, 90])
console.log(studentAverageMarks)

//getGrade(average)

function getGrade(average) {
  for (let i = 0; i < average; i++) {
    if (average >= 80) {
      return 'A+'
    } else if ((average < 80, average >= 70)) {
      return 'A'
    } else if ((average < 70, average >= 60)) {
      return 'A-'
    } else if ((average < 60, average >= 50)) {
      return 'B'
    } else if (average < 33) {
      return 'Oops! You are failed '
    }
  }
  return {
    Grade: grade,
  }
}
const grade = getGrade(84)
console.log(grade)

// isPassed(average)

function isPassed(average) {
  let message = ''
  if (average > 33) {
    message = 'Passed'
  } else {
    message = 'Oops! You are failed'
  }
  return {
    Status: message,
  }
}
const status = isPassed(87.66)
console.log(status)
