// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.


// Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  // Create a new list for the result
  const result = new ListNode(0);
  // Set the head to result, because head will be reading the 'reference' of result and hence changing it
  let head = result;
  // Initialise remainder to 0
  let remain = 0;
  
  while (l1 || l2) {
      let sum = remain;
      if (l1) {
          sum = l1.val + sum;
          l1 = l1.next;
      }
      if (l2) {
          sum = l2.val + sum;
          l2 = l2.next;
      }
      // update the result
      head.next = new ListNode(sum % 10);
      remain = Math.floor(sum  / 10);
      head = head.next;
  }
  if (remain > 0) {
      head.next = new ListNode(remain)
  }
  console.log('result', result.next)
  console.log('head', head)
  return result.next
};

function initialiseList(numbers) {
  const list = new ListNode(0);
  let head = list;
  for (num of numbers) {
    head.next = new ListNode(num);
    head = head.next;
  }
  // console.log('list', list, head)
  return list.next;
}

addTwoNumbers(initialiseList([2,4,3]), initialiseList([5,6,4]));

