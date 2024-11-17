import heapq

class Solution:
    def furthestBuilding(self, heights: list[int], bricks: int, ladders: int) -> int:
        print(heights)
        print(f'bricks: {bricks}; ladders: {ladders}')
        ladder_heights = []
        heapq.heapify(ladder_heights)

        for i in range(1, len(heights)):
            height = heights[i]
            delta = height - heights[i - 1]
            state = f"{heights[i - 1]} -> {height};  \tdelta: {delta};\t"
            if delta <= 0:
                print(f'{state}falling')
                continue
            if ladders > 0:
                print(f"{state}using ladder for index {i}")
                ladders -= 1
                heapq.heappush(ladder_heights, delta)
            else:
                min_height = min(ladder_heights[0], delta) if len(ladder_heights) > 0 else delta
                if bricks >= min_height:
                    print(f"{state}replacing ladder for with bricks for index {i}. replacing delta: {min_height}; prev bricks: {bricks}; curr bricks: {bricks - min_height}")
                    bricks -= min_height
                    heapq.heappushpop(ladder_heights, delta)
                else:
                    print(f"{state}not enough bricks or ladders. min ladder: {min_height}; ladders: {ladders}; bricks: {bricks}")
                    return i - 1
        return len(heights) - 1
                

sol = Solution()
print(sol.furthestBuilding([4,2,7,6,9,14,12], 5, 1))

print()
print(sol.furthestBuilding([4,12,2,7,3,18,20,3,19], 10, 2))
