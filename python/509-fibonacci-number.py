class Solution:
    def fib(self, n: int) -> int:
        if n == 0:
            return 0
        a = 0
        b = 1
        count = 1
        while count < n:
            count += 1
            temp = a + b
            a = b
            b = temp
        return b
