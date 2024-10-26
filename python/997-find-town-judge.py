from typing import List

class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        trusts_you = [0] * n
        you_trust = [0] * n
        for t in trust:
            you_trust[t[0] - 1] += 1
            trusts_you[t[1] - 1] += 1
        maybe_judge = trusts_you.index(max(trusts_you))
        print(trusts_you)
        print(you_trust)
        return maybe_judge + 1 if trusts_you[maybe_judge] == n-1 and you_trust[maybe_judge] == 0 else -1


sol = Solution()
print(sol.findJudge(2, [[1,2]]))
