// Input: a sentence (string)
// Output: the shortest word
// Returns: a string

function findShortestWord(sentence) {
  let words = sentence.split(' ')
  let shortest = words[0]
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i]
    if (currentWord.length < shortest.length) {
      shortest = currentWord
    }
  }

  return shortest
}

console.log(findShortestWord('JavaScript is a fun language')) // Expected: "a"
