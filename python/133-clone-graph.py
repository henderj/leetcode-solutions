from typing import Optional
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if node is None:
            return None
        map = dict[int, Node]()
        return self.dfs(map, node)

    def dfs(self, map, node: Node):
        new_node = Node(node.val)
        map[node.val] = new_node
        for neighbor in node.neighbors:
            if neighbor.val not in map:
                self.dfs(map, neighbor)
            new_node.neighbors.append(map[neighbor.val])
        return new_node

