/*
 * @lc app=leetcode id=14 lang=java
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (34.44%)
 * Likes:    1815
 * Dislikes: 1573
 * Total Accepted:    599.4K
 * Total Submissions: 1.7M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */

// @lc code=start
class Solution {
    public String longestCommonPrefix(String[] strs) {
        int longest = Integer.MAX_VALUE;
        for (int i = 0; i < strs.length; i++) {
            if (strs[i].length() < longest)
                longest = strs[i].length();
        }
        String result = null;
        while (longest > 0 && longest != Integer.MAX_VALUE) {
            result = strs[0].substring(0, longest);
            int i;
            for (i = 1; i < strs.length; i++) {
                if (!result.equals(strs[i].substring(0, longest)))
                    break;
            }
            if (i == strs.length)
                return result;
            longest--;
        }
        return "";

    }
}
// @lc code=end
