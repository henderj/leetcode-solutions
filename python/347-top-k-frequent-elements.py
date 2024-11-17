from heapq import heapify, heappop


class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        freq = dict()
        for num in nums:
            if num not in freq:
                freq[num] = 0
            freq[num] = freq[num] - 1
        freq_arr = [(count, num) for num, count in freq.items()]
        print(freq)
        print(freq_arr)
        heapify(freq_arr)
        result = []
        for _ in range(k):
            result.append(heappop(freq_arr)[1])
        return result

sol = Solution()
print(sol.topKFrequent([1,1,1,2,2,3], 2))
print()
print(sol.topKFrequent([-1,-1], 1))
