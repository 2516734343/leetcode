/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  let n = this.nums.length;
  this.presum = new Array(n + 1).fill(0);
  for (let i = 1; i < n + 1; i++) {
    this.presum[i] = this.presum[i - 1] + this.nums[i - 1];
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {

  return this.presum[right + 1] - this.presum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
var obj = new NumArray([1, 2, 3, -1, 0, 5, 6]);
var param_1 = obj.sumRange(2, 5);
console.log(param_1);