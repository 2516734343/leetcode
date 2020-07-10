// 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

// 示例:

// 输入:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// 输出: 7
// 解释: 因为路径 1→3→1→1→1 的总和最小。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    //定义数组含义 dp[i][j]表示起点到[i][j]的最小路径和
    var dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            dp[i][j] = 0;      
        } 
    }
    dp[0][0] = grid[0][0];
    //寻找数组元素之间的关系dp[i][j] = min(dp[i-1][j],dp[i][j-1]) + arr[i][j];
    //寻找初始值
    for (let i = 1; i < m; i++) { //最左边那一列
        dp[i][0] = dp[i-1][0]+grid[i][0];     
    }
    for (let j = 1; j < n; j++) { //最上面那一行
        dp[0][j] = dp[0][j-1]+grid[0][j];    
    }
    //计算得出结果
    for (let i = 1; i < m; i++) {
       for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j];   
       }   
    }
    // console.log(dp[m-1][n-1]);
    return dp[m-1][n-1];
};
var arr = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]
  minPathSum(arr);