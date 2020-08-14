/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 *
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (65.87%)
 * Likes:    2691
 * Dislikes: 78
 * Total Accepted:    857.4K
 * Total Submissions: 1.3M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, find its maximum depth.
 *
 * The maximum depth is the number of nodes along the longest path from the
 * root node down to the farthest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 *
 * Given binary tree [3,9,20,null,null,15,7],
 *
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * return its depth = 3.
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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    function findMaxDepth(treeNode, depth) {
        if (treeNode === null) return depth;
        else {
            let leftDepth = findMaxDepth(
                treeNode.left,
                depth + 1
            );
            let rightDepth = findMaxDepth(
                treeNode.right,
                depth + 1
            );
            return Math.max(leftDepth, rightDepth);
        }
    }
    return findMaxDepth(root, 0);
};
// @lc code=end
// []
// [1]
// [1,2,3,4,null,null,5,6,7,null,null,null,null,8,9]
