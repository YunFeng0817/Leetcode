import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/*
 * @lc app=leetcode id=15 lang=java
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (25.33%)
 * Likes:    5070
 * Dislikes: 613
 * Total Accepted:    722.3K
 * Total Submissions: 2.8M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 */

// @lc code=start
// class Solution {
//     public List<List<Integer>> threeSum(int[] nums) {
//         List<Integer> negativeNums = new ArrayList<Integer>();
//         List<Integer> positiveNums = new ArrayList<Integer>();
//         int zeroCount = 0;
//         List<List<Integer>> results = new ArrayList<List<Integer>>();
//         for (int i = 0; i < nums.length; i++) {
//             if (nums[i] > 0)
//                 positiveNums.add(nums[i]);
//             else if (nums[i] == 0)
//                 zeroCount++;
//             else
//                 negativeNums.add(nums[i]);
//         }
//         Set<Integer> negativeSets = new HashSet<>(negativeNums);
//         Set<Integer> positiveSets = new HashSet<>(positiveNums);
//         for (int i : negativeSets) {
//             results.addAll(twoSum(positiveNums, -i));
//         }
//         for (int i : positiveSets) {
//             results.addAll(twoSum(negativeNums, -i));
//         }
//         if (zeroCount > 0) {
//             for (int i : negativeSets) {
//                 if (positiveSets.contains(-i)) {
//                     results.add(Arrays.asList(i, 0, -i));
//                 }
//             }
//             if (zeroCount >= 3) {
//                 results.add(Arrays.asList(0, 0, 0));
//             }
//         }
//         return results;
//     }

//     public List<List<Integer>> twoSum(List<Integer> nums, int value) {
//         List<List<Integer>> results = new ArrayList<List<Integer>>();
//         Set<Integer> sets = new HashSet<>();
//         Set<Integer> addSets = new HashSet<>();
//         for (int i = 0; i < nums.size(); i++) {
//             final int tempInt = nums.get(i);
//             int target = value - tempInt;
//             if (sets.contains(target) && !addSets.contains(nums.get(i))) {
//                 addSets.add(tempInt);
//                 addSets.add(target);
//                 results.add(Arrays.asList(tempInt, target, -value));
//             } else {
//                 sets.add(tempInt);
//             }
//         }
//         return results;
//     }
// }

// A faster version: used two pointer while computing two sum results
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> results = new ArrayList<>();
        if (nums.length < 3)
            return results;
        for (int i = 0; i < nums.length; i++) {
            int target = -nums[i];
            if (nums[i] > 0)
                break;
            if (i > 0 && nums[i] == nums[i - 1])
                continue;
            int low = i + 1;
            int high = nums.length - 1;
            // computing two sum results
            while (low < high) {
                int twoSum = nums[low] + nums[high];
                if (twoSum == target) {
                    results.add(Arrays.asList(-target, nums[low], nums[high]));
                    while (low < high && nums[low] == nums[++low])
                        ;
                    while (low < high && nums[high] == nums[--high])
                        ;
                } else if (twoSum < target)
                    low++;
                else
                    high--;
            }
        }
        return results;
    }
}
// @lc code=end
// [-1, 0, 1, 2, -1, -4, 2]
// [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
// [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]
