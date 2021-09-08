/**
 * 在排序数组中查找元素的第一个和最后一个位置
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：

你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]


 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0, right = nums.length - 1, mid = Math.floor((left + right) / 2);
  while (left + 1 < right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] < target) {
      left = mid;
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      let l = mid, r = mid;
      while (target === nums[--l]) {
        continue;
      }
      while (target === nums[++r]) {
        continue;
      }
      return [++l, --r];
    }
  }
  if (target === nums[left] && target === nums[right]) {
    return [left, right];
  }
  if (target === nums[left]) {
    return [left, left];
  }
  if (target === nums[right]) {
    return [right, right];
  }
  return [-1, -1]
};

console.log(searchRange([1, 2, 3, 4, 5, 5, 6], 5));
console.log(searchRange([1, 2, 3, 4, 5, 6, 7], 0));
console.log(searchRange([1, 2, 3, 4, 5, 5, 6], 4));