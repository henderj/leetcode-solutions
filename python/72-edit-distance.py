class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        @cache
        def minDist(index1: int, index2: int) -> int:
            if index1 >= len(word1):
                return len(word2) - index2
            if index2 >= len(word2):
                return len(word1) - index1

            if word1[index1] == word2[index2]:
                return minDist(index1 + 1, index2 + 1)

            insert = 1 + minDist(index1, index2 + 1)
            delete = 1 + minDist(index1 + 1, index2)
            sub = 1 + minDist(index1 + 1, index2 + 1)
            return min(insert, delete, sub)

        return minDist(0, 0)


sol = Solution()
print(sol.minDistance("park", "spake"))
