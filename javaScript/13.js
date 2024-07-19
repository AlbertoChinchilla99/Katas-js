const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(array, nameToFind) {
  const index = array.indexOf(nameToFind)

  if (index !== -1) {
    return { exists: true, position: index }
  } else {
    return { exists: false }
  }
}

console.log(finderName(nameFinder, 'Tony'))
console.log(finderName(nameFinder, 'John'))
