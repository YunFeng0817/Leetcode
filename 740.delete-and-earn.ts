/*
 * @lc app=leetcode id=740 lang=typescript
 *
 * [740] Delete and Earn
 *
 * https://leetcode.com/problems/delete-and-earn/description/
 *
 * algorithms
 * Medium (57.48%)
 * Likes:    5094
 * Dislikes: 284
 * Total Accepted:    204.2K
 * Total Submissions: 355.2K
 * Testcase Example:  '[3,4,2]'
 *
 * You are given an integer array nums. You want to maximize the number of
 * points you get by performing the following operation any number of
 * times:
 *
 *
 * Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must
 * delete every element equal to nums[i] - 1 and every element equal to nums[i]
 * + 1.
 *
 *
 * Return the maximum number of points you can earn by applying the above
 * operation some number of times.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [3,4,2]
 * Output: 6
 * Explanation: You can perform the following operations:
 * - Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
 * - Delete 2 to earn 2 points. nums = [].
 * You earn a total of 6 points.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [2,2,3,3,3,4]
 * Output: 9
 * Explanation: You can perform the following operations:
 * - Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums =
 * [3,3].
 * - Delete a 3 again to earn 3 points. nums = [3].
 * - Delete a 3 once more to earn 3 points. nums = [].
 * You earn a total of 9 points.
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 2 * 10^4
 * 1 <= nums[i] <= 10^4
 *
 *
 */

// @lc code=start
function deleteAndEarn(nums: number[]): number {
  /** Sort all input values */
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) map.set(num, map.get(num) + num);
    else map.set(num, num);
  }
  const keys = Array.from(map.keys()).sort((a, b) => a - b);
  if (keys.length === 1) return map.get(keys[0]);
  // reuse the map to store the greatest value if all inputs are <= the key
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (i === 0) {
      map.set(key, map.get(key));
    } else {
      const pre = keys[i - 1];
      if (key - pre === 1) {
        let preV = 0;
        if (i - 2 >= 0) preV = map.get(keys[i - 2]);
        map.set(key, Math.max(map.get(pre), preV + map.get(key)));
      } else {
        map.set(key, map.get(pre) + map.get(key));
      }
    }
  }
  return map.get(keys[keys.length - 1]);
}
// @lc code=end
