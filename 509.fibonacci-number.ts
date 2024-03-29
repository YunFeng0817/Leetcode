/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Fibonacci Number
 *
 * https://leetcode.com/problems/fibonacci-number/description/
 *
 * algorithms
 * Easy (68.32%)
 * Likes:    3803
 * Dislikes: 270
 * Total Accepted:    833.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '2'
 *
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the
 * Fibonacci sequence, such that each number is the sum of the two preceding
 * ones, starting from 0 and 1. That is,
 *
 *
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 *
 *
 * Given n, calculate F(n).
 *
 *
 * Example 1:
 *
 *
 * Input: n = 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 3
 * Output: 2
 * Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 *
 *
 * Example 3:
 *
 *
 * Input: n = 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= n <= 30
 *
 *
 */

// @lc code=start

function fib(n: number): number {
  if (n <= 1) return n;
  let pre1 = 1,
    pre2 = 0;
  for (let i = 2; i <= n; i++) {
    const temp = pre2;
    pre2 = pre1;
    pre1 = temp + pre1;
  }
  return pre1;
}

// tail recursive
// function fib(n: number): number {
//   if (n <= 1) return n;
//   return fibTail(n, 1, 0);
// }

// function fibTail(n: number, acc1: number, acc2) {
//   if (n > 2) return fibTail(n - 1, acc1 + acc2, acc1);
//   return acc1 + acc2;
// }
// @lc code=end
