
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
  return Math.abs(deep(root.left) - deep(root.right)) <= 1;


  function deep(root) {
    if (!root) return 0;
    return Math.max(deep(root.left), deep(root.right)) + 1;
  }

};
const root = new TreeNode(3);
root.left = 9;
root.right = 20;
root.right.left = 15;
root.right.right = 7;

console.log(isBalanced(root));