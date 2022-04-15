//从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
//
//
//
// 例如:
//给定二叉树: [3,9,20,null,null,15,7],
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
//
// 返回：
//
// [3,9,20,15,7]
//
//
//
//
// 提示：
//
//
// 节点总数 <= 1000
//
// Related Topics 树 广度优先搜索 二叉树
// 👍 187 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (root === null) return [];
    const p = [root];
    const result = [];

    while(p.length > 0) {
        let level = p.length;
        for (let i = 0; i < level; i++) {
            let current = p.shift();
            result.push(current.val);
            current.left && p.push(current.left);
            current.right && p.push(current.right);
        }
    }
    return result;
};
//leetcode submit region end(Prohibit modification and deletion)
