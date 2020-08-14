/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (48.58%)
 * Likes:    3617
 * Dislikes: 98
 * Total Accepted:    375.7K
 * Total Submissions: 768.9K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 *
 * Note:
 * You may assume that duplicates do not exist in the tree.
 *
 * For example, given
 *
 *
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
 *
 * Return the following binary tree:
 *
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) return null;
    let root = new TreeNode();
    let nodeStack = [],
        currentNode = root,
        treeNode;
    for (let nodeIndex in preorder) {
        currentNode.val = preorder[nodeIndex];
        // the node is on the left side of current node
        if (Number(nodeIndex) + 1 < preorder.length) {
            if (
                inorder.indexOf(
                    preorder[Number(nodeIndex) + 1]
                ) < inorder.indexOf(preorder[nodeIndex])
            ) {
                currentNode.left = new TreeNode();
                nodeStack.push(currentNode);
                currentNode = currentNode.left;
            } else {
                // relocate the current node by stack
                while (nodeStack.length > 0) {
                    treeNode = nodeStack.pop();
                    if (
                        inorder.indexOf(
                            preorder[Number(nodeIndex) + 1]
                        ) > inorder.indexOf(treeNode.val)
                    )
                        currentNode = treeNode;
                    else {
                        nodeStack.push(treeNode);
                        break;
                    }
                }
                currentNode.right = new TreeNode();
                currentNode = currentNode.right;
            }
        }
    }
    return root;
};
// @lc code=end
// []\n[]
// [1]\n[1]
// [1,2,3]\n[2,3,1]
// [1,2,3]\n[1,2,3]
