let invertTree = function(root) {
    if (root === null) return null; //base case
 
    let temp = root.left // store the value of left with temp
    root.left = root.right // swap left to right
    root.right = temp // then right to temp(left)
 
     // using recursion - repeat for all nodes
     invertTree(root.left)
     invertTree(root.right)
 
     return root
 };
 
 // Time Complexity: O(n)
 // Space Complexity: O(n)