/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      nums[i - count] = nums[i];
    }
  }
};

console.log([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);