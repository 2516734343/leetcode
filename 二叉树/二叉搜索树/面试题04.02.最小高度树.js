
// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


/**  搜索树的中序遍历就是升序的，二分查找，数组里的中位数就是根节点，中位数左边的是左子树，右边的是右子树。
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const mid = Math.ceil((0 + nums.length - 1) / 2);
  const root = new TreeNode(nums[mid]);
  root.left = build(0, mid - 1, nums);
  root.right = build(mid + 1, nums.length - 1, nums);
  return root;

  function build(low, high, nums) {
    if (low > high) return null;
    const mid = Math.ceil((low + high) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = build(low, mid - 1, nums);
    node.right = build(mid + 1, high, nums);
    return node;
  }

};
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));