function user(name, email, phone, address) {
  return {
    name,
    email,
    phone,
    address,
  }
}

const student = user('Md. Fayzur Rahman', 'fayzur@gmail.com', '01985540299', {
  village: 'srikala',
  post: 'Srikala',
  thana: 'Kaligong',
  district: 'Satkhira',
})

console.log(student)

function multiple(a, b) {
  const result = a * b
  return result
}
const multi = multiple(4, 4)
console.log(multi)
