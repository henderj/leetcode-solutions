class Solution:
    def dieSimulator(self, n: int, rollMax: list[int]) -> int:
        pretty_prime = 10**9 + 7
        dp1 = [[0] * 6 for _ in range(max(rollMax))]
        dp1[0] = [1] * 6
        dp2 = [[0] * 6 for _ in range(max(rollMax))]

        curr_dp = dp1
        next_dp = dp2

        for _ in range(1, n):
            sum_dp = sum(map(sum, curr_dp))
            for d in range(6):
                next_dp[0][d] = sum_dp - sum([curr_dp[col][d] for col in range(len(curr_dp))])
            for col in range(1, len(next_dp)):
                for d in range(6):
                    if col < rollMax[d]:
                        next_dp[col][d] = curr_dp[col - 1][d]
            (curr_dp, next_dp) = (next_dp, curr_dp)
        return sum(map(sum, curr_dp)) % pretty_prime

sol = Solution()
print(sol.dieSimulator(2, [1,1,2,2,2,3]))
