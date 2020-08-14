/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (48.15%)
 * Likes:    2326
 * Dislikes: 103
 * Total Accepted:    395.2K
 * Total Submissions: 817.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the zigzag level order traversal of its nodes'
 * values. (ie, from left to right, then right to left for the next level and
 * alternate between).
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
 * return its zigzag level order traversal as:
 *
 * [
 * ⁠ [3],
 * ⁠ [20,9],
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
var zigzagLevelOrder = function (root) {
    let result = [],
        levelBuffer,
        levelNum,
        nodes = [],
        direction = false;
    nodes.push(root);
    if (root !== null) result.push([root.val]);
    while (nodes.length > 0) {
        levelBuffer = [];
        levelNum = [];
        while (nodes.length > 0) {
            let treeNode = nodes.shift();
            if (treeNode !== null) {
                levelBuffer.push(treeNode.left);
                levelBuffer.push(treeNode.right);
            }
        }
        nodes = nodes.concat(levelBuffer);
        while (levelBuffer.length > 0) {
            let treeNode = direction
                ? levelBuffer.shift()
                : levelBuffer.pop();
            if (treeNode !== null) {
                levelNum.push(treeNode.val);
            }
        }
        if (levelNum.length === 0) return result;
        result.push(levelNum);
        direction = !direction;
    }
    return result;
};
// @lc code=end
// [1,2,3,4,null,null,5]
// [1,2,3,4,null,null,5,6,7,null,8,9,10]
// [1,2,3,4,null,null,5,6,7,null,null,null,null,8,9]
