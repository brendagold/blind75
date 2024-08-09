// using Hashmap

let containsDuplicate = function(nums) {
    let numMap = new Map() // create hashmap

    for (let num of nums) {
        numMap.set(num, (numMap.get(num) || 0) + 1)
        // if num appears more than once in map, return true
        if (numMap.get(num) > 1) {
            return true
        }
    }
    return false
};

// Time Complexity: O(n)
 // Space Complexity: O(n)