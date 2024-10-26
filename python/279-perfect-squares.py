import math

class Solution:
    def numSquares(self, n: int) -> int:
        min_sqrt = math.floor(math.sqrt(n))
        opts = [num**2 for num in range(1, min_sqrt + 1)]

        dp = [0] * (n + 1)
        for i in range(1, n + 1):
            dp[i] = min([dp[i-opt] for opt in opts if i-opt >= 0]) + 1
        print(dp)
        return dp[-1]

sol = Solution()
print(sol.numSquares(12))
