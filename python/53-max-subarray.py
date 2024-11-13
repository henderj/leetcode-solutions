class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        max_sum = None
        curr_sum = None
        for num in nums:
            if curr_sum is None:
                curr_sum = num
            else:
                curr_sum += num
            if max_sum is None or curr_sum > max_sum:
                max_sum = curr_sum
            if curr_sum <= 0:
                curr_sum = None
        return max_sum if max_sum is not None else nums[0]
