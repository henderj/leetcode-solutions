class Solution:
    def lastStoneWeight(self, stones: list[int]) -> int:
        while len(stones) > 1:
            stones.sort()
            max1 = stones.pop()
            max2 = stones.pop()
            remaining = abs(max1 - max2)
            if remaining > 0:
                stones.append(remaining)
        return stones[0] if len(stones) > 0 else 0

