/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 *
 * https://leetcode.com/problems/summary-ranges/description/
 *
 * algorithms
 * Easy (49.29%)
 * Likes:    3517
 * Dislikes: 1836
 * Total Accepted:    433.7K
 * Total Submissions: 879.8K
 * Testcase Example:  '[0,1,2,4,5,7]'
 *
 * You are given a sorted unique integer array nums.
 *
 * A range [a,b] is the set of all integers from a to b (inclusive).
 *
 * Return the smallest sorted list of ranges that cover all the numbers in the
 * array exactly. That is, each element of nums is covered by exactly one of
 * the ranges, and there is no integer x such that x is in one of the ranges
 * but not in nums.
 *
 * Each range [a,b] in the list should be output as:
 *
 *
 * "a->b" if a != b
 * "a" if a == b
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [0,1,2,4,5,7]
 * Output: ["0->2","4->5","7"]
 * Explanation: The ranges are:
 * [0,2] --> "0->2"
 * [4,5] --> "4->5"
 * [7,7] --> "7"
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,2,3,4,6,8,9]
 * Output: ["0","2->4","6","8->9"]
 * Explanation: The ranges are:
 * [0,0] --> "0"
 * [2,4] --> "2->4"
 * [6,6] --> "6"
 * [8,9] --> "8->9"
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= nums.length <= 20
 * -2^31 <= nums[i] <= 2^31 - 1
 * All the values of nums are unique.
 * nums is sorted in ascending order.
 *
 *
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  const results: string[] = [];
  if (nums.length === 0) return results;
  let rStart = nums[0],
    rEnd = nums[0];
  nums.splice(0, 1);
  const addResult = (start: number, end: number) => {
    if (start === end) results.push(`${start}`);
    else results.push(`${start}->${end}`);
  };
  nums.forEach((num) => {
    if (num === rEnd + 1) {
      rEnd = num;
      return;
    }
    addResult(rStart, rEnd);
    rStart = num;
    rEnd = num;
  });
  addResult(rStart, rEnd);
  return results;
}
// @lc code=end
