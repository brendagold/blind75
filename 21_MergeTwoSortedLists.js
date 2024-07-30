var mergeTwoLists = function(list1, list2) {
    let mergedList = new ListNode(0) // create a list node
    let currentNode = mergedList; // this node tracks the head of the node
  
    while(list1 && list2 ){ // while both nodes exist
        if (list1.val <= list2.val) { // checks which headNode should come first
                mergedList.next = list1
                list1 = list1.next
        } else {
            mergedList.next = list2
            list2 = list2.next
        }
        mergedList = mergedList.next;
    }
    // Appends the remaining list if either list1 or list2 is null
    if (list1 !== null){ 
        mergedList.next = list1
    } else {
        mergedList.next = list2
    }
    return currentNode.next
};

// Time Complexity: O(m + n)
// Space Complexity: O(1)