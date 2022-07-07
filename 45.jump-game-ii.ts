/*
 * @lc app=leetcode id=45 lang=typescript
 *
 * [45] Jump Game II
 *
 * https://leetcode.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Medium (37.72%)
 * Likes:    8585
 * Dislikes: 317
 * Total Accepted:    641.1K
 * Total Submissions: 1.7M
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers nums, you are initially positioned
 * at the first index of the array.
 *
 * Each element in the array represents your maximum jump length at that
 * position.
 *
 * Your goal is to reach the last index in the minimum number of jumps.
 *
 * You can assume that you can always reach the last index.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2. Jump
 * 1 step from index 0 to 1, then 3 steps to the last index.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [2,3,0,1,4]
 * Output: 2
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * 0 <= nums[i] <= 1000
 *
 *
 */

// @lc code=start
function jump(nums: number[]): number {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) nums[i] = 0;
    else if (nums[i] === 0) nums[i] = -1;
    else {
      let min = Number.MAX_VALUE;
      for (let j = i + 1; j <= i + nums[i]; j++) {
        if (nums[j] === -1) continue;
        if (nums[j] + 1 < min) min = nums[j] + 1;
      }
      if (min === Number.MAX_VALUE) nums[i] = -1;
      else nums[i] = min;
    }
  }
  return nums[0];
}
// @lc code=end
