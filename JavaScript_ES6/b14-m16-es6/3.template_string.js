let name = "Utsho";
let price = 500;
let quantity = 5;

// let location = "Badda, Dhaka"

// let message = "Hello " + name + ". Your bill is " + price
// let message = `Hello, ${name}. Your bill is ${price * quantity}.

// line 1
// line 2
// line 3
// `

// console.log(message);

let amount = 2500;

function admissionConnfirmationMail(name, amount) {
  let message = `Hello, ${name || "student"},
              Your payment is successful.
              Your paid amount is ${amount}`;
  return message;
}

console.log(admissionConnfirmationMail("Utsho", 3000));
console.log(admissionConnfirmationMail(undefined, 5000));
