// 4 - Considere um conjunto de pessoas aposentadas, onde cada pessoa começou a trabalhar em ano X e aposentou em ano Y. Crie uma função que receba uma matriz na seguinte estrutura [[x1,y1],[x2,y2],...[xn,yn]] e calcule em qual/quais ano/anos houve mais pessoas trabalhando.

// Considere:

// Os valores de X como o ano que os indívíduos começaram a trabalhar (x>0, x<y );
// Os valores de Y como o ano que os indívíduos se aposentaram (y>0);
// O ano de início deve ser considerado como ano trabalhado;
// O ano de aposentadoria deve ser considerado como ano trabalhado.
// Exemplo:
// Input [[1960,2005],[1945,2008],[1938,1999],...]

/**
 * Calculates the busiest year(s) based on the provided array of year ranges.
 *
 * @param {number[][]} years - An array of arrays representing year ranges.
 * @returns {number[]} - An array containing the busiest year(s).
 *
 * @example
 * // Input: [[1960,2005],[1945,2008],[1938,1999],...]
 * calculateBusiestYear([[1960,2005],[1945,2008],[1938,1999],...]);
 * // Output: [2005, 2008, 1999, ...]
 */
const calculateBusiestYear = years => {
  const workingYears = {}

  years.forEach(year => {
    for (let i = year[0]; i <= year[1]; i++) {
      if (workingYears[i]) {
        workingYears[i]++
      } else {
        workingYears[i] = 1
      }
    }
  })

  let maxWorkers = 0
  let busiestYears = []

  Object.keys(workingYears).forEach(year => {
    if (workingYears[year] > maxWorkers) {
      busiestYears = [parseInt(year)]
      maxWorkers = workingYears[year]
    } else if (workingYears[year] === maxWorkers) {
      busiestYears.push(parseInt(year))
    }
  })

  return busiestYears
}

// Tests
const years = [
  [1960, 2005],
  [1945, 2008],
  [1938, 1999]
]

console.log(JSON.stringify(calculateBusiestYear(years))) // Output: [1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999]

