import heapq

class Solution:
    def lastStoneWeightII(self, stones: list[int]) -> int:
        negStones = [-stone for stone in stones]
        heapq.heapify(negStones)
        while len(negStones) > 1:
            max1 = heapq.heappop(negStones)
            max2 = heapq.heappop(negStones)
            remaining = abs(max1 - max2)
            if remaining > 0:
                heapq.heappush(negStones, -remaining)
        return -negStones[0] if len(stones) > 0 else 0

