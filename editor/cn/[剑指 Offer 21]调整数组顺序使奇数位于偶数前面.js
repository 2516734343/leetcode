//输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
//
//
//
// 示例：
//
//
//输入：nums = [1,2,3,4]
//输出：[1,3,2,4]
//注：[3,1,2,4] 也是正确的答案之一。
//
//
//
// 提示：
//
//
// 0 <= nums.length <= 50000
// 0 <= nums[i] <= 10000
//
// Related Topics 数组 双指针 排序
// 👍 210 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/** 使用双指针问题，相向移动
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    if (nums.length === 0) return [];
    let len = nums.length, left = 0, right = len - 1;
    while (left < right) {
        let leftNum = nums[left], rightNum = nums[right];
        // 如果left为偶数
        if (leftNum%2 === 0) {
            // right为奇数
            if (rightNum%2 === 1) {
                // 交换两者顺序
                const temp = rightNum;
                nums[right] = leftNum;
                nums[left] = temp;
                left++;
                right--;
            } else {
                // right为偶数
                right--;
            }
        } else {// left为奇数
            // right为偶数
            if (rightNum%2 === 0) {
                left++;
                right--;
            } else {
                // right为奇数
                left++;
            }
        }
    }
    return nums;
};
//leetcode submit region end(Prohibit modification and deletion)
