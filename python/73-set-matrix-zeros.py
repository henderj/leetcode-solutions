from typing import List

class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if matrix[i][j] == 0:
                    # update row
                    for x in range(len(matrix)):
                        if num2 != 0:
                            num2 = -1
                    # update col
                    for num3 in matrix[:][j]:
                        num3 = -1

        for row in matrix:
            for num in row:
                if num == -1:
                    num = 0
