/**
 * 最大树定义：一个树，其中每个节点的值都大于其子树中的任何其他值。

给出最大树的根节点 root。

就像之前的问题那样，给定的树是从列表 A（root = Construct(A)）递归地使用下述 Construct(A) 例程构造的：

如果 A 为空，返回 null
否则，令 A[i] 作为 A 的最大元素。创建一个值为 A[i] 的根节点 root
root 的左子树将被构建为 Construct([A[0], A[1], ..., A[i-1]])
root 的右子树将被构建为 Construct([A[i+1], A[i+2], ..., A[A.length - 1]])
返回 root
请注意，我们没有直接给定 A，只有一个根节点 root = Construct(A).

假设 B 是 A 的副本，并在末尾附加值 val。题目数据保证 B 中的值是不同的。

返回 Construct(B)。

 * 
 * 
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**将【A】中序遍历后 加上val值 就变成【B】的中序遍历
通过中序遍历A得到一个数组，然后将val push到数组中，得到的数组就是结果树的中序遍历，转化为树就行了。
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function (root, val) {
  if (!root) return;
  if (root.val <= val) {
    const node = new TreeNode(val);
    node.left = root;
    return node;
  }
  let r = root.right;
  let p = root;
  while (r) {
    if (r.val < val) {
      const node = new TreeNode(val);
      node.left = r;
      p.right = node;
      break;
    }
    p = r;
    r = r.right;
  }
  if (r === null) {
    p.right = new TreeNode(val);
  }
  return root;
};