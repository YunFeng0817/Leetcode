import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

/*
 * @lc app=leetcode id=3 lang=java
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * description/
 *
 * algorithms Medium (29.24%) Likes: 7157 Dislikes: 423 Total Accepted: 1.2M
 * Total Submissions: 4.2M Testcase Example: '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb" Output: 3 Explanation: The answer is "abc", with the length
 * of 3.
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb" Output: 1 Explanation: The answer is "b", with the length of
 * 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew" Output: 3 Explanation: The answer is "wke", with the length
 * of 3. ⁠ Note that the answer must be a substring, "pwke" is a subsequence and
 * not a substring.
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
// Time Exceed version
// class Solution {
// public int lengthOfLongestSubstring(String s) {
// if (s.length() == 0)
// return 0;
// Map<Character, LinkedList<Integer>> map = new HashMap<>();
// final int len = s.length();
// char tempChar;
// LinkedList<Integer> list;
// for (int i = 0; i < len; i++) {
// tempChar = s.charAt(i);
// if (!map.containsKey(tempChar)) {
// list = new LinkedList<Integer>();
// list.add(i);
// map.put(tempChar, list);
// } else {
// list = map.get(tempChar);
// for (int j = 0; j < list.size(); j++) {
// if (i < list.get(j))
// continue;
// else {
// list.add(Math.max(0, j - 1), i);
// break;
// }
// }
// }
// }
// return getLongest(map, 0, len - 1);
// }

// public int getLongest(Map<Character, LinkedList<Integer>> map, int start, int
// end) {
// if (end - start == 0)
// return 1;
// int equalStart = 0, equalEnd = 0;
// int pre, next;
// int longestLen = end - start + 1;
// for (LinkedList<Integer> list : map.values()) {
// next = -1;
// for (int i = 0; i < list.size(); i++) {
// int temp = list.get(i);
// if (temp >= start && temp <= end) {
// pre = next;
// next = temp;
// temp = pre - next;
// if (pre != -1 && temp < longestLen) {
// longestLen = temp;
// equalEnd = pre;
// equalStart = next;
// }
// }
// }
// }
// if (longestLen == end - start + 1)
// return longestLen;
// int len1 = 1, len2 = 1;
// if (equalEnd - start > 1)
// len1 = getLongest(map, start, equalEnd - 1);
// if (end - equalStart > 1)
// len2 = getLongest(map, equalStart + 1, end);
// return Math.max(len1, len2);
// }
// }
class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int n = s.length(), maxLength = 0;
        for (int i = 0, j = 0; j < n; j++) {
            char tempChar = s.charAt(j);
            if (map.containsKey(tempChar)) {
                i = Math.max(map.get(tempChar), i);
            }
            map.put(tempChar, j + 1);
            maxLength = Math.max(maxLength, j - i + 1);
        }
        return maxLength;
    }
}
// @lc code=end
// "sahgskljhgwehagkjdgiwhgowh8ao;is"
// "dvdf"