/*
 * @lc app=leetcode id=918 lang=typescript
 *
 * [918] Maximum Sum Circular Subarray
 *
 * https://leetcode.com/problems/maximum-sum-circular-subarray/description/
 *
 * algorithms
 * Medium (37.52%)
 * Likes:    3413
 * Dislikes: 151
 * Total Accepted:    125.5K
 * Total Submissions: 334.3K
 * Testcase Example:  '[1,-2,3,-2]'
 *
 * Given a circular integer array nums of length n, return the maximum possible
 * sum of a non-empty subarray of nums.
 *
 * A circular array means the end of the array connects to the beginning of the
 * array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the
 * previous element of nums[i] is nums[(i - 1 + n) % n].
 *
 * A subarray may only include each element of the fixed buffer nums at most
 * once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there
 * does not exist i <= k1, k2 <= j with k1 % n == k2 % n.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,-2,3,-2]
 * Output: 3
 * Explanation: Subarray [3] has maximum sum 3.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [5,-3,5]
 * Output: 10
 * Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [-3,-2,-3]
 * Output: -2
 * Explanation: Subarray [-2] has maximum sum -2.
 *
 *
 *
 * Constraints:
 *
 *
 * n == nums.length
 * 1 <= n <= 3 * 10^4
 * -3 * 10^4 <= nums[i] <= 3 * 10^4
 *
 *
 */

// @lc code=start
function maxSubarraySumCircular(nums: number[]): number {
  let sum = 0;
  const case1Max = maxSubArray(nums);
  nums = nums.map((v) => {
    sum += v;
    return -v;
  });
  let case2Max = maxSubArray(nums);
  case2Max = sum + case2Max;
  // corner case: all numbers are negative
  if (case1Max < 0) return case1Max;
  return Math.max(case1Max, case2Max);
}

function maxSubArray(nums: number[]): number {
  let previousSum = 0,
    max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    previousSum = Math.max(previousSum + nums[i], nums[i]);
    if (previousSum > max) max = previousSum;
  }
  return max;
}
// @lc code=end
// https://youtu.be/Gk6yWhfzdOc
// [3,2,4,-5,-6,-7,1]
