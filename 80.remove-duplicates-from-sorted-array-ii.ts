/*
 * @lc app=leetcode id=80 lang=typescript
 *
 * [80] Remove Duplicates from Sorted Array II
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
 *
 * algorithms
 * Medium (53.97%)
 * Likes:    6210
 * Dislikes: 1175
 * Total Accepted:    730.8K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,1,1,2,2,3]'
 *
 * Given an integer array nums sorted in non-decreasing order, remove some
 * duplicates in-place such that each unique element appears at most twice. The
 * relative order of the elements should be kept the same.
 *
 * Since it is impossible to change the length of the array in some languages,
 * you must instead have the result be placed in the first part of the array
 * nums. More formally, if there are k elements after removing the duplicates,
 * then the first k elements of nums should hold the final result. It does not
 * matter what you leave beyond the first k elements.
 *
 * Return k after placing the final result in the first k slots of nums.
 *
 * Do not allocate extra space for another array. You must do this by modifying
 * the input array in-place with O(1) extra memory.
 *
 * Custom Judge:
 *
 * The judge will test your solution with the following code:
 *
 *
 * int[] nums = [...]; // Input array
 * int[] expectedNums = [...]; // The expected answer with correct length
 *
 * int k = removeDuplicates(nums); // Calls your implementation
 *
 * assert k == expectedNums.length;
 * for (int i = 0; i < k; i++) {
 * ⁠   assert nums[i] == expectedNums[i];
 * }
 *
 *
 * If all assertions pass, then your solution will be accepted.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,1,1,2,2,3]
 * Output: 5, nums = [1,1,2,2,3,_]
 * Explanation: Your function should return k = 5, with the first five elements
 * of nums being 1, 1, 2, 2 and 3 respectively.
 * It does not matter what you leave beyond the returned k (hence they are
 * underscores).
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,0,1,1,1,1,2,3,3]
 * Output: 7, nums = [0,0,1,1,2,3,3,_,_]
 * Explanation: Your function should return k = 7, with the first seven
 * elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
 * It does not matter what you leave beyond the returned k (hence they are
 * underscores).
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 3 * 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums is sorted in non-decreasing order.
 *
 *
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let counter = 0,
    pre = NaN;
  for (let i = 0; i < nums.length; i++) {
    if (pre === nums[i]) counter++;
    else {
      counter = 1;
      pre = nums[i];
    }

    if (counter > 2) nums[i] = NaN;
  }

  counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (Number.isNaN(nums[i])) {
      for (let j = i + 1; j < nums.length; j++) {
        if (Number.isNaN(nums[j])) continue;
        nums[i] = nums[j];
        nums[j] = NaN;
        break;
      }
      if (Number.isNaN(nums[i])) break;
    }
    counter++;
  }
  return counter;
}
// @lc code=end
