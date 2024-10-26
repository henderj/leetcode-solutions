class Solution:
    def tribonacci(self, n: int) -> int:
        if n == 0:
            return 0
        a = 0
        b = 1
        c = 1
        count = 2
        while count < n:
            count += 1
            temp = a + b + c
            a = b
            b = c
            c = temp
        return c
