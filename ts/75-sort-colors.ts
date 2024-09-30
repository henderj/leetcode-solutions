/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const count0 = nums.reduce((count, curr) => {
    if (curr != 0) return count;
    return count + 1
  }, 0)
  const count1 = nums.reduce((count, curr) => {
    if (curr != 1) return count;
    return count + 1
  }, 0)

  for (let i = 0; i < nums.length; i++) {
    if (i < count0) {
      nums[i] = 0
      continue
    }
    if (i < count0 + count1) {
      nums[i] = 1
      continue
    }
    nums[i] = 2
  }
};
