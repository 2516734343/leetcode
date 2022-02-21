function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  if (!root) return 0;
  let res = 0;
  let rank = 0;
  trasver(root, k);
  return res;


  function trasver(root, k) {
    if (!root) return;
    trasver(root.left, k);
    rank++;
    if (k === rank) {
      res = root.val;
      return;
    }
    trasver(root.right, k);
  }

};
const root = new TreeNode(5, 3, 6);
root.left = new TreeNode(3);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);
console.log(kthSmallest(root, 3));
