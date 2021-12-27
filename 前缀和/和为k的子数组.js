/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let presum = [0];
  let res = 0;
  let sum_i = 0;
  presumMap = new Map();
  presumMap.set(0, 1);
  for (let idx = 0; idx < nums.length; idx++) {
    sum_i = sum_i + nums[idx];
    let sum_j = sum_i - k;
    if (presumMap.get(sum_j)) {
      res = res + presumMap.get(sum_j);
    }
    presumMap.set(sum_i, (presumMap.get(sum_i) || 0) + 1,);
  }
  return res;
};

console.log(subarraySum([0, 1, 2, 3, 0, 5, 6, -1], 5));