 // 1 , 2 , 3, null
 var reverseList = function(head) {
    let rev = null;

    while(head) { // keep running until head = null
        let nextNode = head.next // temporal node 
        head.next =rev
        rev = head
        head = nextNode
    }

    return rev
};

// Time Complexity: O(n)
// Space Complexity: O(1)