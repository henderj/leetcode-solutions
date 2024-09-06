 /**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let carry = 0
  let first = l1
  let second = l2
  const sum = new ListNode()
  let nextDigit = sum
  while (first !== null || second !== null || carry !== 0) {
    nextDigit.next = new ListNode()
    nextDigit = nextDigit.next
    first = first ?? new ListNode()
    second = second ?? new ListNode()
    let val = first.val + second.val + carry
    if (val >= 10) {
      val -= 10
      carry = 1
    } else {
      carry = 0
    }
    nextDigit.val = val
    first = first.next
    second = second.next
  }

  return sum.next
};

const test1L1 = new ListNode(2, new ListNode(4, new ListNode(3)))
const test1L2 = new ListNode(5, new ListNode(6, new ListNode(4)))
console.log(addTwoNumbers(test1L1, test1L2))
