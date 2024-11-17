class Solution:
    def merge(self, intervals: list[list[int]]) -> list[list[int]]:
        intervals.sort(key=lambda i : i[0])
        result = [intervals[0]]
        for interval in intervals:
            if interval[0] <= result[-1][1]:
                result[-1][1] = max(result[-1][1], interval[1])
            else:
                result.append(interval)
        return result

sol = Solution()
print(sol.merge([[1,3],[8,10],[15,18],[2,6]]))
