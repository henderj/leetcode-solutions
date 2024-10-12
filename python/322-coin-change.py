from typing import List

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [0] + ([-1] * amount)
        coins.sort(reverse=True)
        for coin in coins:
            for i in range(1, len(dp)):
                if i - coin >= 0 and dp[i-coin] != -1:
                    dp[i] = dp[i-coin] + 1 if dp[i] == -1 else min(dp[i], dp[i-coin] + 1)
        return dp[-1]



"""
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
"""
sol = Solution()
print(sol.coinChange([1,2,5], 11))
