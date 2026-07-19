const playerName = [
  'Tamim Iqbal',
  'Liton Das',
  'Shakib Al Hasan',
  'Musfiqur Rahim',
  'Mahamadullah ',
  'Mashrafi',
]

const newPlayer = playerName.push('Mustafizur Rahman', 'Taskin', 'Nahid Rana')
// console.log(playerName)

const players = [
  'Tamim Iqbal',
  'Liton Das',
  'Shakib Al Hasan',
  'Musfiqur Rahim',
  'Mahamadullah ',
  'Mashrafi',
]
const players2 = [
  ' Iqbal',
  ' Das',
  'Shakib ',
  'Musfiqur ',
  'Mahamadullah ',
  'Mashrafi',
]
const combine = players.concat(players2)
// console.log(combine)

const join = players.join(' , ')
console.log(join)

const index = players[14]
// console.log(index)

// const afterReverse = []
// for (const player of players) {
//   console.log(player)
//   afterReverse.unshift(player)
//   console.log(afterReverse)
// }
