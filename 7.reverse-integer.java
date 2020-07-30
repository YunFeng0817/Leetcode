import jdk.jfr.Unsigned;

/*
 * @lc app=leetcode id=7 lang=java
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.80%)
 * Likes:    3470
 * Dislikes: 5479
 * Total Accepted:    1.1M
 * Total Submissions: 4.4M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 * 
 */

// @lc code=start
// faster version
class Solution {
    public int reverse(int x) {
        int result = 0;
        while (x != 0) {
            if (Integer.MAX_VALUE / 10 < Math.abs(result))
                return 0;
            result *= 10;
            if (Integer.MAX_VALUE / 10 == Math.abs(result) && Integer.MAX_VALUE % 10 < x % 10)
                return 0;
            result += x % 10;
            x /= 10;
        }
        return result;
    }
}

// Long version
// class Solution {
// public int reverse(int x) {
// long result = 0, sign = (1 << 31 & x) >> 31;
// while (x != 0) {
// result *= 10;
// result += x % 10;
// x /= 10;
// }
// if (result < Integer.MIN_VALUE || result > Integer.MAX_VALUE)
// return 0;
// return (int) result;
// }
// }
// @lc code=end
// -2147483648
// 2147483647
// 1534236469
