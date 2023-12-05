/*
 * @lc app=leetcode id=189 lang=typescript
 *
 * [189] Rotate Array
 *
 * https://leetcode.com/problems/rotate-array/description/
 *
 * algorithms
 * Medium (39.65%)
 * Likes:    16745
 * Dislikes: 1824
 * Total Accepted:    1.8M
 * Total Submissions: 4.6M
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * Given an integer array nums, rotate the array to the right by k steps, where
 * k is non-negative.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 * Explanation:
 * rotate 1 steps to the right: [99,-1,-100,3]
 * rotate 2 steps to the right: [3,99,-1,-100]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * -2^31 <= nums[i] <= 2^31 - 1
 * 0 <= k <= 10^5
 *
 *
 *
 * Follow up:
 *
 *
 * Try to come up with as many solutions as you can. There are at least three
 * different ways to solve this problem.
 * Could you do it in-place with O(1) extra space?
 *
 *
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  rotateHelper(nums, k, nums.length);
}

function rotateHelper(nums: number[], k: number, n: number) {
  if (k === 0 || n === 1) return;
  k = k % n;
  for (let i = k; i > 0; i--) {
    const holder = nums[n - i];
    for (let j = n - i; j >= 0; j -= k)
      if (j - k >= 0) nums[j] = nums[j - k];
      else nums[j] = holder;
  }
  if (k !== 0 && n % k !== 0) rotateHelper(nums, k - (n % k), k);
}
// @lc code=end
