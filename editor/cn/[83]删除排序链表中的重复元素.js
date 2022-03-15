//给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
//
//
//
// 示例 1：
//
//
//输入：head = [1,1,2]
//输出：[1,2]
//
//
// 示例 2：
//
//
//输入：head = [1,1,2,3,3]
//输出：[1,2,3]
//
//
//
//
// 提示：
//
//
// 链表中节点数目在范围 [0, 300] 内
// -100 <= Node.val <= 100
// 题目数据保证链表已经按升序 排列
//
// Related Topics 链表
// 👍 744 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head === null) return head;
    let slow = head, fast = head;
    while (fast !== null) {
        // 找到不重复的就告诉slow,并且slow往前走一步
        if (fast.val !== slow.val) {
            // 告诉slow,
            slow.next = fast;
            // slow往前走一步
            slow = slow.next;
        }
        fast = fast.next;
    }
    // 断开和后面重复元素的链接
    slow.next = null;
    return head;

};
//leetcode submit region end(Prohibit modification and deletion)
