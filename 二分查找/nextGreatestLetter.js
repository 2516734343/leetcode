/**
 * 寻找比目标字母大的最小字母
给你一个排序后的字符列表 letters ，列表中只包含小写英文字母。另给出一个目标字母 target，请你寻找在这一有序列表里比目标字母大的最小字母。

在比较时，字母是依序循环出现的。举个例子：

如果目标字母 target = 'z' 并且字符列表为 letters = ['a', 'b']，则答案返回 'a'
 

示例：

输入:
letters = ["c", "f", "j"]
target = "a"
输出: "c"


 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let left = 0, right = letters.length - 1, mid = Math.floor((left + right) / 2);
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (letters[mid] <= target) {// 往右找
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  if (letters[left] > target) {
    return letters[left];
  } else {
    return letters[0];
  }

};