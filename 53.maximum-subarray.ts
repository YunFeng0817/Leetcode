/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Medium (49.65%)
 * Likes:    22441
 * Dislikes: 1105
 * Total Accepted:    2.5M
 * Total Submissions: 5M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 *
 * A subarray is a contiguous part of an array.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1]
 * Output: 1
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 *
 *
 *
 * Follow up: If you have figured out the O(n) solution, try coding another
 * solution using the divide and conquer approach, which is more subtle.
 *
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  // store the max sum end with ith value
  let previousSum = nums[0];
  let max = previousSum;
  for (let i = 1; i < nums.length; i++) {
    previousSum = Math.max(previousSum + nums[i], nums[i]);
    if (previousSum > max) max = previousSum;
  }
  return max;
}
// @lc code=end
// https://youtu.be/Gk6yWhfzdOc
// [8,-19,5,-4,20]
