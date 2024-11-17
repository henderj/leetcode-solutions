from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def buildTree(self, preorder: list[int], inorder: list[int]) -> Optional[TreeNode]:
        root = TreeNode(preorder[0])
        created = { preorder[0]: root }
        cur_node = root
        cur_inorder = 0

        for pre in preorder[1:]:
            if inorder[cur_inorder] not in created:
                cur_node.left = TreeNode(pre)
                cur_node = cur_node.left
                created[pre] = cur_node
            else:
                while inorder[cur_inorder] in created:
                    cur_inorder += 1
                cur_node = created[inorder[cur_inorder - 1]]
                cur_node.right = TreeNode(pre)
                cur_node = cur_node.right
                created[pre] = cur_node
        return root


