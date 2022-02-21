/**
 * 
 * 问题：
 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
差值是一个正数，其数值等于两值之差的绝对值。

思路：

二叉搜索树中序遍历是有序的，在中序遍历的时候比较相邻的差值，取最小的。
 */


/** 中序遍历的时候求组小差值
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  if (!root) return 0;
  let res = Infinity;
  let prev;
  transe(root);
  return res;

  function transe(root) {
    if (!root) return;
    transe(root.left);
    if (prev != null) {
      res = Math.min(res, root.val - prev.val);
    }
    prev = root;

    transe(root.right);

  }

};