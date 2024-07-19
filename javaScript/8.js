const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(param) {
  let = longestword = ''
  for (const word of param) {
    if (word.length > longestword.length) {
      longestword = word
    }
  }
  return longestword
}

console.log(findLongestWord(avengers))
