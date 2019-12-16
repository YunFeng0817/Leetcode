/*
 * @lc app=leetcode id=1275 lang=java
 *
 * [1275] Find Winner on a Tic Tac Toe Game
 */

// @lc code=start
class Solution {
    public String tictactoe(int[][] moves) {
        int[][] checkerboard = new int[3][3];
        int[] results = new int[8];
        for (int i = 0; i < moves.length; i++) {
            checkerboard[moves[i][0]][moves[i][1]] = i % 2 == 0 ? 1 : -1;
        }
        for (int i = 0; i < checkerboard.length; i++) {
            results[i] = checkerboard[i][0] + checkerboard[i][1] + checkerboard[i][2];
            results[i + 3] = checkerboard[0][i] + checkerboard[1][i] + checkerboard[2][i];
        }
        results[6] = checkerboard[0][0] + checkerboard[1][1] + checkerboard[2][2];
        results[7] = checkerboard[0][2] + checkerboard[1][1] + checkerboard[2][0];
        for (int i = 0; i < results.length; i++) {
            if (results[i] == 3)
                return "A";
            else if (results[i] == -3)
                return "B";
        }
        for (int i = 0; i < checkerboard.length; i++) {
            for (int j = 0; j < checkerboard.length; j++) {
                if (checkerboard[i][j] == 0)
                    return "Pending";
            }
        }
        return "Draw";
    }
}
// @lc code=end
