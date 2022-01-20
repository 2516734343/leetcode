
//  * Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const res = [];
  traverse(root);
  return res.join(',');

  function traverse(root) {
    if (!root) {
      res.push('#');
      return;
    };
    res.push(root.val);
    traverse(root.left);
    traverse(root.right);
  }
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function (data) {
  if (!data) return null;
  const nodes = data.split(',');
  if (nodes.length === 0) return null;
  const root = buildTree(nodes);

  function buildTree(nodes) {
    const first = nodes.shift();
    if (first === '#') {
      return null
    }
    const root = new TreeNode(first);
    root.left = buildTree(nodes);
    root.right = buildTree(nodes);
    return root;
  }


  return root;


};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
const root = new TreeNode(1, 2, 4);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.right = new TreeNode(3);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(4);
root.right.left.left = new TreeNode(4);

console.log(deserialize(serialize(root)));