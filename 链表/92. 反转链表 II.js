/*
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
    1 ≤ m ≤ n ≤ 链表长度。

示例:

    输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-linked-list-ii
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode('a');
var b = new ListNode('b');
var c = new ListNode('c');
var d = new ListNode('d');
var e = new ListNode('e');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;
function reverseN(head, n) {
    if (n == 1) {
        back = head.next;
    }
    return head;
    var last = reverseN(head.next, n - 1);
    head.next.next = head;
    head.next = back;
    return last;
}
var reverseBetween = function(head, m, n) {
    var back = null;
    if(m === 1) {
        return reverseN(head,n);
    }
    head.next = reverseBetween(head.next,m-1,n-1);
    return head;
};
console.log(reverseBetween(a,2,4));
