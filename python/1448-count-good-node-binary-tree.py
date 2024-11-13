# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        visited = set()
        self.num_good_nodes = 0

        def dfs(node, max_val):
            if node is None or node in visited:
                return
            if node.val >= max_val:
                self.num_good_nodes += 1
            new_max = max(max_val, node.val)
            dfs(node.left, new_max)
            dfs(node.right, new_max)

        dfs(root, root.val)
        return self.num_good_nodes

