function distance(nums: number[]): number[] {
  const leftSums: number[] = new Array(nums.length).fill(0)

  interface NumInfo {
    count: number
    lastIndex: number
  }
  const map = new Map<number, NumInfo>()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!map.has(num)) {
      map.set(num, { count: 1, lastIndex: i })
      continue
    }

    const info = map.get(num)!
    const lastSum = leftSums[info.lastIndex]
    const dist = i - info.lastIndex
    leftSums[i] = lastSum + (dist * info.count)

    info.count++
    info.lastIndex = i
  }

  console.log('leftSums', leftSums)

  map.clear()
  const rightSums: number[] = new Array(nums.length).fill(0)
  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    if (!map.has(num)) {
      map.set(num, { count: 1, lastIndex: i })
      continue
    }

    const info = map.get(num)!
    const lastSum = rightSums[info.lastIndex]
    const dist = info.lastIndex - i
    rightSums[i] = lastSum + (dist * info.count)

    info.count++
    info.lastIndex = i
  }

  console.log('rightSums', rightSums)

  const sums: number[] = new Array(nums.length).fill(0)
  for (let i = 0; i < nums.length; i++) {
    sums[i] = (leftSums[i] + rightSums[i])
  }
  console.log('sums', sums)
  return sums
};

distance([1, 3, 1, 1, 2])
