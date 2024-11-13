class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        def isInBounds(row: int, col: int):
            return row >= 0 and row < len(grid) and col >= 0 and col < len(grid[0])
        def dfs(row: int, col: int):
            val = grid[row][col]
            if val == '0':
                return
            grid[row][col] = '0'
            neighbors = [(row - 1, col), (row + 1, col), (row, col - 1), (row, col + 1)]
            for n in neighbors:
                if not isInBounds(n[0], n[1]):
                    continue
                dfs(n[0], n[1])

        numIslands = 0
        for row in range(len(grid)):
            for col in range(len(grid[row])):
                if grid[row][col] == '1':
                    numIslands += 1
                    dfs(row, col)
        return numIslands

