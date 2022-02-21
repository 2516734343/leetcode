/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.left = null;
root.left.right = new TreeNode(2);
/** 二叉搜索树的中序遍历是升序的
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let arrs = [];
  transe_LDR(root);
  arrs = arrs.filter(it => it);
  console.log(arrs);
  if (k > arrs.length) return null;
  function transe_LDR(root) {
    if (root === null) return null;
    transe_LDR(root.left);
    arrs.push(root.val);
    transe_LDR(root.right);
  }
  return arrs[arrs.length - k];
};
console.log(kthLargest(root, 2));