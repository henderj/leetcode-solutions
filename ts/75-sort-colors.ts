/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let next0 = -1
  let next1 = -1

  function swap(a: number, b: number) {
    if (a == b) return;
    const temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
        swap(++next0, i)
        if (next0 > next1) {
          next1 = next0
        }
    }
    if (nums[i] == 1) {
      swap(++next1, i)
    }
  }
};

// const a = [2, 0, 2, 1, 1, 0]
const a = [2, 0, 1]
sortColors(a)
console.log(a)
