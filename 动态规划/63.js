// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
//
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
//
// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
// 网格中的障碍物和空位置分别用 1 和 0 来表示。
//
// 说明：m 和 n 的值均不超过 100。
//
// 示例 1:
//
// 输入:
// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// 输出: 2
// 解释:
// 3x3 网格的正中间有一个障碍物。
// 从左上角到右下角一共有 2 条不同的路径：
// 1. 向右 -> 向右 -> 向下 -> 向下
// 2. 向下 -> 向下 -> 向右 -> 向右

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    //定义数组含义 dp[i][j]表示从起点到[i][j]坐标的路径总数
    var dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            dp[i][j] = 0;      
        } 
    }
    // 表示数组之间的元素关系 dp[i][j] = dp[i-1][j]+dp[i][j-1];
    //初始化
    for (let i = 0; i < m; i++) {//最左边
        if(obstacleGrid[i][0] != 1){
            dp[i][0] = 1;
        } else {
            dp[i][0] = 0;
        }  
    }
      for (let j = 0; j < n; j++) {//最上边
        if(obstacleGrid[0][j] != 1){
            dp[0][j] = 1;
        }  else{
            dp[0][j] = 0;
        }  
    }
    //计算最终值
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if(obstacleGrid[i][j] != 1){
                dp[i][j] = dp[i-1][j]+dp[i][j-1];
            } else {
                dp[i][j] = 0;
            }
        } 
    }
    console.log(dp[m-1][n-1]);
    return dp[m-1][n-1];
};
// var arr =  [
//       [0,0,0],
//       [0,1,0],
//       [0,0,0]
//     ]
var arr = [[1,0]];
    uniquePathsWithObstacles(arr);
