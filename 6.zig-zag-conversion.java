import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode id=6 lang=java
 *
 * [6] ZigZag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (34.07%)
 * Likes:    1299
 * Dislikes: 3883
 * Total Accepted:    389.7K
 * Total Submissions: 1.1M
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 * 
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * 
 * And then read line by line: "PAHNAPLSIIGYIR"
 * 
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 * 
 * 
 * string convert(string s, int numRows);
 * 
 * Example 1:
 * 
 * 
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * 
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * 
 */

// @lc code=start
// class Solution {
//     public String convert(String s, int numRows) {
//         if (numRows == 1)
//             return s;

//         List<StringBuilder> rowStrings = new ArrayList<>();
//         for (int i = 0; i < numRows; i++) {
//             rowStrings.add(new StringBuilder());
//         }
//         int direction = -1, count = 0, i = 0;
//         while (count < s.length()) {
//             rowStrings.get(i).append(s.charAt(count));
//             if (i == 0 || i == numRows - 1)
//                 direction = -direction;
//             i += direction;
//             count++;
//         }
//         return rowStrings.stream().reduce((str1, str2) -> str1.append(str2)).orElse(new StringBuilder()).toString();
//     }
// }
// another faster version
class Solution {
    public String convert(String s, int numRows) {
        if (numRows == 1)
            return s;
        if (s.length() == 0)
            return s;
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < numRows; i++) {
            int j = 0;
            int count = 0;
            while (true) {
                if (i == 0 || i == numRows - 1)
                    count = (2 * numRows - 2) * j + i;
                else
                    count = (2 * numRows - 2) * (int) ((j + 1) / 2.0) + i * (j % 2 == 0 ? 1 : -1);
                if (count >= s.length())
                    break;
                result.append(s.charAt(count));
                j++;
            }
        }
        return result.toString();
    }
}
// @lc code=end
// ""\n1
// "A"\n1
// "PAYPALISHIRING"\n2
