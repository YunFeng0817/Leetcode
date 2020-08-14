/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (38.90%)
 * Likes:    5334
 * Dislikes: 228
 * Total Accepted:    1.1M
 * Total Submissions: 2.7M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 *
 * Note that an empty string is also considered valid.
 *
 * Example 1:
 *
 *
 * Input: "()"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: "()[]{}"
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: "(]"
 * Output: false
 *
 *
 * Example 4:
 *
 *
 * Input: "([)]"
 * Output: false
 *
 *
 * Example 5:
 *
 *
 * Input: "{[]}"
 * Output: true
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = [];
    for (let c of s) {
        switch (c) {
            case "{":
            case "(":
            case "[":
                stack.push(c);
                break;
            case "}":
                if (stack[stack.length - 1] === "{")
                    stack.pop();
                else return false;
                break;
            case ")":
                if (stack[stack.length - 1] === "(")
                    stack.pop();
                else return false;
                break;
            case "]":
                if (stack[stack.length - 1] === "[")
                    stack.pop();
                else return false;
                break;
            default:
                return false;
        }
    }
    return stack.length === 0;
};
// @lc code=end
// "()[]{}"
