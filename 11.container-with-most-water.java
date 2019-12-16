/*
 * @lc app=leetcode id=11 lang=java
 *
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms Medium (47.91%) Likes: 4408 Dislikes: 495 Total Accepted: 503K
 * Total Submissions: 1M Testcase Example: '[1,8,6,2,5,4,8,3,7]'
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a point
 * at coordinate (i, ai). n vertical lines are drawn such that the two endpoints
 * of line i is at (i, ai) and (i, 0). Find two lines, which together with
 * x-axis forms a container, such that the container contains the most water.
 * 
 * Note: You may not slant the container and n is at least 2.
 * 
 * 
 * 
 * 
 * 
 * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In
 * this case, the max area of water (blue section) the container can contain is
 * 49.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: [1,8,6,2,5,4,8,3,7] Output: 49
 */

// @lc code=start
// class Solution {
//     public int maxArea(int[] height) {
//         final int len = height.length;
//         int max = 0;
//         for (int i = 0; i < len; i++) {
//             for (int j = i + 1; j < len; j++) {
//                 max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
//             }
//         }
//         return max;
//     }
// }

// faster version
class Solution {
    public int maxArea(int[] height) {
        int low = 0, high = height.length - 1;
        int max = 0;
        while (low < high) {
            max = Math.max(max, (high - low) * Math.min(height[low], height[high]));
            if (height[low] > height[high])
                high--;
            else
                low++;
        }
        return max;
    }
}
// @lc code=end