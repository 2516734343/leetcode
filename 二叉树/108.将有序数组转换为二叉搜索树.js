
//  * Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**. 中间的值是root
 * @param {number[]} nums
 * @return {TreeNode} 
 */
var sortedArrayToBST = function (nums) {
  if (nums.length <= 0) {
    return null;
  }
  return build(nums, 0, nums.length - 1);

  function build(nums, left, right) {
    if (left > right) {
      return null;
    }
    const mid = Math.ceil((left + right) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = build(nums, left, mid - 1);
    root.right = build(nums, mid + 1, right);
    return root;
  }

};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))