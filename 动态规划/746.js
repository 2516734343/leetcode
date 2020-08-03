
// 数组的每个索引作为一个阶梯，第 i个阶梯对应着一个非负数的体力花费值 cost[i](索引从0开始)。
//
// 每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。
//
// 您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。
//
// 示例 1:
//
// 输入: cost = [10, 15, 20]
// 输出: 15
// 解释: 最低花费是从cost[1]开始，然后走两步即可到阶梯顶，一共花费15。
//  示例 2:
//
// 输入: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// 输出: 6
// 解释: 最低花费方式是从cost[0]开始，逐个经过那些1，跳过cost[3]，一共花费6。
// 注意：
//
// cost 的长度将会在 [2, 1000]。
// 每一个 cost[i] 将会是一个Integer类型，范围为 [0, 999]。

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    //定义数组  表示走到第i个台阶所花费的最小精力
    let n = cost.length;
    let dp = new Array(n+1).fill(0);
    //确定数组元素之间的关系 dp[i] = Math.min(dp[i-2],dp[i-1])+cost[i];
    //初始化
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i <= n; i++) {
        if(i === n) { //如果最后一步落在了最后一个台阶上，最后一个台阶花费值不计算在内
            dp[i] = Math.min(dp[i-2],dp[i-1]);
        }else{
            dp[i] = Math.min(dp[i-2],dp[i-1])+cost[i];
        }  
    }
    return dp[n];
};
cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(cost));
