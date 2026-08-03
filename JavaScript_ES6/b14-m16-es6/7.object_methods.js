// Object methods: Keys, values, entries, delete, seal, freeze

const user = {
    name: "John Doe",
    age: 35,
    id: 40003
}

const keys = Object.keys(user)
const values = Object.values(user)
const entries = Object.entries(user)

// console.log(entries);

// for(let elem of keys){
//     console.log(elem, user[elem]);
// }

// for(let elem of entries){
//     const [key, value] = elem
//     console.log(key, value);
// }

// delete method
// delete user.age
// delete user.name
// console.log(user);




// seal 
// Add and delete not allowed but edit is allowed
const bankAccount = {
    accountNumber: "1234",
    balance: 5000
}

Object.seal(bankAccount)

delete bankAccount.balance
bankAccount.nomineeName = "Something"
// bankAccount.balance = 300

// console.log(bankAccount);


// freeze
// Add , edit and delete not allowed
const birthCertificate  = {
    name: "Utsho",
    birthDate: "05-05-2000",
    cerNumber: "423424234234234"
}

Object.freeze(birthCertificate)

delete birthCertificate.name
birthCertificate.cerNumber = "123"
birthCertificate.new = "test"

console.log(birthCertificate);