let kClosest = function(points, k) {
    // create a heap using JS Priority Queue method
    let maxHeap = new MaxPriorityQueue()

    // create a function to solve the distance between two points (x^2 + y^2)
    let distanceCal = (x, y) => {
        return (x * x) + (y * y)
    }

    // this for loop gives us the heap of size k
    for(let [x,y] of points) {
        let distance = distanceCal(x,y) 
        maxHeap.enqueue([x, y], distance) // adds the cordinates and distance to the queue
        // check if maxHeap size is greater than k
        if (maxHeap.size() > k) {
            // remove top element
            maxHeap.dequeue()
        }
    }

    let result = []
    while (maxHeap.size()) {
        result.push(maxHeap.dequeue().element)
    }

    return result

};

// Time Complexity: O(nlog(n)) 
// Space Complexity: O(n) 