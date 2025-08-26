/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let arrayL1 = []
    let arrayL2 = []
    let current1 = l1
    let current2 = l2
    while(current1 !== null) {
        arrayL1.unshift(current1.val)
        current1 = current1.next
    }
    while(current2 !== null) {
        arrayL2.unshift(current2.val)
        current2 = current2.next
    }
    let result1 = BigInt(arrayL1.join(''))
    let result2 = BigInt(arrayL2.join(''))
    let result = (result1 + result2).toString().split('')


    let linkedList = arrayToLinkedList(result)
    return linkedList
};

function arrayToLinkedList(arr) {
    let head = null
    for (let i =0; i < arr.length; i++) {
        head = new ListNode(Number(arr[i]), head)
    }
    return head
}

