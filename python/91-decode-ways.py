class Solution:
    def numDecodings(self, s: str) -> int:
        def isValid(string: str):
            if len(string) == 0 or len(string) > 2:
                return False
            if string[0] == '0':
                return False
            return int(string) <= 26

        dp = [1]
        for i in range(len(s)):
            dp.append(0)
            if isValid(s[i]):
                dp[-1] += dp[-2]
            if i >= 1 and isValid(s[i-1:i+1]):
                dp[-1] += dp[-3]
        return dp[-1]

