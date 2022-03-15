//实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
//
// 注意：本题相对原题稍作改动
//
// 示例：
//
// 输入： 1->2->3->4->5 和 k = 2
//输出： 4
//
// 说明：
//
// 给定的 k 保证是有效的。
// Related Topics 链表 双指针
// 👍 97 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
    if (head === null) return head;
    let p1 = head, p2 = head;
    for(let i = 1; i <= k; i++) {
        p1 = p1.next;
    }
    while (p1 !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2.val;
};
//leetcode submit region end(Prohibit modification and deletion)
