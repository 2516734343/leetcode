/**
 
问题：给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。



思路： 使用递归，要满足二叉搜索树，必须是左子树<root<右子树，左子树的数量*右子树的数量=结果。
将区间内的每一个数字作为根节点，求能够组合成二叉搜索树的数量，累加所有节点的。
 */


function numTrees(n) {

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      memo[i][j] = 0;
    }
  }
  // let memo = new Array(n+1).fill(new Array(n+1).fill(0));
  return count(1, n);

  function count(low, high) {
    if (low > high) return 1;
    if (memo[low][high] != 0) return memo[low][high];
    let res = 0;
    for (let i = low; i <= high; i++) {
      const left = count(low, i - 1);
      const right = count(i + 1, high);
      res = res + left * right;
    }
    memo[low][high] = res;
    return res;
  }

}
