/*
53. 最大子序和

给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

    输入: [-2,1,-3,4,-1,2,1,-5,4],
        输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    /*
    解法一：
    let cursum = nums[0],max = nums[0];
    for (let i=1;i<nums.length;i++){
        if(cursum > 0){
            cursum += nums[i];
        }else{
            cursum = nums[i];
        }
        if(cursum > max){
            max = cursum;
        }
    }
    return max;
    */
    // 解法二：动态规划
    //定义数组 dp[i] 表示长度为i的数组的最大子序列和
    let dp = new Array(nums.length+1);
    //各元素之间的关系 dp[i] = Math.max(nums[i-1],nums[i-1]+dp[i-1])
    //初始化元素
    dp[0] = nums[0];
    dp[1] = nums[0];
    for (let i=2;i<=nums.length;i++){
        dp[i] = Math.max(nums[i-1],nums[i-1]+dp[i-1]);
    }
    return Math.max(...dp);
};
console.log(maxSubArray([-3,-2]));
