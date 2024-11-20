class Solution:
    def specialArray(self, nums: list[int]) -> int:
        nums.sort()
        left = 0
        right = len(nums) - 1
        while (left <= right):
            mid = (right + left) // 2
            special_num = len(nums) - mid
            if nums[mid] >= special_num and (mid == 0 or nums[mid - 1] < special_num):
                return special_num
            if nums[mid] < special_num:
                left = mid + 1
            else:
                right = mid - 1
        return -1
