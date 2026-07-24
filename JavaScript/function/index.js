function sum(x, y) {
  const result = x + y
  return result
}
const total = sum(5, 6)
console.log(total)

function someText(title, subTitle, year) {
  return {
    title,
    subTitle,
    year,
  }
}

const firstWord = someText('Fayzur', 'Web developer', 2026)
console.log(firstWord)
