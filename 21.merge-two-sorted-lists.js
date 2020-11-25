/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (54.81%)
 * Likes:    5395
 * Dislikes: 676
 * Total Accepted:    1.2M
 * Total Submissions: 2.2M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new sorted list. The new
 * list should be made by splicing together the nodes of the first two
 * lists.
 *
 *
 * Example 1:
 *
 *
 * Input: l1 = [1,2,4], l2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 *
 * Example 2:
 *
 *
 * Input: l1 = [], l2 = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: l1 = [], l2 = [0]
 * Output: [0]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in both lists is in the range [0, 50].
 * -100 <= Node.val <= 100
 * Both l1 and l2 are sorted in non-decreasing order.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let head = null,
    pointer = null;
  while (l1 && l2) {
    let smaller;
    if (l1.val <= l2.val) {
      smaller = l1;
      l1 = l1.next;
    } else {
      smaller = l2;
      l2 = l2.next;
    }
    if (!head) {
      head = smaller;
      pointer = smaller;
    } else {
      pointer.next = smaller;
      pointer = smaller;
    }
  }
  let existNode;
  l1 && (existNode = l1);
  l2 && (existNode = l2);
  if (existNode) {
    if (pointer) pointer.next = existNode;
    else head = existNode;
  }
  return head;
};
// @lc code=end
// []\n[]
// []\n[0]
// [1]\n[]
// [1,2]\n[]
// []\n[1,2]
// [1]\n[3,4]
