/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (33.79%)
 * Likes:    9322
 * Dislikes: 2348
 * Total Accepted:    1.6M
 * Total Submissions: 4.6M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Example:
 *
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
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
var addTwoNumbers = function (l1, l2) {
    let result = null,
        pre,
        cur;
    let carry = 0;
    while (l1 || l2 || carry) {
        cur = new ListNode();
        if (pre) {
            pre.next = cur;
        } else result = cur;
        pre = cur;
        let l1Val = 0,
            l2Val = 0;
        if (l1) {
            l1Val = l1.val;
            l1 = l1.next;
        }
        if (l2) {
            l2Val = l2.val;
            l2 = l2.next;
        }
        let digit = l1Val + l2Val + carry;
        carry = digit > 9 ? 1 : 0;
        digit = digit % 10;
        cur.val = digit;
    }
    return result;
};
// @lc code=end
// [1]\n[]
// []\n[]
// [1,2,3,4,5,6,7,8,9]\n[9,8,7,6,5,4,3,2,1]
