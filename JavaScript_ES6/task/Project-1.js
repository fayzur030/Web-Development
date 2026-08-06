const products = [
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    price: 850,
    stock: 12,
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Mouse',
    category: 'Electronics',
    price: 20,
    stock: 0,
    rating: 4.4,
  },
  {
    id: 3,
    name: 'T-Shirt',
    category: 'Fashion',
    price: 25,
    stock: 30,
    rating: 4.1,
  },
  {
    id: 4,
    name: 'Phone',
    category: 'Electronics',
    price: 650,
    stock: 15,
    rating: 4.9,
  },
  {
    id: 5,
    name: 'Shoes',
    category: 'Fashion',
    price: 80,
    stock: 7,
    rating: 4.3,
  },
]

//task-1: show name
const productsName = products.map((product) => {
  return product.name
})
// console.log(productsName)

//task-2: filter Electronics

let findElectronics = products.filter((p) => p.category === 'Electronics')
// console.log(findElectronics)

//✅ Task 3 — Out of Stock

const outOfStock = products.filter((p) => p.stock === 0)
// console.log(outOfStock)

//✅ Task 4 — Top Rated Products:

const toRatedProducts = products.filter((p) => p.rating >= 4.5)
// console.log(toRatedProducts)

//✅ Task 5 — Find Product (id = 4)

const findSpecificProduct = products.find((p) => p.id === 4)
// console.log(findSpecificProduct)

// Task 6 - discount price

const discountProduct = products.map((product) => {
  return {
    ...product,
    price: product.price * 0.9,
  }
})
// console.log(discountProduct)

//Task 7- Total Inventory Value
const totalInventory = products.reduce((accumulator, product) => {
  return accumulator + product.price * product.stock
}, 0)
// console.log(totalInventory)

// Task 8 — Average Rating

const sum = (arr) => {
  let total = 0
  const averageRating = arr.reduce((accumulator, p) => {
    return accumulator + p.rating
  }, 0)
  return averageRating / arr.length
}

// console.log(sum(products))

//✅ Task 9 — Cheapest Product

const cheapestProduct = (arr) => {
  const lowerProduct = arr.reduce((cheapest, current) => {
    return current.price < cheapest.price ? current : cheapest
  }, arr[0])
  return lowerProduct
}
// console.log(cheapestProduct(products))

//✅ Task 10 — Most Expensive Product
const expensiveProduct = (arr) => {
  const expensive = arr.reduce((expensive, currentProduct) => {
    return currentProduct.price > expensive.price ? currentProduct : expensive
  }, arr[0])
  return expensive
}

// console.log(expensiveProduct(products))

//✅ Task 11 — Low Stock (stock < 10)
const lowStock = (arr) => {
  const lowerStock = arr.filter((low) => {
    return low.stock < 10
  })
  return lowerStock
}
// console.log(lowStock(products))

//✅ Task 12 — Product Summary

const productSummary = (productArray) => {
  const summary = productArray.map((item) => {
    return {
      // ...item,
      name: item.name,
      available: item.stock > 0,
    }
  })
  return summary
}
console.log(productSummary(products))
console.log(products)
