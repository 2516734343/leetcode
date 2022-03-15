
//  * Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const head = new ListNode(4);
head.next = new ListNode(5);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(9);
head.next.next.next.next = new ListNode(null);
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head === null) return head;
  if (head.val === val) return head.next;
  let p = head;
  // while (p.next !== null && p.next.val !== val) {
  //   p = p.next;
  // }
  // if (p.next !== null) {
  //   p.next = p.next.next;
  // }
  while (p.next !== null) {
    if (p.next.val === val) {
      p.next = p.next.next;
      return head;
    }
    p = p.next;
  }
  // return head;
};

console.log(deleteNode(head, 4));