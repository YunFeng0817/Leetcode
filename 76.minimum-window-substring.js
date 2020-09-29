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

/* Time limit exceeded version */
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
// var minWindow = function (s, t) {
//     let dp = {};
//     const n = s.length,
//         targetN = t.length;
//     if (n == 0 || targetN == 0) return "";
//     let window = targetN - 1;
//     let targetMap = new Map();
//     for (let j = 0; j < targetN; j++) {
//         let tempChar = t.charAt(j);
//         setMap(targetMap, tempChar);
//     }
//     while (window <= n - 1) {
//         let limit = n - window;
//         for (let i = 0; i < limit; i++) {
//             let windowRight = i + window;
//             let map;
//             if (dp[i]) {
//                 map = dp[i][windowRight - 1];
//                 let tempChar = s.charAt(windowRight);
//                 setMap(map, tempChar);
//                 dp[i][windowRight] = map;
//             } else {
//                 dp[i] = {};
//                 map = new Map();
//                 dp[i][windowRight] = map;
//                 let subStr = s.substring(i, windowRight + 1);
//                 for (let j = 0; j < subStr.length; j++) {
//                     let tempChar = subStr.charAt(j);
//                     setMap(map, tempChar);
//                 }
//             }
//             let flag = true;
//             for (let entry of targetMap) {
//                 let tempChar = entry[0];
//                 if (map.has(tempChar)) {
//                     let count = map.get(tempChar);
//                     if (count < entry[1]) {
//                         flag = false;
//                         continue;
//                     }
//                 } else {
//                     flag = false;
//                     continue;
//                 }
//             }
//             if (flag) return s.substring(i, windowRight + 1);
//         }
//         window++;
//     }
//     return "";
// };
// function setMap(map, char) {
//     if (map.has(char)) {
//         map.set(char, map.get(char) + 1);
//     } else {
//         map.set(char, 1);
//     }
// }
// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const n = s.length,
        targetN = t.length;
    if (n == 0 || targetN == 0) return "";
    let left = 0,
        right = 0;
    let targetMap = new Map();
    for (let j = 0; j < targetN; j++) {
        let tempChar = t.charAt(j);
        setMap(targetMap, tempChar);
    }
    let filteredS = [];
    for (let i = 0; i < s.length; i++) {
        let tempChar = s.charAt(i);
        if (targetMap.has(tempChar)) {
            let item = {};
            item.index = i;
            item.value = tempChar;
            filteredS.push(item);
        }
    }
    let countWindow = new Map();
    for (let i = 0; i < right; i++) {
        let tempChar = filteredS[i].value;
        setMap(countWindow, tempChar);
    }
    let result = { length: Number.MAX_VALUE, left: -1, right: -1 };
    while (right < filteredS.length) {
        let tempChar = filteredS[right].value;
        setMap(countWindow, tempChar);
        while (judge(countWindow, targetMap)) {
            let leftIndex = filteredS[left].index;
            let rightIndex = filteredS[right].index;
            if (rightIndex - leftIndex + 1 < result.length) {
                result.length = rightIndex - leftIndex + 1;
                result.left = leftIndex;
                result.right = rightIndex;
            }
            let tempChar = filteredS[left].value;
            countWindow.set(tempChar, countWindow.get(tempChar) - 1);
            left++;
        }
        right++;
    }
    return result.length === Number.MAX_VALUE ? "" : s.substring(result.left, result.right + 1);
};
function setMap(map, char) {
    if (map.has(char)) {
        map.set(char, map.get(char) + 1);
    } else {
        map.set(char, 1);
    }
}
function judge(countWindow, targetMap) {
    let flag = true;
    for (let entry of targetMap) {
        let tempChar = entry[0];
        if (countWindow.has(tempChar)) {
            let count = countWindow.get(tempChar);
            if (count < entry[1]) {
                flag = false;
                return false;
            }
        } else {
            flag = false;
            return false;
        }
    }
    return true;
}
// @lc code=end
// ""ADOBECODEBANC"\n"""
// ""a"\n"a""
// ""bbaa"\n"aba""
// ""acbbaca"\n"aba""
// ""aaaaaaaaaaaabbbbbcdd"\n"abcdd""
// ""mspkqlcdmrwgrmcaytxilusinwgjvkdhfuuvfwarpxaglegjyftlblvqjezhqeovyisfgtxvqzdbdlmbthowumnfqomitbetlyzsrwpjvvkygycbfsyzgnfwbrhwunqilpadnrmkmzkvzowfhwgnjnmlftjbgzjtolwddlnrmymlmlsvhzltmzgtspvapetfqsjvfymrybelmxivwtokuueokbobhkgzerujqjcomgbadmxbhmociuquvhxereexvainlkcxsfxyrvzzjpbtjrqgynlrtpqrryedkiadqabhxcigslbdftkfhvxcmptdoagykjdajekgjsodgrgllqqulpwzfsdvsjtcszfddplojbrptyagqtaeiydnqgiksepmduqildxwfqmaqoghhilqiqfbxqlrucdzythlzgiexwepkmwuwjmeatfzjtqfxtewpohourutnajamhwiriotbwsnpismdxkunskhjedzeozsvvaofrhinzvcjoqpnbjavwjgcohjcgbadeokvytizomjeearhlrchdlkrstwbwwgamrxkkhkatvfavwhgqmqvzamrviutebutstfcbpcwmjwjigqyuittkhmfqhywkupcqvgrmkpbumkcuacokxhuevzwcatmwkqmhwfwjvxfjhhdkltuicpoxqlcsgqpshdafjwqevvpcesmpljzpyomqbqjjhabqddvozoswjhzobndowfdwvsnwiwhryihbmfqntkkculsxyyoxdrtyliwwgdnenvgbcypvkbzgmsemqujvlftzprvwwialfinjieetfgbtahhqbtlnagop"\n"zjlxtmibwxkfbraixbdx""
