class Solution:
    def shortestBridge(self, grid: list[list[int]]) -> int:
        island = set()

        def dfs(row, col):
            if row < 0 or col < 0 or row >= len(grid) or col >= len(grid[row]):
                return
            value = grid[row][col]
            if value == 0 or (row, col) in island:
                return
            island.add((row, col))
            grid[row][col] = 0
            dfs(row - 1, col)
            dfs(row + 1, col)
            dfs(row, col - 1)
            dfs(row, col + 1)

        for r in range(len(grid)):
            for c in range(len(grid[r])):
                dfs(r, c)
                if len(island) > 0:
                    break
            if len(island) > 0:
                break

        edge = set(island)
        next_edge = set()
        dist = 0
        while edge:
            for e in edge:
                if e[0] < 0 or e[1] < 0 or e[0] >= len(grid) or e[1] >= len(grid[0]):
                    continue
                if grid[e[0]][e[1]] == 1:
                    return dist - 1
                island.add(e)
                neighbors = [
                    (e[0] + 1, e[1]),
                    (e[0] - 1, e[1]),
                    (e[0], e[1] + 1),
                    (e[0], e[1] - 1),
                ]
                for n in neighbors:
                    if n not in island:
                        next_edge.add(n)
            edge = set(next_edge)
            next_edge = set()
            dist += 1
        return -1


sol = Solution()
print(sol.shortestBridge([[0, 1], [1, 0]]))
