const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(param) {
  const uniqueSet = new Set(param)

  return Array.from(uniqueSet)
}

console.log(removeDuplicates(duplicates))
