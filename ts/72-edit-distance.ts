function minDistance(word1: string, word2: string): number {
  const memo = new Map<string, number>()
  function findMinDist(word1: string, word2: string, index: number): number {
    if (word1 == word2) {
      return 0
    }

    if (word1.length == 0) {
      return word2.length
    }

    if (memo.has(word1)) {
      return memo.get(word1)!
    }

    let subDist = Number.POSITIVE_INFINITY
    if (index < word1.length && index < word2.length) {
      if (word1[index] == word2[index]) {
        return findMinDist(word1, word2, index + 1)
      }
      const subWord = word1.slice(0, index) + word2[index] + word1.slice(index + 1)
      subDist = 1 + findMinDist(subWord, word2, index + 1)
      memo.set(subWord, subDist)
    }

    const deleteWord = word1.slice(0, index) + word1.slice(index + 1)
    const deleteDist = 1 + findMinDist(deleteWord, word2, index)
    memo.set(deleteWord, deleteDist)

    let insertDist = Number.POSITIVE_INFINITY
    if (index < word2.length) {
      const insertWord = word1.slice(0, index) + word2[index] + word1.slice(index)
      insertDist = 1 + findMinDist(insertWord, word2, index + 2)
      memo.set(insertWord, insertDist)
    }

    const minDist = Math.min(deleteDist, insertDist, subDist)

    memo.set(word1, minDist)

    return minDist
  }

  return findMinDist(word1, word2, 0)
};

console.log(minDistance('horse', 'rose'))