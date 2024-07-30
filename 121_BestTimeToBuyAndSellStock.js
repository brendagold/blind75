// using two pointers

let maxProfit = function(prices) {
    if (prices.length == 1) return 0 // if the array length is 1, return 0
    let profit = 0
    let left = 0
    // create left and right pointers 

    for(let right = 1; right < prices.length; right++) { // iterate through the array
        if (prices[right] > prices[left]) {
          // if the number on the right is greater than the one on the left, 
        profit = Math.max(profit , prices[right] - prices[left])
          // check if the new profit is greater than the previous profit  
        } else {
            // move the left pointer to the right and repeat. 
            left = right
        }
    }
    return profit  
};

// Time Complexity: O(n)
// Space Complexity: O(1)