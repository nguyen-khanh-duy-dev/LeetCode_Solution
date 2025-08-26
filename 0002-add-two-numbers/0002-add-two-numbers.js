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

//  Cách 1: Duyệt qua node và lưu vào mảng => Sử lý mảng để trở thành số => Công 2 số sau đó lại biến ngược lại thành Linklist
// var addTwoNumbers = function(l1, l2) {
//     let arrayL1 = []
//     let arrayL2 = []
//     let current1 = l1
//     let current2 = l2
//     while(current1 !== null) {
//         arrayL1.unshift(current1.val)
//         current1 = current1.next
//     }
//     while(current2 !== null) {
//         arrayL2.unshift(current2.val)
//         current2 = current2.next
//     }
//     let result1 = BigInt(arrayL1.join(''))
//     let result2 = BigInt(arrayL2.join(''))
//     let result = (result1 + result2).toString().split('')


//     let linkedList = arrayToLinkedList(result)
//     return linkedList
// };

// function arrayToLinkedList(arr) {
//     let head = null
//     for (let i =0; i < arr.length; i++) {
//         head = new ListNode(Number(arr[i]), head)
//     }
//     return head
// }


// Cách 2: Công từng node, và phần nguyên sẽ được công cho thằng phía sau, phần dư sẽ được giữ lại và lưu vào link list

// Ở đây sử dụng kĩ thuật dummy head(result) => Node đầu giả(Kq sẽ là từ node thứ 2 trở đi), và current sẽ tham chiếu tới result nên là các giá trị lưu lại bằng current thì bên result cũng sẽ thay đổi
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0)
    let current = result
    let carry = 0

    while(l1 !== null || l2 !== null || carry > 0) {
        let sum = carry

        if(l1 !== null) {
            sum += l1.val
            l1 = l1.next
        }

        if(l2 !== null) {
            sum += l2.val
            l2 = l2.next
        }

        carry = Math.floor(sum / 10)
        current.next = new ListNode(sum % 10)
        current = current.next
    }

    return result.next

    
    

}

