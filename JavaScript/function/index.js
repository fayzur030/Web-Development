// function checkNumbers(number) {
//   if (number % 2 === 0) {
//     let message = 'This is even number'
//     return message
//   } else {
//     let message = 'This is odd number'
//     return message
//   }
// }
// const result = checkNumbers(50)
// // console.log(result)
// function checkNumbers2(number) {
//   if (number % 2 === 1) {
//     let message = 'This is odd number'
//     return message
//   } else {
//     let message = 'This is even number'
//     return message
//   }
// }
// const result2 = checkNumbers2(50)
// console.log(result2)

// function sumNumber(number2) {
//   let sum = 0
//   for (let i = 0; i < number2; i++) {
//     sum = sum + i
//   }
//   return sum
// }

// const result = sumNumber(17)
// console.log(result)

//problem 4

// function fizzBuzz(number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz')
//     } else if (i % 3 === 0) {
//       console.log('Fizz')
//     } else if (i % 5 === 0) {
//       console.log('Buzz')
//     } else {
//       console.log(i)
//     }
//   }
// }

// fizzBuzz(15)

// string reverse

// let str = 'Programming'
// const step_1 = str.split('')
// const step_2 = step_1.reverse()
// const step_3 = step_2.join('')
// console.log(step_3)

// string reverse method 2 without function

// let str = 'Programming'
// let reversedStr = ''

// for (const item of str) {
//   reversedStr = item + reversedStr
// }
// console.log(reversedStr)

//With function
// -------------------------------------------------------------------------// -------------------------------------------------------------------------
// function reverseWord(word) {
//   let reversedLanguage = ''
//   for (let i = word.length - 1; i >= 0; i--) {
//     let letter = word[i]
//     reversedLanguage += letter
//   }
//   return reversedLanguage
// }

// const resultStr = reverseWord('I Love Bangladesh')
// console.log(resultStr)

function reverseWord(sentence) {
  let reverseSentence = ''
  for (const sen of sentence) {
    reverseSentence = sen + reverseSentence
  }
  return reverseSentence
}
// console.log(reverseWord('I love Bangladesh'))
// -------------------------------------------------------------------------// -------------------------------------------------------------------------
// let sentence = 'Programming hero'
// let count = 0
// let vowelsArray = ['a', 'e', 'i', 'o', 'u']
// for (let i = 0; i < sentence.length; i++) {
//   let letter = sentence[i].toLowerCase()
//   if (vowelsArray.includes(letter)) {
//     count++
//   }
// }
// console.log(count)
// -------------------------------------------------------------------------// -------------------------------------------------------------------------
// let vowelsArray = ['a', 'e', 'i', 'o', 'u']
// function vowelCount(sentence) {
//   let count = 0
//   for (const sen of sentence) {
//     if (vowelsArray.includes(sen)) {
//       count++
//     }
//   }
//   return count
// }
// console.log('Vowel asey:', vowelCount('My name is Fayzur eeeee'))
// console.log('Vowel asey:', vowelCount('My name is Fayzur eeeescsuuuue'))

// -------------------------------------------------------------------------// -------------------------------------------------------------------------

// function isPalindrome(str) {
//   let reversePalindrome = ''
//   for (const pal of str) {
//     reversePalindrome = pal + reversePalindrome
//   }
//   console.log(reversePalindrome)
//   if (str === reversePalindrome) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(isPalindrome('Ata'))

// -------------------------------------------------------------------------// -------------------------------------------------------------------------

// function largestNumber(arr) {
//   let largest = arr[0]
//   for (let i = 0; i < arr.length; i++) {
//     let currentNumber = arr[i]
//     if (currentNumber > largest) {
//       largest = currentNumber
//     }
//   }
//   return largest
// }
// const result = largestNumber([12, 25, 10, 45, 20])
// console.log(result)

// -------------------------------------------------------------------------// -------------------------------------------------------------------------

// function averageNumbers(numbers) {
//   let sum = 0
//   for (const num of numbers) {
//     sum += num
//   }
//   const average = sum / numbers.length
//   return average.toFixed(2)
// }
// console.log(averageNumbers([12, 21, 21, 24, 15, 47, 48]))

// -------------------------------------------------------------------------// -------------------------------------------------------------------------

function filterNumber(arr, value) {
  let filterArray = []
  for (const num of arr) {
    if (num > value) {
      filterArray.push(num)
    }
  }
  return filterArray
}
console.log(filterNumber([10, 20, 30, 50, 70, 90], 20))
