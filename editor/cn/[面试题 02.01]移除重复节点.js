//编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
//
// 示例1:
//
//
// 输入：[1, 2, 3, 3, 2, 1]
// 输出：[1, 2, 3]
//
//
// 示例2:
//
//
// 输入：[1, 1, 1, 1, 2]
// 输出：[1, 2]
//
//
// 提示：
//
//
// 链表长度在[0, 20000]范围内。
// 链表元素在[0, 20000]范围内。
//
//
// 进阶：
//
// 如果不得使用临时缓冲区，该怎么解决？
// Related Topics 哈希表 链表 双指针
// 👍 146 👎 0


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
 * @return {ListNode}
 */
var removeDuplicateNodes = function(head) {
    if (head === null) return head;
    let hash = [], p1 = null, p2 = head;
    while (p2) {
        if (!hash.includes(p2.val)) {
            // hash不包含
            hash.push(p2.val);
            p1 = p2;
        } else {
            // 删除p2节点
            p1.next = p2.next;
        }
        p2 = p2.next;
    }
    return head;

};
//leetcode submit region end(Prohibit modification and deletion)
