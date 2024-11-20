class Solution:
    def sortArray(self, nums: list[int]) -> list[int]:
        def mergesort(left: int, right: int):
            if left >= right:
                return
            mid = (right - left) // 2
            mergesort(left, mid)
            mergesort(mid + 1, right)


