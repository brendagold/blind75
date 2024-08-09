// Using Recursion
let maxDepth = function(root) {
    if (root == null) {
        return 0
    } // base case

// get the maximum of levels in the left and right, them add it to the root
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

// Time Complexity: O(n)
// Space Complexity: O(n)