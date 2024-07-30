// using Dynamic Programming

var climbStairs = function(n) {
   let memo  = [] //memorization array

   memo[1] = 1 //base case 1 
   memo[2] = 2 //base case 2

   for (let i = 3; i <= n; i++) {
    //generate number of ways for n
    memo[i] = memo[i-1] + memo[i-2]
   }

   return memo[n]
};

// Time complexity: O(n)
// Space complexity: O(n)