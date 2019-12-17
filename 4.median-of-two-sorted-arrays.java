/*
 * @lc app=leetcode id=4 lang=java
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms Hard (27.90%) Likes: 5525 Dislikes: 817 Total Accepted: 557.6K
 * Total Submissions: 2M Testcase Example: '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 * 
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 * 
 * 
 * nums1 = [1, 3] nums2 = [2]
 * 
 * The median is 2.0
 * 
 * 
 * Example 2:
 * 
 * 
 * nums1 = [1, 2] nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * 
 * 
 */

// @lc code=start
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        final int total_length = nums1.length + nums2.length;
        int[] merge = new int[total_length / 2 + 1];
        int i = 0, i1 = 0, i2 = 0;
        while (i < total_length / 2 + 1) {
            int a = i1 < nums1.length ? nums1[i1] : Integer.MAX_VALUE;
            int b = i2 < nums2.length ? nums2[i2] : Integer.MAX_VALUE;
            if (a < b) {
                i1++;
                merge[i] = a;
            } else {
                i2++;
                merge[i] = b;
            }
            i++;
        }
        if (total_length % 2 == 0)
            return (merge[total_length / 2 - 1] + merge[total_length / 2]) / 2.0;
        else
            return merge[total_length / 2];
    }
}

// A similar version to save more memory space in theory
// But in practice, the saving of memory is not obvious
// class Solution {
// public double findMedianSortedArrays(int[] nums1, int[] nums2) {
// final int total_length = nums1.length + nums2.length;
// int[] merge = new int[2];
// int i = 0, i1 = 0, i2 = 0;
// while (i < total_length / 2 + 1) {
// int a = i1 < nums1.length ? nums1[i1] : Integer.MAX_VALUE;
// int b = i2 < nums2.length ? nums2[i2] : Integer.MAX_VALUE;
// merge[0] = merge[1];
// if (a < b) {
// i1++;
// merge[1] = a;
// } else {
// i2++;
// merge[1] = b;
// }
// i++;
// }
// if (total_length % 2 == 0)
// return (merge[1] + merge[0]) / 2.0;
// else
// return merge[1];
// }
// }
// @lc code=end
// [1,2]\n[3,4]