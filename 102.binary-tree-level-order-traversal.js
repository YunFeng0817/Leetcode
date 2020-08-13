/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (54.40%)
 * Likes:    3228
 * Dislikes: 78
 * Total Accepted:    638.7K
 * Total Submissions: 1.2M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the level order traversal of its nodes' values.
 * (ie, from left to right, level by level).
 *
 *
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 *
 * return its level order traversal as:
 *
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
 *
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let lastLevel = [],
        currentLevel = [],
        levelNum;
    let result = [];
    currentLevel.push(root);
    while (true) {
        lastLevel = currentLevel;
        currentLevel = [];
        levelNum = [];
        for (let treeNode of lastLevel) {
            if (treeNode !== null) {
                levelNum.push(treeNode.val);
                currentLevel.push(treeNode.left);
                currentLevel.push(treeNode.right);
            }
        }
        if (levelNum.length == 0) break;
        result.push(levelNum);
    }
    return result;
};
// @lc code=end
// []
