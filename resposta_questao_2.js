// 2 - Crie uma função que receba um array de inteiros como parâmetro
// e verifique se neste array existem números duplicados,
// caso exista, retorne um novo array com os valores que se repetem.

// Exemplo:
// Input [4,5,44,98,4,5,6,7] → Output [4,5]

/**
 * Find duplicates in an array of integers.
 * @param {number[]} array - The array of integers to check.
 * @returns {number[]} Returns an array containing the duplicate integers found in the input array.
 */

function findDuplicates(array) {
  const countMap = {}
  const duplicates = []

  array.forEach(num => {
    if (countMap[num]) {
      countMap[num]++
    } else {
      countMap[num] = 1
    }
  })

  for (const num in countMap) {
    if (countMap[num] > 1) {
      duplicates.push(parseInt(num))
    }
  }

  return duplicates
}

// Tests
console.log(findDuplicates([4, 5, 44, 98, 4, 5, 6, 7])) // Output [4, 5]
console.log(findDuplicates([1, 2, 3, 4])) // Output []
console.log(findDuplicates([1, 1, 2, 2])) // Output [1, 2]
console.log(findDuplicates([5, 5, 5, 5])) // Output [5]
console.log(findDuplicates([10, 20, 30, 10])) // Output [10]
console.log(findDuplicates([9, 9, 9, 1, 2, 3, 55, 0, 2, 6, 4, 55, 20, 21, 3])) // Output [2, 3, 9, 55]
console.log(findDuplicates([14, 42, 73, 91, 42, 34, 57, 91, 14, 73])) // Output [14, 42, 73, 91]
console.log(findDuplicates([3, 56, 3, 17, 77, 56, 92, 100, 17, 11])) // Output [3, 17, 56]
console.log(findDuplicates([65, 27, 83, 1, 65, 1, 83, 54, 27, 100])) // Output [1, 27, 65, 83]

