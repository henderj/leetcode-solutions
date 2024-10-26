from typing import List

class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        rows = [[1]]

        while len(rows) < numRows:
            row = [1]
            for i in range(len(rows[-1]) - 1):
                row.append(rows[-1][i] + rows[-1][i+1])
            row.append(1)
            rows.append(row)
        return rows
