/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length <= 0 || inorder.length <= 0 || inorder.length !== preorder.length) {
    return null;
  }
  const val = preorder[0];
  let root = new TreeNode(val);
  const index = inorder.findIndex(it => it === val);
  const inorder_left = inorder.slice(0, index);
  const inorder_right = inorder.slice(index + 1, inorder.length);
  const preorder_left = preorder.slice(1, inorder_left.length + 1);
  const preorder_right = preorder.slice(preorder_left.length + 1);
  root.left = buildTree(preorder_left, inorder_left);
  root.right = buildTree(preorder_right, inorder_right);
  return root;
};