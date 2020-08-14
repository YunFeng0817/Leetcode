/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
 *
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/
 *
 * algorithms
 * Medium (49.07%)
 * Likes:    2976
 * Dislikes: 340
 * Total Accepted:    357.5K
 * Total Submissions: 724.7K
 * Testcase Example:  '[1,2,5,3,4,null,6]'
 *
 * Given a binary tree, flatten it to a linked list in-place.
 *
 * For example, given the following tree:
 *
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   5
 * ⁠/ \   \
 * 3   4   6
 *
 *
 * The flattened tree should look like:
 *
 *
 * 1
 * ⁠\
 * ⁠ 2
 * ⁠  \
 * ⁠   3
 * ⁠    \
 * ⁠     4
 * ⁠      \
 * ⁠       5
 * ⁠        \
 * ⁠         6
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
// /**
//  * @param {TreeNode} root
//  * @return {void} Do not return anything, modify root in-place instead.
//  */
// var flatten = function (root) {
//     let rightNode = new TreeNode(),
//         currentNode = rightNode;
//     function preOrder(root) {
//         if (!root) return;
//         currentNode.right = new TreeNode();
//         currentNode = currentNode.right;
//         currentNode.val = root.val;
//         preOrder(root.left);
//         preOrder(root.right);
//     }
//     preOrder(root);
//     if (rightNode.right && rightNode.right.right) {
//         root.left = null;
//         root.right = rightNode.right.right;
//     }
// };
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    let currentNode = root;
    while (currentNode) {
        if (currentNode.left) {
            let next = currentNode.left;
            let processor = next;
            while (processor.right)
                processor = processor.right;
            processor.right = currentNode.right;
            currentNode.left = null;
            currentNode.right = next;
        }
        currentNode = currentNode.right;
    }
};
// @lc code=end
// []
// [1]
// [1,2,3,4,null,null,5,6,7,null,null,null,null,8,9]
