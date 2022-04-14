//统计一个数字在排序数组中出现的次数。
//
//
//
// 示例 1:
//
//
//输入: nums = [5,7,7,8,8,10], target = 8
//输出: 2
//
// 示例 2:
//
//
//输入: nums = [5,7,7,8,8,10], target = 6
//输出: 0
//
//
//
// 提示：
//
//
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums 是一个非递减数组
// -109 <= target <= 109
//
//
//
//
// 注意：本题与主站 34 题相同（仅返回值不同）：https://leetcode-cn.com/problems/find-first-and-last-
//position-of-element-in-sorted-array/
// Related Topics 数组 二分查找
// 👍 293 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    function binarySearch(nums, target, isLeft) {
        let index = nums.length, left = 0, right = nums.length - 1;

        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
             if(nums[mid] > target || (isLeft && nums[mid] >= target)) {
                right = mid - 1;
                index = mid;
            } else {
                left = mid + 1;
            }
             !isLeft && console.log(left, right);
        }
        return index;
    }

    let result = 0;

    const leftIndex = binarySearch(nums, target, true);
    const rightIndex = binarySearch(nums, target, false) - 1;
    if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
        result = rightIndex - leftIndex + 1;
    }

    return result;

};

console.log(search([5,7,7,7,8,8,10], 7));
//leetcode submit region end(Prohibit modification and deletion)
