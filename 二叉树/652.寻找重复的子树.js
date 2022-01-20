
//  * Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  let stringMap = new Map();
  let res = [];
  traverse(root);
  console.log(res);
  return res;

  function traverse(root) {
    if (!root) {
      return '#';
    }
    const left = traverse(root.left);
    const right = traverse(root.right);
    let result = left + ',' + right + ',' + root.val; // 序列化二叉树
    console.log(result);
    const count = stringMap.get(result) || 0;
    console.log(count);
    if (count === 1) {
      res.push(root);
      console.log(res);
    }
    stringMap.set(result, count + 1);

    return result;
  }
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.right = new TreeNode(3);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(4);
root.right.left.left = new TreeNode(4);

findDuplicateSubtrees(root);