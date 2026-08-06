const receiptGenerator = (name, price, qty) => {
  return `${name} x${qty} = ${price * qty} Taka`
}
console.log(receiptGenerator('pen', 20, 3))
console.log(receiptGenerator('book', 200, 4))
