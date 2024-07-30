let hasCycle = function(head) {
    // create a pointer that moves X2
    let pointerX2 = head
    // while pointerX2. next isn't null
    while (pointerX2 && pointerX2.next) {
        // move head to head.next
        head = head.next
        //move pointerX2 twice
        pointerX2 = pointerX2.next.next

        if (head == pointerX2) {
            return true
        }
    }
    return false
};

// Time Complexity: O(n)
// Space Complexity: O(1)