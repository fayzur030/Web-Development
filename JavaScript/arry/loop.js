//for of loop: mostly uses:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15]
for (const number of numbers) {
//   console.log('Current value:', number)
}

//Alternative way

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15]

for (let i = 0; i < numbers4.length; i++) {
  const element = numbers4[i]
  console.log('value:', i)
}
