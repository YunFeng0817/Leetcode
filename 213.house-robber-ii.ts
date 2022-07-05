/*
 * @lc app=leetcode id=213 lang=typescript
 *
 * [213] House Robber II
 *
 * https://leetcode.com/problems/house-robber-ii/description/
 *
 * algorithms
 * Medium (40.18%)
 * Likes:    5982
 * Dislikes: 96
 * Total Accepted:    427.4K
 * Total Submissions: 1.1M
 * Testcase Example:  '[2,3,2]'
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed. All houses at this place are
 * arranged in a circle. That means the first house is the neighbor of the last
 * one. Meanwhile, adjacent houses have a security system connected, and it
 * will automatically contact the police if two adjacent houses were broken
 * into on the same night.
 *
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the
 * police.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,3,2]
 * Output: 3
 * Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money
 * = 2), because they are adjacent houses.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 * Total amount you can rob = 1 + 3 = 4.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,2,3]
 * Output: 3
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 1000
 *
 *
 */

// @lc code=start
function rob(nums: number[]): number {
  const n = nums.length;
  if (n == 1) return nums[0];
  else if (n == 2) return Math.max(nums[0], nums[1]);
  let skipLast1 = nums[0],
    robLast1 = 0,
    skipLast2 = 0,
    robLast2 = nums[1],
    temp;
  for (let i = 2; i < n; i++) {
    temp = robLast1;
    if (i !== n - 1) robLast1 = skipLast1 + nums[i];
    skipLast1 = Math.max(skipLast1, temp);
    temp = robLast2;
    robLast2 = skipLast2 + nums[i];
    skipLast2 = Math.max(skipLast2, temp);
  }
  return Math.max(skipLast1, skipLast2, robLast1, robLast2);
}
// @lc code=end
