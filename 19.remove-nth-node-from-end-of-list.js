/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (35.43%)
 * Likes:    4228
 * Dislikes: 263
 * Total Accepted:    731.5K
 * Total Submissions: 2.1M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given the head of a linked list, remove the n^th node from the end of the
 * list and return its head.
 *
 * Follow up: Could you do this in one pass?
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1], n = 1
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: head = [1,2], n = 1
 * Output: [1]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is sz.
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let firstPointer = head;
  let secondPointer = head;
  for (let i = 0; i < n; i++) {
    firstPointer = firstPointer.next;
  }
  if (!firstPointer) {
    if (secondPointer.next) {
      return secondPointer.next;
    }
    return null;
  }
  while (firstPointer.next) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }
  const deleteNode = secondPointer.next;
  secondPointer.next = deleteNode.next;
  return head;
};
// @lc code=end
// [1]\n1
// [1,2]\n1
// [1,2]\n2
