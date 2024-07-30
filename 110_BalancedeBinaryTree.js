var isBalanced = function(root) {
    // base case
    if (!root) return 1;
    // check if left (height) is balanced
    let heightL = isBalanced(root.left)
    // check if right (height) is balanced
    let heightR = isBalanced(root.right)

    // if any is false, return false
    if (heightL === false || heightR === false) return false;
    // if the absolute value of both sides is greater than 1, return false
    if (Math.abs(heightL - heightR) > 1) return false

    return Math.max(heightL, heightR) + 1
};

// Time Complexity: O(n)
// Space Complexity: O(n)