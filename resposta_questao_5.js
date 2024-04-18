// 5 - Um grupo de amigos será colocado lado a lado para tirar uma foto.
// De quantos modos distintos os amigos podem se organizar para tirar a foto?
// Desenvolva uma função que receba um número de pessoas (valor inteiro) e retorne quantas
// possibilidades de organização existem para que o fotografo saiba o número de modos
// distintos que esse grupo e outros grupos possam se organizar.

/**
 * Calculates the number of distinct arrangements for a group of people to take a photo.
 * @param {number} numberOfPeople - The number of people in the group.
 * @returns {number} The number of distinct arrangements.
 */
function possiblePositions(numberOfPeople) {
  if (numberOfPeople === 0 || numberOfPeople === 1) {
    return 1
  } else {
    let factorial = 1
    for (let i = 2; i <= numberOfPeople; i++) {
      factorial *= i
    }
    return factorial
  }
}

// Tests
console.log('Possíveis posições: ', possiblePositions(1)) // Output: 1
console.log('Possíveis posições: ', possiblePositions(2)) // Output: 2
console.log('Possíveis posições: ', possiblePositions(5)) // Output: 120
console.log('Possíveis posições: ', possiblePositions(10)) // Output: 3628800

