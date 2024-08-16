 // using two pointers 
 // Two pointers requires a sorted array
 var threeSum = function(nums) {
    let result = []

    if (nums.length === 0) return []

    nums = nums.sort((a,b) => a-b)

    for(let i = 0; i < nums.length-2; i++) {

        // stop duplicates from occuring at i
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i + 1; 
        let k = nums.length-1

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]

            if (sum === 0){
                result.push([nums[i], nums[j], nums[k]])

                // stop duplicates in j and k
                while(nums[j] === nums[j + 1]) j++
                while(nums[k] === nums[k + 1]) k--

                j++
                k--

            } else  if (sum < 0) {
                j++
            } else {
                k--
            }
        }
    }

    return result
};

// Time Complexity: O(n^2)
// Space Complexity: O(1)