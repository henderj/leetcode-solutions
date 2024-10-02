function letterCombinations(digits: string): string[] {
  if (digits == '') {
    return []
  }
  const letters = new Map<string, string>([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz']
  ])

  function addCombos(prefix: string, offset: number): string[] {
    if (offset >= digits.length) {
      return [prefix]
    }

    let strings: string[] = []
    const chars: string = letters.get(digits[offset])!
    for (const l of chars) {
      strings = strings.concat(addCombos(prefix + l, offset + 1))
    }
    return strings
  }

  return addCombos('', 0)
};

/*
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/

console.log(letterCombinations('23'))
