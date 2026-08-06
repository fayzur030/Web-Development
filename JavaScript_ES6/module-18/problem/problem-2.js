// const calculateTotal = (price, ...restPrice) => {
//   let total = 0
//   let discountNum = price
//   for (const rn of restPrice) {
//     total += rn

//   }
//   let discountAmount = total * (discountNum / 100)
//   let discount = total - discountAmount
//   return discount
// }
// console.log(calculateTotal(10, 100, 200, 50, 300))
// // console.log(calculateTotal(17, 1000, 2010, 510, 300))

const calculateTotal = (discount, ...restPrice) => {
  if (!discount) {
    discount = 0
  }
  let discountNum = discount
  let total = restPrice.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  let discountAmount = total * (discountNum / 100)
  let totalDiscountApply = total - discountAmount
  return totalDiscountApply
}
console.log(calculateTotal(10, 100, 200, 50, 300))
// console.log(calculateTotal(17, 1000, 2010, 510, 300))

/*problem : Merge and duplicates arrays merge two arrays and remove duplicates using spread + set
Example: [1,2,3] + [1. 2, 3 , 4]
*/

let arr1 = [10, 20, 30, 40, 50]
let arr2 = [50, 60, 20, 90]
let mergeArray = [...arr1, ...arr2]

// let newArr = []
// for (let i = 0; i < mergeArray.length; i++) {
//   if (!newArr.includes(mergeArray[i])) {
//     newArr.push(mergeArray[i])
//   }
// }

let newArr = [...new Set(mergeArray)]

console.log(newArr)


