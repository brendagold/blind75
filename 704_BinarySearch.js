let search = (nums, target) => {
    let first = 0;
    let last = nums.length-1;
    // set the first and last to the first and last index of the array.
    
    while (first <= last) {
      //check if the first is equal to the last
      let midpoint = Math.floor((first + last) / 2);
     
      if (nums[midpoint] == target) { // checks if midpoint is the target, return the midpoint
        return midpoint
      } else if (nums[midpoint] < target) {
        first = midpoint + 1; // if midpoint is less than target, move the first pointer to the midpoint + 1
      } else {
        last = midpoint - 1; // if midpoint is greater than target, move the last pointer to the midpoint - 1
      }
    }
    
    return -1
  }
  
   // Time Complexity: O(log(n))
   // Space Complexity: O(1)