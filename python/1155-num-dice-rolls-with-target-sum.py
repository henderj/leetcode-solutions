class Solution:
    def numRollsToTarget(self, n: int, k: int, target: int) -> int:
        pretty_prime = 10**9 + 7
        @cache
        def roll_dice(curr_value: int, num_dice_thrown: int) -> int:
            if num_dice_thrown > n:
                return 0
            if curr_value > target:
                return 0
            if curr_value == target and num_dice_thrown == n:
                return 1
            num_ways = 0
            for i in range(1, k + 1):
                num_ways += roll_dice(curr_value + i, num_dice_thrown + 1)
            return num_ways % pretty_prime
        return roll_dice(0, 0)
