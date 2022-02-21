
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length !== 0) {
    let level = queue.length;
    let curlevel = [];
    for (let i = 0; i < level; i++) {
      let cur = queue.shift();
      curlevel.push(cur.val);
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
    result.push(curlevel);
  }
  return result;

};

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(levelOrder(root));


