const subject = 'chemistry'
const book = 'Chemistry'

// if (subject.toLowerCase() === book.toLowerCase()) {
//   console.log('subject is same')
// } else {
//   console.log('subject is not same')
// }

//case-sensitive

const emailUserProvided = 'mdfayzurrahman030@gmail.com'
const emailSaveInDatabase = 'mdFayzurrahman030@gmail.com'
if (emailUserProvided.toLowerCase() === emailSaveInDatabase.toLowerCase()) {
  // console.log('This email is correct')
} else {
  // console.log('This email is not correct')
}

// trim()

const email = 'fayzurrahman030@gmail.com '
const conformEmail = 'fayzurrahman030@gmail.com'

if (email.trim() === conformEmail.trim()) {
  console.log('User login')
} else {
  console.log('Please valid email address')
}
