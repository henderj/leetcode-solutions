from typing import List

class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        dp = [1] + [0] * amount
        for coin in coins:
            for i in range(0, len(dp) - coin):
                dp[i+coin] += dp[i]
        return dp[-1]
