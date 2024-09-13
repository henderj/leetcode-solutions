from typing import List


class Solution:
    def leastBricks(self, wall: List[List[int]]) -> int:
        breaks: dict[int, int] = {}
        for row in wall:
            i = 0
            for brick in row[:-1]:
                i += brick
                breaks.update({ i: breaks.get(i, 0) + 1})
        print(breaks)
        if len(breaks) == 0:
            return len(wall)
        return len(wall) - max(breaks.values())



wall = [[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]]
expected = 2
actual = Solution().leastBricks(wall)
print(f'expected: {expected}\nactual: {actual}')

wall = [[1],[1],[1]]
expected = 3
actual = Solution().leastBricks(wall)
print(f'expected: {expected}\nactual: {actual}')

wall = [[6],[6],[2,4],[6],[1,2,2,1],[6],[2,1,2,1],[1,5],[4,1,1],[1,4,1],[4,2],[3,3],[2,2,2],[5,1],[5,1],[6],[4,2],[1,5],[2,3,1],[4,2],[1,1,4],[1,3,1,1],[2,3,1],[3,3],[3,1,1,1],[3,2,1],[6],[3,2,1],[1,5],[1,4,1]]
expected = 17
actual = Solution().leastBricks(wall)
print(f'expected: {expected}\nactual: {actual}')
