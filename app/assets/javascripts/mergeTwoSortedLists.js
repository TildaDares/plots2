/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1 || !list2) return list1 || list2
    let mergedList = null
    let current = mergedList
    
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            if(!current) {
                mergedList = new ListNode(list1.val, null)
                current = mergedList
            } else {
                current.next = new ListNode(list1.val, null)
                current = current.next
            }
            list1 = list1.next
        } else {
            if(!current) {
                mergedList = new ListNode(list2.val, null)
                current = mergedList
            } else {
                current.next = new ListNode(list2.val, null)
                current = current.next
            }
            list2 = list2.next
        }
    }
    
    if(list1) {
        current.next = list1
    }
    
    if(list2) {
        current.next = list2
    }
    
    return mergedList
};