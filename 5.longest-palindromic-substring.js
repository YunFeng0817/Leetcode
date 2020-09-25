/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (29.40%)
 * Likes:    7242
 * Dislikes: 550
 * Total Accepted:    969.3K
 * Total Submissions: 3.3M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 *
 * Example 1:
 *
 *
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: "cbbd"
 * Output: "bb"
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const n = s.length;
    let dp = [];
    for (let i = 0; i < n; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) dp[i][j] = false;
    }
    let length = 0,
        left,
        right;
    for (let gap = 0; gap < n; gap++) {
        for (let i = 0; i + gap < n; i++) {
            let j = i + gap;
            if (gap === 0) {
                dp[i][j] = true;
            } else if (gap === 1) {
                dp[i][j] = s[i] === s[j];
            } else {
                dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
            }
            if (dp[i][j] === true && gap + 1 > length) {
                length = gap + 1;
                left = i;
                right = j;
            }
        }
    }
    return s.substring(left, right + 1);
};
// @lc code=end
// "b"\n
// ""\n
// "vaomxdtiuwqlwhgutkhxxhccsgvyoaccuicgybnqnslogtqhblegfudagpxfvjdacsxgevvepuwthdtybgflsxjdmmfumyqgpxatvdypjmlapccaxwkuxkilqqgpihyepkilhlfkdrbsefinitdcaghqmhylnixidrygdnzmgubeybczjceiybowglkywrpkfcwpsjbkcpnvfbxnpuqzhotzspgebptnhwevbkcueyzecdrjpbpxemagnwmtwikmkpqluwmvyswvxghajknjxfazshsvjkstkezdlbnkwxawlwkqnxghjzyigkvqpapvsntojnxlmtywdrommoltpbvxwqyijpkirvndwpgufgjelqvwffpuycqfwenhzrbzbdtupyutgccdjyvhptnuhxdwbmdcbpfvxvtfryszhaakwshrjseonfvjrrdefyxefqfvadlwmedpvnozobftnnsutegrtxhwitrwdpfienhdbvvykoynrsbpmzjtotjxbvemgoxreiveakmmbbvbmfbbnyfxwrueswdlxvuelbkrdxlutyukppkzjnmfmclqpkwzyylwlzsvriwomchzzqwqglpflaepoxcnnewzstvegyaowwhgvcwjhbbstvzhhvghigoazbjiikglbqlxlccrwqvyqxpbtpoqjliziwmdkzfsrqtqdkeniulsavsfqsjwnvpprvczcujihoqeanobhlsvbzmgflhykndfydbxatskf"\n
