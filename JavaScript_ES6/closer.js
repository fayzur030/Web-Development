// const temporary = () => {
//   let counter = 0
//   return function () {
//     counter += 1
//     console.log(counter)
//   }
// }

// const add = temporary()
// add()
// add()
// add()
// add()

const createCounter = () => {
  let counter = 0
  return function () {
    counter += 1
    // console.log(counter)
  }
}
const counter = createCounter()
counter()
counter()
counter()
counter()

//Task 2: Decrease Counter

const decCounter = () => {
  let counter = 0
  return function () {
    counter -= 1
    // console.log(counter)
  }
}

const dec = decCounter()
dec()
dec()
dec()

//Task 4: Step Counter
const incrementCounter = (start, howMuch) => {
  let counter = start
  return function () {
    counter += howMuch
    // console.log(counter)
  }
}
const increment = incrementCounter(100, 5)
increment()
increment()
increment()

//⭐ Challenge Task (Interview Level)
const bankAccount = (initialAmount) => {
  let totalAmount = initialAmount
  let transactionHistory = []

  return {
    deposit(amount) {
      totalAmount += amount
      transactionHistory.push(`deposit: ${amount}`)
      return totalAmount
    },
    withdraw(amount) {
      if (amount > totalAmount) {
        return 'Insufficient Balance'
      } else {
        totalAmount -= amount
        transactionHistory.push(`withdraw: ${amount}`)
        return totalAmount
      }
    },
    balance() {
      return totalAmount
    },

    history() {
      return transactionHistory
    },
  }
}

const account = bankAccount(1000)

console.log(account.deposit(500)) // 1500
console.log(account.withdraw(300)) // 1200
console.log(account.balance()) // 1200
console.log(account.withdraw(2000)) // Insufficient Balance
console.log(account.balance()) // 1200
console.log(account.history())
