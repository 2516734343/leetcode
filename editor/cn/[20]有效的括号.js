//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
//
// 有效字符串需满足：
//
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//
//
//
//
// 示例 1：
//
//
//输入：s = "()"
//输出：true
//
//
// 示例 2：
//
//
//输入：s = "()[]{}"
//输出：true
//
//
// 示例 3：
//
//
//输入：s = "(]"
//输出：false
//
//
// 示例 4：
//
//
//输入：s = "([)]"
//输出：false
//
//
// 示例 5：
//
//
//输入：s = "{[]}"
//输出：true
//
//
//
// 提示：
//
//
// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成
//
// Related Topics 栈 字符串
// 👍 3134 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [], i = 0;

    while (i < s.length) {
        // 左括号入栈
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            if (stack.length > 0 && leftOf(s[i]) === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
        i++;
    }
    return stack.length === 0;

    function leftOf(c) {
        if (c === ')') return '(';
        if (c === '}') return '{';
        if (c === ']') return '[';
    }

};

console.log(isValid("{"));
//leetcode submit region end(Prohibit modification and deletion)
