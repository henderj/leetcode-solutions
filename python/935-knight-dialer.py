class Solution:
    def knightDialer(self, n: int) -> int:
        if n == 1:
            return 10
        adj_list = {
            0: [4, 6],
            1: [6, 8],
            2: [7, 9],
            3: [4, 8],
            4: [3, 9, 0],
            6: [1, 7, 0],
            7: [2, 6],
            8: [1, 3],
            9: [2, 4],
        }

        @cache
        def recurse(digit: int, remaining: int):
            if remaining == 0:
                return 1
            return sum([recurse(d, remaining - 1) for d in adj_list[digit]]) % (10**9 + 7)
        return sum([recurse(d, n - 1) for d in adj_list.keys()]) % (10**9 + 7)

