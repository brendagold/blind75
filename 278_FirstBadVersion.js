var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */

    // Using Binary Search 

    return function(n) {
        let left = 1, right = n, midpoint;

        while (left < right) {
            midpoint = Math.floor((left + right) / 2)

            if (isBadVersion(midpoint)) {
                right = midpoint
            } else {
                left = midpoint + 1 
            }
        }
         return right
    };
};

// Time Complexity: O(log(n))
// Space Complexity: O(1)