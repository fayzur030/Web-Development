function studentConfirmationMail(name, amount) {
  let message = `      Hello, ${name ? name : 'student'}!
            Your payment is successfully paid
             Your paid amount is ${amount}
  `
  return message
}

console.log(studentConfirmationMail(undefined, 2500))
