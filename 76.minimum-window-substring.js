/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 *
 * https://leetcode.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (34.56%)
 * Likes:    5138
 * Dislikes: 347
 * Total Accepted:    435.4K
 * Total Submissions: 1.2M
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * Given a string S and a string T, find the minimum window in S which will
 * contain all the characters in T in complexity O(n).
 *
 * Example:
 *
 *
 * Input: S = "ADOBECODEBANC", T = "ABC"
 * Output: "BANC"
 *
 *
 * Note:
 *
 *
 * If there is no such window in S that covers all characters in T, return the
 * empty string "".
 * If there is such window, you are guaranteed that there will always be only
 * one unique minimum window in S.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let dp = {};
    const n = s.length,
        targetN = t.length;
    let window = targetN - 1;
    while (window <= n - 1) {
        let limit = n - window;
        for (let i = 0; i < limit; i++) {
            let windowRight = i + window;
            let map;
            if (dp[i]) {
                map = dp[i][windowRight - 1];
                let tempChar = s.charAt(windowRight);
                if (map.has(tempChar)) {
                    map.set(tempChar, map.get(tempChar) + 1);
                } else {
                    map.set(tempChar, 1);
                }
                dp[i][windowRight] = map;
            } else {
                dp[i] = {};
                map = new Map();
                dp[i][windowRight] = map;
                let subStr = s.substring(i, windowRight + 1);
                for (let j = 0; j < subStr.length; j++) {
                    let tempChar = subStr.charAt(j);
                    if (map.has(tempChar)) {
                        map.set(tempChar, map.get(tempChar) + 1);
                    } else {
                        map.set(tempChar, 1);
                    }
                }
            }
            let flag = true;
            let tempMap = new Map();
            for (let j = 0; j < targetN; j++) {
                let tempChar = t.charAt(j);
                if (tempMap.has(tempChar)) {
                    tempMap.set(tempChar, tempMap.get(tempChar) + 1);
                } else {
                    tempMap.set(tempChar, 1);
                }
                let count = map.has(tempChar) ? map.get(tempChar) : 0;
                if (count < tempMap.get(tempChar)) {
                    flag = false;
                    continue;
                }
            }
            if (flag) return s.substring(i, windowRight + 1);
        }
        window++;
    }
    return "";
};
// @lc code=end
// ""ADOBECODEBANC"\n"""
// ""a"\n"a""
// ""bbaa"\n"aba""
// ""acbbaca"\n"aba""
// ""aaaaaaaaaaaabbbbbcdd"\n"abcdd""
// ""mspkqlcdmrwgrmcaytxilusinwgjvkdhfuuvfwarpxaglegjyftlblvqjezhqeovyisfgtxvqzdbdlmbthowumnfqomitbetlyzsrwpjvvkygycbfsyzgnfwbrhwunqilpadnrmkmzkvzowfhwgnjnmlftjbgzjtolwddlnrmymlmlsvhzltmzgtspvapetfqsjvfymrybelmxivwtokuueokbobhkgzerujqjcomgbadmxbhmociuquvhxereexvainlkcxsfxyrvzzjpbtjrqgynlrtpqrryedkiadqabhxcigslbdftkfhvxcmptdoagykjdajekgjsodgrgllqqulpwzfsdvsjtcszfddplojbrptyagqtaeiydnqgiksepmduqildxwfqmaqoghhilqiqfbxqlrucdzythlzgiexwepkmwuwjmeatfzjtqfxtewpohourutnajamhwiriotbwsnpismdxkunskhjedzeozsvvaofrhinzvcjoqpnbjavwjgcohjcgbadeokvytizomjeearhlrchdlkrstwbwwgamrxkkhkatvfavwhgqmqvzamrviutebutstfcbpcwmjwjigqyuittkhmfqhywkupcqvgrmkpbumkcuacokxhuevzwcatmwkqmhwfwjvxfjhhdkltuicpoxqlcsgqpshdafjwqevvpcesmpljzpyomqbqjjhabqddvozoswjhzobndowfdwvsnwiwhryihbmfqntkkculsxyyoxdrtyliwwgdnenvgbcypvkbzgmsemqujvlftzprvwwialfinjieetfgbtahhqbtlnagop"\n"zjlxtmibwxkfbraixbdx""
