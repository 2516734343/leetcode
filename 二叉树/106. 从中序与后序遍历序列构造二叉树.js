/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (postorder.length <= 0 || inorder.length <= 0 || inorder.length !== postorder.length) {
    return null;
  }
  const val = postorder[postorder.length - 1];
  let root = new TreeNode(val);
  const index = inorder.findIndex(it => it === val);
  const inorder_left = inorder.slice(0, index);
  const inorder_right = inorder.slice(index + 1, inorder.length);
  const postorder_left = postorder.slice(0, inorder_left.length);
  const postorder_right = postorder.slice(postorder_left.length, postorder.length - 1);
  root.left = buildTree(inorder_left, postorder_left);
  root.right = buildTree(inorder_right, postorder_right);
  return root;
};