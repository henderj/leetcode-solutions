function minCostClimbingStairs(cost: number[]): number {
  const memo = new Map<number, number>()
  function recurse(index: number): number {
    if (index <= 1) {
      return cost[index]
    }

    if (memo.has(index)) {
      return memo.get(index)!
    }

    const cost1 = recurse(index - 1) + cost[index]
    const cost2 = recurse(index - 2) + cost[index]

    const costMin = Math.min(cost1, cost2)

    memo.set(index, costMin)

    return costMin
  }

  return Math.min(recurse(cost.length - 1), recurse(cost.length - 2))
};
