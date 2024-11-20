from typing import Counter


class Solution:
    def leastInterval(self, tasks: list[str], n: int) -> int:
        tasks_count = Counter(tasks)
        max_tasks = max(tasks_count.values())
        max_count = 0
        for i in tasks_count.values():
            if i == max_tasks:
                max_count += 1
        return max((max_tasks * (n - 1)) + (max_count), len(tasks))
