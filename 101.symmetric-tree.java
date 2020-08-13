import java.util.*;

/*
 * @lc app=leetcode id=101 lang=java
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (46.77%)
 * Likes:    4310
 * Dislikes: 105
 * Total Accepted:    671.8K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric
 * around its center).
 * 
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 * 
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 
 * 
 * But the following [1,2,2,null,3,null,3] is not:
 * 
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 
 * 
 * Follow up: Solve it both recursively and iteratively.
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
// class Solution {
// public boolean isSymmetric(TreeNode root) {
// Queue<TreeNode> nodes = new LinkedList<>();
// nodes.add(root);
// Deque<TreeNode> floor = new LinkedList<>();
// while (!nodes.isEmpty()) {
// while (!nodes.isEmpty()) {
// TreeNode first = nodes.poll();
// if (first != null) {
// floor.add(first.left);
// floor.add(first.right);
// }
// }
// nodes.addAll(floor);
// if (!judgeSymmetric(floor))
// return false;
// }
// return true;
// }

// public boolean judgeSymmetric(Deque<TreeNode> floor) {
// TreeNode first, last;
// while (!floor.isEmpty()) {
// first = floor.pollFirst();
// last = floor.pollLast();
// if (first == null && last == null)
// continue;
// else if (first == null || last == null)
// return false;
// else if (first.val != last.val)
// return false;
// }
// return true;
// }
// }
// better version
class Solution {
	public boolean isSymmetric(TreeNode root) {
		Queue<TreeNode> q = new LinkedList<>();
		if (root != null) {
			q.add(root.left);
			q.add(root.right);
		}
		while (!q.isEmpty()) {
			TreeNode t1 = q.poll();
			TreeNode t2 = q.poll();
			if (t1 == null && t2 == null)
				continue;
			if (t1 == null || t2 == null)
				return false;
			if (t1.val != t2.val)
				return false;
			q.add(t1.left);
			q.add(t2.right);
			q.add(t1.right);
			q.add(t2.left);
		}
		return true;
	}
}
// @lc code=end
// []
// [1]
// [1,2,2,null,3,null,3]
// [1,2,2,null,3,3,null]
