class Solution:
    def maximumCostSubstring(self, s: str, chars: str, vals: list[int]) -> int:
        dp = [0]
        max_cost = 0
        for c in s:
            cost = ord(c) - ord('a') + 1 if c not in chars else vals[chars.index(c)]
            best_option = max(cost, dp[-1] + cost)
            if best_option > max_cost:
                max_cost = best_option
            dp.append(best_option)
        print(dp)
        return  max_cost

sol = Solution()
print(sol.maximumCostSubstring('abc', 'abc', [-1,-1,-1]))
