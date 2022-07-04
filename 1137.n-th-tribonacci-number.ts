/*
 * @lc app=leetcode id=1137 lang=typescript
 *
 * [1137] N-th Tribonacci Number
 *
 * https://leetcode.com/problems/n-th-tribonacci-number/description/
 *
 * algorithms
 * Easy (63.18%)
 * Likes:    1923
 * Dislikes: 110
 * Total Accepted:    296.1K
 * Total Submissions: 468.7K
 * Testcase Example:  '4'
 *
 * The Tribonacci sequence Tn is defined as follows:
 *
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 *
 * Given n, return the value of Tn.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 4
 * Output: 4
 * Explanation:
 * T_3 = 0 + 1 + 1 = 2
 * T_4 = 1 + 1 + 2 = 4
 *
 *
 * Example 2:
 *
 *
 * Input: n = 25
 * Output: 1389537
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= n <= 37
 * The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31
 * - 1.
 *
 */

// @lc code=start
function tribonacci(n: number): number {
  if (n < 1) return 0;
  if (n < 3) return 1;
  return tribonacciTail(n, 1, 1, 0);
}

function tribonacciTail(n: number, acc1: number, acc2: number, acc3: number) {
  if (n < 4) return acc1 + acc2 + acc3;
  return tribonacciTail(n - 1, acc1 + acc2 + acc3, acc1, acc2);
}
// @lc code=end
