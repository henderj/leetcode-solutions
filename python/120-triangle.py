class Solution:
    def minimumTotal(self, triangle: list[list[int]]) -> int:
        for index in range(1, len(triangle)):
            row = triangle[index]
            for i in range(len(row)):
                if i > 0 and i < len(row) - 1:
                    row[i] += min(triangle[index - 1][i-1:i+1])
                elif i == 0:
                    row[i] += triangle[index - 1][0]
                else:
                    row[i] += triangle[index - 1][-1]
        print(triangle)
        return min(triangle[-1])

sol = Solution()
print(sol.minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))
