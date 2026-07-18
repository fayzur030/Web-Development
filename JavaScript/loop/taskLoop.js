// Task 1 — Print "Hello" Five Times Write a for loop that prints "Hello" 5 times.
for (let i = 0; i <= 5; i++) {
  console.log('Hello')
}

// Task 2 — Print Numbers 1 to 10 Write a for loop that prints numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(i)
}

// Task 3 — Countdown with While Loop Write a while loop that prints numbers from 10 down to 1.

let taskNUmber = 10
while (taskNUmber >= 1) {
  console.log(taskNUmber)
  taskNUmber--
}

// Task 4 — Repeat a Message Using a while loop, print "Loop চলছে" exactly 7 times.
let messageNumber = 1
while (messageNumber <= 7) {
  console.log('Loop চলছে"')
  messageNumber++
}

// Task 5 — Even Numbers Write a for loop that prints all even numbers between 1 and 30.

for (let i = 2; i <= 30; i += 2) {
  console.log(i)
}

console.log('sum even number')

// Task 6 — Sum of Numbers Write a for loop that calculates the sum of numbers from 1 to 20 and prints the result.

let sum = 0

for (i = 1; i <= 20; i++) {
  sum += i
}
console.log(sum)

// Task 7 — Multiplication Table Ask the user for a number (or set a variable), then print its multiplication table from 1 to 10 using a for loop. Example: if the number is 7 → 7 x 1 = 7, 7 x 2 = 14, ... 7 x 10 = 70.

console.log('Multiplication')

let number = 7
for (let i = 1; i <= 10; i++) {
  console.log(number, '×', i, '=', number * i) //mathematical multiply symbol (×)  hold the Alt key and type 0215 on the numeric keypad.
}

//Task 8 — Count Down from 20 Write a for loop that counts down from 20 to 1.
for (let i = 20; i >= 1; i--) {
  console.log(i)
}

//Task 9 — Sum of Even Numbers Write a for loop that calculates the sum of all even numbers from 2 to 50.

console.log('Sum of even number 2-50')
let sum2 = 0

for (let i = 2; i <= 50; i += 2) {
  sum2 += i
}
console.log(sum2)

// Task 10 — Using Break Write a for loop from 1 to 50 that stops completely (break) as soon as it reaches a number greater than 30.
for (let i = 1; i <= 50; i++) {
  if (i > 30) {
    break
  }
  console.log(i)
}

// Task 11 — Using Continue Write a for loop from 1 to 20 that skips (continue) any number divisible by 4.

console.log('task 11')

for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue
  }
  console.log(i)
}
