// Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary)

const user = 'fayzur'
const password = '123456'
const role = 'admin'
const isBlock = false
const failedAttempts = 1
let message

// Input Validation

if (user === '' && password === '') {
  message = 'Please enter your username and password'
} else if (user === '') {
  message = 'please enter your username'
} else if (password === '') {
  message = 'please enter your password'
}

// Password length check
else if (password.length < 6) {
  message = 'Password must be at least 6 characters'
}
// block checker
else if (isBlock) {
  message = 'Your account is block'
} else if (failedAttempts >= 3) {
  message = 'Your account blocked'
}
// Login
else if (user === 'fayzur' && password === '123456') {
  if (role === 'admin' && password === '123456') {
    message = 'Welcome Admin'
    const dashboard = role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'
    console.log(dashboard)
  } else {
    message = 'Welcome user'
  }
} else {
  message = 'Invalid credentials'
}

console.log(message)
