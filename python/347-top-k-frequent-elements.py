class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        freq = dict()
        for num in nums:
            if num not in freq:
                freq[num] = 0
            freq[num] = freq[num] - 1
        freq_arr = [(count, num) for num, count in freq.items()]
        freq_arr.sort()
        return [item[1] for item in freq_arr[:k]]

sol = Solution()
print(sol.topKFrequent([1,1,1,2,2,3], 2))
print()
print(sol.topKFrequent([-1,-1], 1))
