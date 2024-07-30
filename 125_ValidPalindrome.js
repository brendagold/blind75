let isPalindrome = function(s) {
    // Handle edge cases (empty string or single character)
 if (s.length <= 1) return true;

 // Convert to lowercase and remove non-alphanumeric characters
 s = s.toLowerCase().replace(/[^[a-z0-9]+$/g, "");
   //using two pointers
   let pointer1 = 0, pointer2 = s.length - 1;
   while (pointer1 <= pointer2) {
if (s[pointer1] !== s[pointer2]) {
     return false;
   }

   // move pointers
   pointer1++;
   pointer2--;
   }

   return true
};

// Time Complexity: O(n)
// Space Complexity: O(1)