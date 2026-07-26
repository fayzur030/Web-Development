//Project 2 — Shopping Cart System ⭐⭐
//function1
const cart = []
function addProduct(name, price, quantity) {
  const product = {
    name,
    price,
    quantity,
  }
  cart.push(product)
  return product
}

const product1 = addProduct('t-shirt1', 450, 1)
const product2 = addProduct('t-shirt3', 350, 1)
const product3 = addProduct('t-shirt6', 550, 1)
// console.log(cart)

// function 2
function removeProduct(name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      const removed = cart.splice(i, 1)
      // console.log('remove product:', removed)
      return removed
    }
  }
  return 'Product not found'
}
removeProduct('t-shirt6')
// console.log(cart)

//function 3
function updateQuantity(name, quantity) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      const qun = (cart[i].quantity = quantity)
      console.log(qun)
    }
  }
  return 'quantity not found'
}
updateQuantity('t-shirt1', 4)
// console.log(cart)

//function 4

function calculateSubtotal(quantity, price) {
  let subTotal = 0
  for (let i = 0; i < cart.length; i++) {}
}
