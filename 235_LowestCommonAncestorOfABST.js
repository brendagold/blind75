var lowestCommonAncestor = function(root, p, q) {
    // if the value is less than the root traverse to the left
    if(p.val <  root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    }
     // if the value is greater than the root traverse to the right
    if(p.val >  root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q)
    }

    // if the node is not on the left or right, that is the root, return
    return root
};

// Time Complexity: O(n)
// Space Complexity: O(n)