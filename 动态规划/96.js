/**
给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

示例:
输入: 3
输出: 5
解释:
    给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

    1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

*/
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // 定义数组 dp[n]表示以 1 ... n 为节点组成的二叉搜索树有dp[n]种
    var dp = new Array(n+1).fill(0);
    //写出数组各元素之间的关系 dp[i] += dp[i] + dp[i-j-1];
    //初始化
    dp[0] = 0;dp[1] = 1;
    //求出dp[n]
    for(let i=2;i<=n;i++){
        for(let j=0;j<i;j++){//j表示左子树的节点
            dp[i] += dp[j] * dp[i-j-1];
        }
    }
    return dp[n];

};
