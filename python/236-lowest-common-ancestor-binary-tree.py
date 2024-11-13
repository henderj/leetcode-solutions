# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        self.lca = None

        def dfs(node) -> tuple[bool, bool]:
            if node is None:
                return False, False

            has_p, has_q = False, False
            if node == p:
                has_p = True
            if node == q:
                has_q = True

            left_has_p, left_has_q = dfs(node.left)
            right_has_p, right_has_q = dfs(node.right)

            has_p = has_p or left_has_p or right_has_p
            has_q = has_q or left_has_q or right_has_q

            if self.lca is None and has_p and has_q:
                self.lca = node

            return has_p, has_q

        dfs(root)

        return self.lca


