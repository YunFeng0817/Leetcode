/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 *
 * https://leetcode.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (38.09%)
 * Likes:    11737
 * Dislikes: 644
 * Total Accepted:    1.1M
 * Total Submissions: 2.8M
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * You are given an integer array nums. You are initially positioned at the
 * array's first index, and each element in the array represents your maximum
 * jump length at that position.
 *
 * Return true if you can reach the last index, or false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last
 * index.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its maximum
 * jump length is 0, which makes it impossible to reach the last index.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * 0 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1)
      nums[i] = 1;
    else if (nums[i] > 0) {
      let canJump = false;
      for (let j = i + 1; j <= i + nums[i]; j++) {
        if (nums[j] === 1) {
          canJump = true;
          break;
        }
      }
      if (canJump) nums[i] = 1;
      else nums[i] = 0;
    }
  }
  return nums[0] === 1;
}
// @lc code=end
