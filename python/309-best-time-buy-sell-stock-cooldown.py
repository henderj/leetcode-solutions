from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        memo = dict()
        def profit(index: int, haveStock: bool) -> int:
            if index >= len(prices):
                return 0

            key = (index, haveStock)
            if key in memo:
                return memo[key]

            options = []
            if haveStock:
                options.append(profit(index + 2, False) + prices[index])
            else:
                options.append(profit(index + 1, True) + -prices[index])

            options.append(profit(index + 1, haveStock))

            best = max(options)
            memo[key] = best
            return best
        return profit(0, False)
