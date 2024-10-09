function wordBreak(s: string, wordDict: string[]): boolean {
  function fits(i: number, candidates: string[], list: boolean[]): boolean {
    for (const candidate of candidates) {
      if (list.length >= candidate.length &&
          s.slice(i, i + candidate.length) == candidate &&
          list[list.length - candidate.length]) {
        return true
      }
    }
    return false
  }

  const list = [true]

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i]
    const candidates = wordDict.filter(str => str[0] == char)

    list.push(fits(i, candidates, list))
  }
  return list[list.length - 1]
};
