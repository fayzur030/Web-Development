//pass by primitive data type

function values(num) {
  num = 100
}
let a = 10
values(a)
console.log(a)

//-----------------------------------------
//pass by referential data type

function reference(obj) {
  obj.name = 'Rafi' // mutation : kno property change korley

  obj = { name: 'Abul', age: 55 } // change hobey na , actual data change hobey na
}

let person = {
  name: 'Fayzur',
  age: 22,
}
person.class = 'Honours 2nd year'

reference(person)
console.log('objet:', person.name)
console.log(person)
