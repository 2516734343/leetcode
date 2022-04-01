//在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
//
// 示例 1:
//
//
//输入：s = "abaccdeff"
//输出：'b'
//
//
// 示例 2:
//
//
//输入：s = ""
//输出：' '
//
//
//
//
// 限制：
//
// 0 <= s 的长度 <= 50000
// Related Topics 队列 哈希表 字符串 计数
// 👍 199 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var firstUniqChar = function(s) {
    if(s.length <= 0) return ' ';
    let map = new Map();
    let i = 0;
    while (i < s.length) {
        if (map.has(s[i])) {
            let count = map.get(s[i])+1;
            map.set(s[i], count);
        } else {
            map.set(s[i], 1);
        }
        i++;
    }
    for(let obj of map.entries()) {
        if (obj[1] === 1) {
            return obj[0];
            break;
        }
    }
    return ' ';

};
//leetcode submit region end(Prohibit modification and deletion)
