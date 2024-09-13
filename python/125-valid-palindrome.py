class Solution:
    def isPalindrome(self, s: str) -> bool:
        left = 0
        right = len(s) - 1
        lowercase = s.lower()

        while right > left:
            while not lowercase[left].isalnum():
                left += 1
            while not lowercase[right].isalnum():
                right -= 1
            if right <= left:
                return True
            if lowercase[left] != lowercase[right]:
                return False
            left += 1
            right -= 1
        return True
