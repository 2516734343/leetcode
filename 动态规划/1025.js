// 爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。
//
// 最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：
//
// 选出任一 x，满足 0 < x < N 且 N % x == 0 。
// 用 N - x 替换黑板上的数字 N 。
// 如果玩家无法执行这些操作，就会输掉游戏。
//
// 只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 false。假设两个玩家都以最佳状态参与游戏。
// 1 f
// 2 t
// 3 f 
// 4 t
// 5 f
// 6 t
/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    if(N ===1 ) {
        return false;
    }
    if(N===2){
        return true;
    }
    //定义数组 数组代表为N时的boolean值
    var dp = new Array(N+1);
    dp[1] = false;
    dp[2] = true;
    for (let i = 3; i <= N; i++) {
        dp[i] = false;
        for (let j = 1; j < i; j++) {
            if(i % j === 0 && !dp[i-j]){
                dp[i] = true;
                break;
            }  
        } 
    }
    return dp[N];
    //确定数组各元素之间的关系
    //初始化数组
    //计算并返回结果
};
