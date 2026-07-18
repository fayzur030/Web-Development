// Task 1: Guess the result '5'==5 and '5'=== 5 first, then write code to verify your guess
const number = 5
const number1 = '5'
let finalNumber
if (number == number1) {
  finalNumber = true
} else {
  finalNumber = false
}
console.log(finalNumber)

if (number === number1) {
  finalNumber = true
} else {
  finalNumber = false
}
console.log(finalNumber)

// Task 2 : Create a Variable isRaning (true/false). If it true, print 'Take an umbrella'

const isRaning = true

if (isRaning) {
  let print
  console.log('Take an umbrella')
} else {
  console.log('Take a sunglass')
}

// Task 3: Take a variable stock. If stock is 0 , print 'Out of stock' (use only if, no else)

const stock = 0
if (stock === 0) {
  console.log('Out of stock')
}

// Task 4 : Take a speed variable, If speed is greater than 80, print 'Overspeeding', otherwise print 'Normal speed'

const speed = 80
if (speed > 80) {
  console.log('Overspeeding')
} else {
  console.log('Normal speed')
}

// Task 5 : Take a year variable and check whether it is a leap year
const year = 3400
let leapYear

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      leapYear = 'This year is leap Year'
    } else {
      leapYear = 'This year is not a leap year'
    }
  } else {
    leapYear = 'This is a leap year'
  }
} else {
  leapYear = 'This year is not a leap year'
}
console.log(leapYear)

// Task 6: Using age and hasTicket, print "Entry allowed" if age is above 18 AND the person has a ticket (use &&).

const age = 20
const hasTicket = true
if (age >= 18 && hasTicket === true) {
  console.log('Entry allowed')
} else {
  console.log('Entry not allowed')
}

// Task 7 : Using isWeekend and isHoliday, print "No work today" if either one is true (use ||).

const isWeekend = true
const isHoliday = false

if (isWeekend || isHoliday) {
  console.log('No work today')
} else {
  console.log('I have work')
}

// Task 8 : Build a simple login system — print "Login successful" only if both username and password are correct.
const role = 'admin'
const password = '123456'
let message
if (role === '' && password === '') {
  message = 'Please enter your username and password'
} else if (role === '') {
  message = 'Please enter your username'
} else if (password === '') {
  message = 'Please enter your password'
} else if (role === 'admin' && password === '123456') {
  message = 'Login successfully'
} else {
  message = 'Invalid credentials'
}
console.log(message)

// Task 9 : Using a month number (1-12), determine which season that month falls in (Winter, Summer, Monsoon, etc.).

const month = 7
if (month >= 1 && month <= 2) {
  console.log('This is Summer')
} else if (month >= 3 && month <= 4) {
  console.log('This is Monsoon')
} else if (month >= 5 && month <= 6) {
  console.log('This is Autumn')
} else if (month >= 7 && month <= 8) {
  console.log('This is Hemonto')
} else if (month >= 9 && month <= 10) {
  console.log('This is Winter')
} else if (month >= 11 && month <= 12) {
  console.log('This is Spring')
} else {
  console.log('Invalid month')
}

// Task 10: Using age and hasID, use nested if-else to check whether someone is eligible to vote

const voteAge = 20
const hasID = true

if (voteAge >= 18) {
  if (hasID) {
    console.log('Go to Vote')
  } else {
    console.log('You are not voter')
  }
} else {
  console.log('Your are so small')
}

// Task 11: Using isLoggedIn and isAdmin, build a nested condition — if logged in and admin, print "Admin Dashboard"; if logged in but not admin, print "User Dashboard"; if not logged in, print "Please Login".

const isLoggedIn = true
const isAdmin = true

if (isLoggedIn) {
  if (isAdmin) {
    console.log('Admin Dashboard')
  } else {
    console.log('User Dashboard')
  }
} else {
  console.log('Please login')
}

// Task 12:  Determine whether a number is even or odd using the ternary operator.

const number_4 = 24
let result

result = number_4 % 2 === 0 ? 'This is even number' : 'This is odd number'
console.log(result)

// Task 13 :  Using age, determine "Adult" or "Minor" using the ternary operator.
const userAge = 42
let adult_minor

adult_minor = userAge >= 18 ? 'Adult' : 'Minor'
console.log(adult_minor)

//  Task 14: Using hasPermission, use the ! operator to print "Access Denied" if permission is not granted.

const hasPermission = true

if (!hasPermission) {
  console.log('Access Denied')
} else {
  console.log('Access')
}


