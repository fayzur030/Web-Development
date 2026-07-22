const student = {
  firstName: 'Md. Fayzur',
  lastName: 'Rahman',
  age: 22,
  class: `Honour's 1st year`,
  location: {
    village: 'Srikala',
    post: 'Srikala',
    thana: 'Kaligonj',
    district: 'Satkhira',
  },
}

for (const key in student) {
  //   console.log(key)
  const value = student[key]
  console.log(key, ':', value)
}

const str = 'Hello'
// console.log(str.split(''))
console.log(student)

const person = {
  name: 'Sakib',
  age: 25,
}
console.log(Object.keys)
