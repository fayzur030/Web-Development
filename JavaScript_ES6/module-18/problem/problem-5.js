const students = [
  {
    name: 'Fayzur',
    marks: 85,
  },
  {
    name: 'Rafi',
    marks: 50,
  },
  {
    name: 'Robiul',
    marks: 70,
  },
]
const addGrade = (students) => {
  const getGrade = (marks) => {
    return typeof marks != 'number'
      ? 'Invalid'
      : marks >= 80
        ? 'A+'
        : marks >= 70
          ? 'A'
          : marks >= 60
            ? 'A-'
            : marks >= 50
              ? 'B'
              : 'Fail'
  }

  const modifiedStudents = students.map((student) => {
    const { name, marks } = student
    const newStudentGrade = { name, marks, grade: getGrade(marks) }
    return newStudentGrade
  })
  return modifiedStudents
}
console.log(addGrade(students))


