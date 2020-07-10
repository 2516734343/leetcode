/*
70. 爬楼梯
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶

 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //定义数组dp[i]表示爬i个台阶有的方法
    let dp = new Array(n+1);
    //找出数组元素之间的关系 dp[i] = dp[i-1]+dp[i-2];
    //初始化
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3;i <= n; i++){
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[n];
};
console.log(climbStairs(5));
