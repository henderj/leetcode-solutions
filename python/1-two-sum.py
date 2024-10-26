class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        index_map = dict[int, int]()
        for i, num in enumerate(nums):
            if num in index_map:
                return [index_map[num], i]
            index_map[target - num] = i
