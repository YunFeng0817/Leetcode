/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 *
 * https://leetcode.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (41.06%)
 * Likes:    2276
 * Dislikes: 533
 * Total Accepted:    513K
 * Total Submissions: 1.2M
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path
 * such that adding up all the values along the path equals the given sum.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 *
 * Given the below binary tree and sum = 22,
 *
 *
 * ⁠     5
 * ⁠    / \
 * ⁠   4   8
 * ⁠  /   / \
 * ⁠ 11  13  4
 * ⁠/  \      \
 * 7    2      1
 *
 *
 * return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (!root) return false;
    return hasPathSumRecursive(root, sum, 0);
};
function hasPathSumRecursive(root, sum, val) {
    let newVal = val + root.val,
        left = false,
        right = false;
    if (!root.left && !root.right) {
        return newVal === sum;
    }
    if (root.left) {
        left = hasPathSumRecursive(root.left, sum, newVal);
    }
    if (root.right) {
        right = hasPathSumRecursive(root.right, sum, newVal);
    }
    return left || right;
}
// @lc code=end
// [5,4,8,11,null,13,4,7,2,null,null,null,1]\n26
// []\n0
// [2]\n2
// [1,2]\n1
