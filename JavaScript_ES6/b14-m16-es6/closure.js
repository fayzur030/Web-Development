function cashREgister() {
  let amount = 0
  return function (payableAmount) {
    amount += payableAmount
    return amount
  }
}
let 