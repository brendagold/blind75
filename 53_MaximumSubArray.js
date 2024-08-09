// sliding window

let maxSubArray = function(nums) {
    let maxSub = nums[0] 
    let currentSum = 0

    for (const num of nums) {
        // if current sum is negative
        if (currentSum < 0) {
            // reset currentSum to 0
            currentSum = 0
        }
        currentSum += num // add num to current sum

        // check for the max and update maxSub
        maxSub = Math.max(maxSub, currentSum)
    }
    return maxSub
};

// Time Complexity : O(n)
// Space Complexity: o(n)