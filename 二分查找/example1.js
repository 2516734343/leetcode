/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * [-1,0,3,5,9,12] 9
 * 
 * 先根据自己的理解实现一版
 */
var search = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let len = nums.length;
  let mid = parseInt(len / 2);
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = left + Math.ceil((right - left) / 2);
  }
  return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 3));
console.log(search([-1, 0, 3, 5, 9, 12], 2));