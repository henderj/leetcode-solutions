function smallerNumbersThanCurrent(nums: number[]): number[] {
    console.log(`nums: ${nums}`)
    const original = nums.slice()
    nums = nums.sort((a,b) => a-b)
    console.log(`nums sorted: ${nums}`)
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            continue;
        }
        map.set(nums[i], i)
    }
    console.log(`map: ${JSON.stringify(map)}`)
    for (const key of map.keys()) {
      console.log(`${key}: ${map.get(key)}`)
    }
    console.log(`original: ${original}`)
    const counts: number[] = []
    for (let i = 0; i < original.length; i++) {
        counts.push(map.get(original[i])!)
    }
    return counts
};

const nums = [5,0,10,0,10,6]
console.log(smallerNumbersThanCurrent(nums))
