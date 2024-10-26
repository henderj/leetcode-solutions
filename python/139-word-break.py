from typing import List

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        dp = [False] * len(s) + [True]

        for i in range(len(s) - 1, -1, -1):
            for word in wordDict:
                if i + len(word) <= len(s) and s.startswith(word, i) and dp[i + len(word)]:
                    dp[i] = True
        print(dp)
        return dp[0]

sol = Solution()
print(sol.wordBreak('leetcode', ['leet', 'code']))
