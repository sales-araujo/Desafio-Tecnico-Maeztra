// 3 - Crie uma função que recebe uma string com qualquer sequência dos seguintes caracteres '[', '{', '(', ')', '}', ']'
// e retorne se a sequência é uma sequência válida ou não. Uma sequência é válida se as chaves, parênteses e colchetes abrem e fecham corretamente.

// Exemplo:
// { [ ( ) ( ) { } [ ] ] { } } é uma sequência válida
// { [ ( ( ) ] } não é uma sequência válida (Há um parêntese posicionado incorretamente)
// { } [ ] ( ) é uma sequência válida
// ( ( ) { } [ [ ] ) não é uma sequência válida (Há uma chave posicionado incorretamente) [ { } ( [ ) ] ] não é uma sequência válida (O número de caracteres está correto, mas o posicionamento de uma chave/parêntese está incorreto)

/**
 * Checks if a string containing '[', '{', '(', ')', '}', ']' characters is valid.
 * @param {string} str - The string to be checked.
 * @returns {string} Returns "Sequência válida" if the sequence is valid, otherwise returns "Sequência inválida".
 */
function isValidSequence(str) {
  // Remove os espaços em branco da sequência
  str = str.replace(/\s/g, '')

  const stack = []
  const openingToClosing = {
    '[': ']',
    '{': '}',
    '(': ')'
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    if (openingToClosing[char]) {
      stack.push(char)
    } else if (char === ']' || char === '}' || char === ')') {
      const lastOpening = stack.pop()
      if (!lastOpening || openingToClosing[lastOpening] !== char) {
        return 'Sequência inválida'
      }
    } else {
      return 'Sequência inválida'
    }
  }

  return stack.length === 0 ? 'Sequência válida' : 'Sequência inválida'
}

// Tests
console.log(isValidSequence('{ [ ( ) ( ) { } [ ] ] { } }')) // Sequência válida
console.log(isValidSequence('{ [ ( ( ) ] }')) // Sequência inválida
console.log(isValidSequence('{ } [ ] ( )')) // Sequência válida
console.log(isValidSequence('( ( ) { } [ [ ] )')) // Sequência inválida
console.log(isValidSequence('[ { } ( [ ) ] ]')) // Sequência inválida
