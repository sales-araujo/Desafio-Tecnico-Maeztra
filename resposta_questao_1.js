// 1 - Crie uma função que receba um valor INTEIRO positivo, e verifique se os DÍGITOS estão em ordenação sequencial CRESCENTE ou DECRESCENTE.
// Pode considerar dígitos iguais como sequenciais (Variação de um dígito para o outro deve ser 1 ou menor)

// Exemplo:
// Input 12345678 -> Está ordenado
// Input 1223455678 -> Está ordenado
// Input 876543210 -> Está ordenado
// Input 152456457 -> Não está ordenado
// Input 12356789 -> Não está ordenado
// Input 13579 -> Não está ordenado
// Input 9765421 -> Não está ordenado
// Input 123454321 -> Não está ordenado
// Input 12222222 -> Está ordenado
// Input 2111111 -> Está ordenado
// Input 1599 -> Não está ordenado

function verificaOrdenacao(num) {
  const numArray = Array.from(String(num), Number)

  // Verificar se está em ordem crescente
  let isAscending = true
  for (let i = 0; i < numArray.length - 1; i++) {
    if (numArray[i] !== numArray[i + 1] - 1) {
      isAscending = false
      break
    }
  }

  // Verificar se está em ordem decrescente
  let isDescending = true
  for (let i = 0; i < numArray.length - 1; i++) {
    if (numArray[i] !== numArray[i + 1] + 1) {
      isDescending = false
      break
    }
  }

  // Verificar se está ordenado
  if (isAscending || isDescending) {
    return 'Está ordenado'
  } else {
    return 'Não está ordenado'
  }
}

console.log(`Input 12345678 -> ${verificaOrdenacao(12345678)}`)
console.log(`Input 1223455678 -> ${verificaOrdenacao(1223455678)}`)
console.log(`Input 876543210 -> ${verificaOrdenacao(876543210)}`)
console.log(`Input 152456457 -> ${verificaOrdenacao(152456457)}`)
console.log(`Input 12356789 -> ${verificaOrdenacao(12356789)}`)
console.log(`Input 13579 -> ${verificaOrdenacao(13579)}`)
console.log(`Input 9765421 -> ${verificaOrdenacao(9765421)}`)
console.log(`Input 123454321 -> ${verificaOrdenacao(123454321)}`)
console.log(`Input 12222222 -> ${verificaOrdenacao(12222222)}`)
console.log(`Input 2111111 -> ${verificaOrdenacao(2111111)}`)
console.log(`Input 1599 -> ${verificaOrdenacao(1599)}`)

