// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

// 问总共有多少条不同的路径？
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //定义数组元素的含义 表示从起点走到[i,j]有dp[i][j]种路径
    var dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            dp[i][j] = 0;      
        } 
    }
    //找到元素之间的关系 dp[i][j] = dp[i-1][j]+dp[i][j-1]
    //找到初始值
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;    
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;    
    }
    //计算dp[i][j] = dp[i-1][j]+dp[i][j-1]
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j]+dp[i][j-1];       
        }   
    }
    // console.log(dp[m-1][n-1])
    return dp[m-1][n-1];
};
uniquePaths(7,3);
