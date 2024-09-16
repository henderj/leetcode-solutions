function isHappy(n: number): boolean {
  if (n === 1) {
    return true
  }

  const seenNums = new Set<number>()

  const isLoop = (n: number) => {
    if (seenNums.has(n)) {
      return true
    } 
    if (n == 1) {
      return false
    }
    seenNums.add(n)
    let newNum = 0
    while (n > 0) {
      newNum += (n % 10) ** 2
      n = Math.floor(n / 10)
    }
    return isLoop(newNum)
  }

  return !isLoop(n)
};
