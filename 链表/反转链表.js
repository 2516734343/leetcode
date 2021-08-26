
 //Definition for singly-linked list.
 // function ListNode(val) {
 //     this.val = val;
 //     this.next = null;
 // }

 // var a = new ListNode('a');
 // var b = new ListNode('b');
 // var c = new ListNode('c');
 // a.next = b;
 // b.next = c;
 // c.next = null;
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head == null || head.next == null) return head;
    var temp = head;
    while (temp.next) {
        var nodes = temp.next;
        temp.next = temp.next.next;
        nodes.next = head;
        head = nodes;
    }
    return head;
};
console.log(reverseList(a));
