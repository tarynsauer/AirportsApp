export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}

export function randomize(array) {
  return shuffle(array).slice(0, 5).sort()
}

export function sortBy(array, property) {
  return array.sort((a, b) => b[property] - a[property])
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}
